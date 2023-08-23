package com.utility.controller;


import java.util.List;
import java.util.Optional;

import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.method.configuration.GlobalMethodSecurityConfiguration;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.utility.config.CustomUserDetailsService;
import com.utility.config.JwtUtil;
import com.utility.entity.User;
import com.utility.entity.VerificationToken;
import com.utility.model.Customer;
import com.utility.model.ServiceType;
import com.utility.model.Supplier;
import com.utility.repository.UserRepository;
import com.utility.service.EmailInterface;
import com.utility.service.EmailService;
import com.utility.service.UserService;
import com.utility.service.UserServiceInterface;
import com.utility.service.VerificationTokenService;
import com.utility.valueobjects.CSignUp;
import com.utility.valueobjects.JwtRequest;
import com.utility.valueobjects.JwtResponse;
import com.utility.valueobjects.UserOtp;

import lombok.extern.log4j.Log4j2;

@RestController
@RequestMapping("/api/secure")
@CrossOrigin
@Log4j2
public class JwtController  {
	
	@Autowired
	private AuthenticationManager authenticationManager;
	@Autowired
	private CustomUserDetailsService customUserDetailsService;
	@Autowired
	private UserServiceInterface userService;
	@Autowired
	private JwtUtil jwtUtil;
	@Autowired
	private EmailInterface email;
	@Autowired
	private VerificationTokenService vts;
	@Autowired
	private static Logger log;
	
	@GetMapping("/customerslist")
	@Secured("ROLE_ADMIN")
	public List<User> getCustomersList(){
		return userService.getCustomersList();
	}
	
	@GetMapping("/adminlist")
	@Secured("ROLE_ADMIN")
	public List<User> getAdminList(){
		return userService.getAdminList();
	}
	
	@GetMapping("/supplierslist")
	@Secured("ROLE_ADMIN")
	public List<User> getSuppliersList(){
		return userService.getSuppliersList();
	}
	@PostMapping("/edituser")
	@Secured("ROLE_ADMIN")
	public User editUser(@RequestBody CSignUp s){
		return userService.editUser(s);
	}
	
	@GetMapping("/getuserforadmin/{id}")
	@Secured("ROLE_ADMIN")
	public User  getCustSuppUser(@PathVariable("id") long id) {
	
		return userService.findById(id);
	}
	
	
	@PostMapping("/changepassword")
	public int changePassword(@RequestHeader(value = "Authorization") String auth,@RequestBody JwtRequest jwt)
	{		log.info("Inside changePassword");

		Optional<User> u=userService.getUserFromToken(auth.substring(7));
		u.get().setPassword(jwt.getPassword());
		userService.changePassword(u.get());
		return 1;
	}
	@GetMapping("/getsupplieruserotp/{id}")
	public UserOtp getSupplierUserotp(@PathVariable("id") long id) {
		User u= userService.findById(id);
		log.info("Inside getSupplierUserotp");
		Long m=Long.valueOf(u.getMobile());
		return new UserOtp(m,u.getName(),u.getUsername());
	}
	@PostMapping("/saveuser")
	public User saveUser(@RequestBody User u) {
		return userService.save(u);
	}

	@PostMapping("/forgotpassword")
	public UserOtp forgotPassword(@RequestBody JwtRequest req) {
		int otp =this.email.sendMail(req.getUsername());
		User u=userService.findByUsername(req.getUsername());	
		log.info("Inside forgotPassword");

		VerificationToken vt=new VerificationToken(0l,otp,u);
		Optional<VerificationToken> v=	vts.saveToken(vt);
		if(v.isPresent()) {
			
			UserDetails userDetails=this.customUserDetailsService.loadUserByUsername(req.getUsername());
			String token=	this.jwtUtil.generateToken(userDetails);
			
			return new UserOtp(1,token,token);
		}
		return new UserOtp(1,"","");
	}
	

	
	@PostMapping("/signupsupplier")
	public UserOtp signups(@RequestBody CSignUp supp) {
		Optional<User>  u=userService.saveUserForCustomer(supp);
		log.info("Inside signups");
		Supplier c=userService.getSupplierFromSignup(supp);
		System.out.println("user saved supplier created");
		if(u.isPresent())
		{
			c.setUserid((u.get()).getId());	
		}
		else {
			throw new RuntimeException();
		}
		boolean res=userService.saveSupplier(c);
		if(res) {
				int otp =this.email.sendMail(supp.getUsername());
				VerificationToken vt=new VerificationToken(0l,otp,u.get());
				Optional<VerificationToken> v=	vts.saveToken(vt);
				if(v.isPresent()) {
					//return u.get().getId();
					UserDetails userDetails=this.customUserDetailsService.loadUserByUsername(u.get().getUsername());
					String token=	this.jwtUtil.generateToken(userDetails);
					//token="Bearar "+token;
					return new UserOtp(1,token,token);
				}
					
		}
		else {
			throw new RuntimeException();
		}
		return new UserOtp(0,"","");
	}
	
	
	
	@PostMapping("/token")
	public ResponseEntity generateToken(@RequestBody JwtRequest jwtRequest) throws Exception{
		try {
			this.authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(jwtRequest.getUsername(), jwtRequest.getPassword()));
		}
		catch (UsernameNotFoundException  | BadCredentialsException e) {
			throw new Exception("Bad Credentials");
		}
		log.info("Inside generateToken");

	UserDetails userDetails=this.customUserDetailsService.loadUserByUsername(jwtRequest.getUsername());
	String token=	this.jwtUtil.generateToken(userDetails);
	User u=userService.findByUsername(userDetails.getUsername());
	String role=u.getRole();
	HttpHeaders htt=new HttpHeaders();
	htt.set("Authorization" , token);
	JwtResponse res=new JwtResponse(token,role);
	return  ResponseEntity.ok().headers(htt).body(res);
	
	}
	@GetMapping("/getadminuser")
	@Secured("ROLE_ADMIN")
	public User  getAUser(@RequestHeader(value = "Authorization") String auth) {
	String	Username=jwtUtil.getUsernameFromToken(auth.substring(7));
		return userService.findByUsername(Username);
	}
	@GetMapping("/getcustomeruser")
	public User  getCUser(@RequestHeader(value = "Authorization") String auth) {
	String	Username=jwtUtil.getUsernameFromToken(auth.substring(7));
		return userService.findByUsername(Username);
	}
	
	@GetMapping("/getuserforsupplier/{id}")
	public User  getUserForSupplier(@PathVariable long id) {
		return userService.findById(id);
	}
	
	
	@GetMapping("/getsupplieruser")
	public User  getSUser(@RequestHeader(value = "Authorization") String auth) {
	String	Username=jwtUtil.getUsernameFromToken(auth.substring(7));
		return userService.findByUsername(Username);
	}
	
	@PostMapping("/signupcustomer")
	public UserOtp signupc(@RequestBody CSignUp cust) {
		Optional<User>  u=userService.saveUserForCustomer(cust);
		Customer c=userService.getCustomerFromSigup(cust);
		if(u.isPresent())
		{c.setUserid((u.get()).getId());
		}
		else {
			throw new RuntimeException();
		}
		boolean res=userService.saveCustomer(c);
		if(res) {
				int otp =this.email.sendMail(cust.getUsername());
				VerificationToken vt=new VerificationToken(0l,otp,u.get());
				Optional<VerificationToken> v=	vts.saveToken(vt);
				if(v.isPresent()) {
					//return u.get().getId();
					UserDetails userDetails=this.customUserDetailsService.loadUserByUsername(u.get().getUsername());
					String token=	this.jwtUtil.generateToken(userDetails);
					//token="Bearar "+token;
					return new UserOtp(1,token,token);
				}
					
		}
		else {
			throw new RuntimeException();
		}
		return new UserOtp(0,"","");
	}
	
	@PostMapping("/verifyotp")
	public String verifyOtp(@RequestBody UserOtp uo) {
//		System.out.println(uo.getUserid()+"\n"+uo.getOtp()+"\n"+uo.getToken());
		Optional<User> u= userService.getUserFromToken(uo.getToken());
		//System.out.println("1");
		
		String token=uo.getToken();
		//System.out.println("2");
		if(u.isPresent()) {
			Long otp= uo.getUserid();
			uo.setOtp(otp.toString());
			uo.setUserid(u.get().getId());
			//System.out.println("3");
		if(userService.verifyOtp(uo).get() == true)
		//	System.out.println("4");
			return token;
		}
			token="";
			return token;
	}
	@PostMapping ("/savepassword")
	public int saveOrChange(@RequestBody UserOtp uo ) {
		System.out.println(uo.getUserid()+"\n"+uo.getOtp()+"\n"+uo.getToken());

		System.out.println("1");
		Optional<User> u= userService.getUserFromToken(uo.getToken());
		System.out.println("2");
		if(u.isPresent()) {
			User use=u.get();
			
			use.setPassword(uo.getOtp());
			System.out.println("3");
			if(userService.savePassword(use))			
				return 1;
		}
		
		return 0;
		
	}
	
}
