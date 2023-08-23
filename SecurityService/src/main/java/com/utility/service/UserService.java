package com.utility.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import com.utility.config.JWTConfiguration;
import com.utility.config.JwtUtil;
import com.utility.entity.User;
import com.utility.entity.VerificationToken;

import com.utility.model.Customer;
import com.utility.model.ServiceType;
import com.utility.model.Supplier;
import com.utility.repository.UserRepository;
import com.utility.repository.VerificationTokenRepository;
import com.utility.valueobjects.CSignUp;
import com.utility.valueobjects.UserOtp;

import io.github.resilience4j.retry.annotation.Retry;


@Service
public class UserService implements UserServiceInterface{

	@Autowired
	private UserRepository userRepository;
	@Autowired
	private JWTConfiguration jwt;
	@Autowired
	private JwtUtil jwtUtil;
	@Autowired
	private RestTemplate restTemplate;
	@Autowired
	private VerificationTokenRepository vtr;
	@Autowired
	private PasswordEncoder pe;
	
	
	private static final String CUSTOMER_API="http://CUSTOMER-SERVICE/api/customer/";
	private static final String SUPPLIER_API="http://SUPPLIER-SERVICE/api/supplier/";
	private static final String SECURITY_SERVICE= "SecurityService";
	
	public User findByUsername(String username) {
		
		return userRepository.findByUsername(username);
		
	
	}
	public User changePassword(User u) {
		u.setPassword(pe.encode(u.getPassword()));
		return userRepository.save(u);
	}
	public boolean savePassword(User u) {
		u.setPassword(pe.encode(u.getPassword()));
		u.setAccountNonExpired(true);
		u.setAccountNonLocked(true);
		u.setCredentialsNonExpired(true);
		u.setEnabled(true);
		User us=userRepository.save(u);
		
		long id=vtr.findAll().stream().filter(vt->vt.getUser().getId()==us.getId()).collect(Collectors.toList()).get(0).getId();
		vtr.deleteById(id);
			return true;		
	}
	
	
	
	
	
	public Optional<User> getUserFromToken(String token){
		String mail=jwtUtil.getUsernameFromToken(token);
		return Optional.ofNullable(this.findByUsername(mail));
	}
	
	
	public Optional<Boolean> verifyOtp(UserOtp uo){
	Optional<List<VerificationToken>> o =	Optional.ofNullable(vtr.findAll().stream().filter(
				v->v.getUser().getId()==uo.getUserid())
				.collect(Collectors.toList()));	
	List<VerificationToken> l=(List)o.get();	
	if(!l.isEmpty()) {		
		VerificationToken vt=l.get(0);
		if(vt.getOtp()==Integer.valueOf(uo.getOtp()))
			vtr.deleteById(vt.getId());
			return Optional.ofNullable(true);
	}	
	
		return Optional.ofNullable(false);	
	}
	

	
	public Optional<User> saveUserForCustomer(CSignUp cust) {
		User u=new User();
		u.setName(cust.getName());
		u.setMobile(cust.getMobile());
		u.setUsername(cust.getUsername());
		u.setPassword(jwt.passwordEncoder().encode("wishit"));
		if(cust.getService()==0)
			u.setRole("ROLE_CUSTOMER");
		else 
			u.setRole("ROLE_SUPPLIER");
		u.setEnabled(false);
		u.setAccountNonExpired(false);
		u.setAccountNonLocked(false);
		u.setCredentialsNonExpired(false);
		
		return Optional.ofNullable(userRepository.save(u));	
	 
	}
	public Customer getCustomerFromSigup(CSignUp cust) {
		Customer c=new Customer();
		c.setAddress(cust.getAddress());
		c.setPincode(cust.getPincode());
		c.setAadhaar(cust.getAadhaar());
		c.setDob(cust.getDob());
		c.setUserid(0);
		return c;
	}
	
	@Retry(name = SECURITY_SERVICE,fallbackMethod ="getcFallback" )
	public boolean saveCustomer(Customer  c) {
		HttpHeaders http=new HttpHeaders();
		http.setContentType(MediaType.APPLICATION_JSON);
		String json=null;
		try {
			json=new ObjectMapper().writeValueAsString(c);
		} catch (JsonProcessingException e) {
			throw new RuntimeException(e);
		}
		HttpEntity<String> entity=new HttpEntity<String>(json,http); 
		ResponseEntity<HttpEntity> o=restTemplate.exchange("http://CUSTOMER-SERVICE/api/customer/savecustomer", HttpMethod.POST, entity, HttpEntity.class);
		if(o.getStatusCodeValue()==200)
			return true;
		else 
			return false;
	}
	public boolean getcFallback(Exception e) {		
		return false;
	}

	public Supplier getSupplierFromSignup(CSignUp supp) {
		Supplier c=new Supplier();
		c.setAddress(supp.getAddress());
		c.setPincode(supp.getPincode());
		c.setAadhaar(supp.getAadhaar());
		c.setDob(supp.getDob());
		c.setCharge(supp.getCharge());
		c.setUserid(0);
		System.out.println("before setting servicetype"+supp.getService());
		if((supp.getService())==0)
			c.setServiceType(new ServiceType(1,""));
		else 
			c.setServiceType(new ServiceType(supp.getService(),""));
		System.out.println(c.getServiceType().getId());
		System.out.println("Supplier Created- UserService.getSupplierFromSignup");
		return c;
	
	}
	@Retry(name = SECURITY_SERVICE,fallbackMethod ="getsFallback" )
	public boolean saveSupplier(Supplier c) {
		HttpHeaders http=new HttpHeaders();
		http.setContentType(MediaType.APPLICATION_JSON);
		String json=null;
		
		try {
			json=new ObjectMapper().writeValueAsString(c);
		} catch (JsonProcessingException e) {
			throw new RuntimeException(e);
		}
		HttpEntity<String> entity=new HttpEntity<String>(json,http); 
		ResponseEntity<HttpEntity> o=restTemplate.exchange("http://SUPPLIER-SERVICE/api/supplier/savesupplier", HttpMethod.POST, entity, HttpEntity.class);
		if(o.getStatusCodeValue()==200)
			return true;
		else 
			return false;
	}

	
	
	public boolean getsFallback(Exception e) {		
		return false;
	}

	public User save(User u) {		
		return userRepository.save(u);
	}
	public User findById(long id) {
		
		return userRepository.findById(id).get();
	}
	public List<User> getCustomersList() {
		
		return userRepository.findAll().stream().filter(u->u.getRole().equals("ROLE_CUSTOMER")).collect(Collectors.toList());
	}
	public List<User> getSuppliersList() {
		
		return userRepository.findAll().stream().filter(u->u.getRole().equals("ROLE_SUPPLIER")).collect(Collectors.toList());

	}
	public List<User> getAdminList() {
		return userRepository.findAll().stream().filter(u->u.getRole().equals("ROLE_ADMIN")).collect(Collectors.toList());

	}
	public User editUser(CSignUp s) {
		User u=userRepository.findById(s.getAadhaar()).get();
		if(s.getIsAccountNonExpired()==0)
			u.setAccountNonExpired(false);
		else
			u.setAccountNonExpired(true);
		
		if(s.getIsAccountNonLocked()==0)
			u.setAccountNonLocked(false);
		else
			u.setAccountNonLocked(true);
		if(s.getIsCredentialsNonExpired()==0)
			u.setCredentialsNonExpired(false);
		else
			u.setCredentialsNonExpired(true);
		if(s.getIsEnabled()==0)
			u.setEnabled(false);
		else
			u.setEnabled(true);
		u.setRole(s.getRole());
		return userRepository.save(u);		
		 
	}
	

	

	
}
