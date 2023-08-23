package com.utility.service;


import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.utility.entity.ServiceType;
import com.utility.entity.Supplier;
import com.utility.model.Customer;
import com.utility.model.Order;
import com.utility.model.User;
import com.utility.repository.ServiceTypeRepository;
import com.utility.repository.SupplierRepository;
import com.utility.valueobjects.ALL;
import com.utility.valueobjects.CSignUp;
import com.utility.valueobjects.SDashboard;
import com.utility.valueobjects.UserOtp;

import io.github.resilience4j.circuitbreaker.annotation.CircuitBreaker;
import io.github.resilience4j.retry.annotation.Retry;
@Service
public class SupplierService implements SupplierServiceInterface{
	
	@Autowired
	private SupplierRepository supplierRepository;
	
	@Autowired
	private RestTemplate restTemplate;
	@Autowired
	private ServiceTypeService sts;
	@Autowired
	private ServiceTypeRepository str;
	
	private static final String SUPPLIER_SERVICE= "SupplierService";

	public Supplier saveSupplier(Supplier supplier) {
		
		return supplierRepository.save(supplier);
	}

	
	
	
	
	public List<Supplier> getsupplierspin(int sid, int pincode) {
		
		return supplierRepository.findAll()
				.stream().filter(s->s.getServiceType().getId()==sid)
				.filter(su->su.getPincode()==pincode)
				.collect(Collectors.toList());
	}
	
	
	
	
	public Supplier getSupplier(long id) {		
		return supplierRepository
				.findAll()
				.stream()
				.filter(s->s.getUserid()==id)
				.collect(Collectors.toList())
				.get(0);
	}
	public Supplier getSupplierforDashboard(long id) {		
		return supplierRepository.findById(id).get();

	}
	
	public List<Supplier> getAllSupplier() {
		
		return supplierRepository.findAll();
	}



	@Retry(name = SUPPLIER_SERVICE,fallbackMethod ="getCUfallback" )
	public User getUser(String auth) {
		
		HttpHeaders http=new HttpHeaders();
		http.add("Authorization",auth);
		HttpEntity entity=new HttpEntity(http); 
		HttpEntity response=restTemplate.exchange("http://SECURITY-SERVICE/api/secure/getsupplieruser", HttpMethod.GET, entity, User.class);
		
		return (User) response.getBody();
	}
	public User getCUfallback(Exception e) {
		return new User();
	}

	

	public List<Supplier> getServiceSuppliers(User u,String auth, int id) {
		
		Long pincode=getCustomerPincode(auth,u);
		
		System.out.println("getServiceSuppliers from supplierservice");
		return supplierRepository.findAll()
				.stream().filter(s->s.getServiceType().getId()==id)
				.filter(su->su.getPincode()== pincode)
				.collect(Collectors.toList());
	}

	public Supplier editSupplier(String auth, CSignUp supp) {
		User u= getUser(auth);
		Supplier s =getSupplier(u.getId());
		s.setAddress(supp.getAddress());
		s.setPincode(supp.getPincode());
		if(supp.getDob()!=null)
			s.setDob(supp.getDob());
		s.setAadhaar(supp.getAadhaar());
		System.out.println(supp.getCharge());
		s.setCharge(supp.getCharge());
		s=supplierRepository.save(s);
		u.setName(supp.getName());
		u.setMobile(supp.getMobile());
		saveUser(auth, u);
		return s;
	}
	public boolean saveUser(String auth,User u) {
		HttpHeaders http=new HttpHeaders();
		http.add("Authorization",auth);
		http.setContentType(MediaType.APPLICATION_JSON);
		String json=null;
		
		try {
			json=new ObjectMapper().writeValueAsString(u);
		} catch (JsonProcessingException e) {
			throw new RuntimeException(e);
		}
		HttpEntity<String> entity=new HttpEntity<String>(json,http); 
		ResponseEntity<HttpEntity> o=restTemplate.exchange("http://SECURITY-SERVICE/api/secure/saveuser", HttpMethod.POST, entity, HttpEntity.class);
		if(o.getStatusCodeValue()==200)
			return true;
		else 
			return false;
		
	
	}
	
	public Long getCustomerPincode(String auth,User u) {
		HttpHeaders http=new HttpHeaders();
		
		http.add("Authorization",auth);
		HttpEntity<String> entity=new HttpEntity<String>(http); 
		ResponseEntity<Long> o=restTemplate.exchange("http://CUSTOMER-SERVICE/api/customer/getcustomerpin/"+u.getId(), HttpMethod.GET, entity, Long.class);
		
		return o.getBody();
	
	}

	public ALL getOrderSupplier(String auth, long id) {
		User user=getUser(auth);
		UserOtp uo=getUserOtp(auth,id);
		Supplier s=supplierRepository.findById(uo.getUserid()).get();
		UserOtp uOtp=supplierUser(auth,s.getUserid());
		ALL all=new ALL();
		all.setSupplier(s);
		all.setDescription(uo.getToken());
		all.setUseOtp(uOtp);
		return all;
	}
	@Retry(name = SUPPLIER_SERVICE,fallbackMethod ="Userfallback" )
	public UserOtp supplierUser(String auth,long id) {
		System.out.println("supplierUser in");
		HttpHeaders http=new HttpHeaders();
		http.add("Authorization",auth);
		HttpEntity entity=new HttpEntity(http); 
		HttpEntity response=restTemplate.exchange("http://SECURITY-SERVICE/api/secure/getsupplieruserotp/"+id, HttpMethod.GET, entity, UserOtp.class);
		System.out.println("supplierUser out"+response.getBody());
		return (UserOtp) response.getBody();
	}
	public UserOtp Userfallback(Exception e) {
		return new UserOtp();
	}
	@Retry(name = SUPPLIER_SERVICE,fallbackMethod ="getUserOtpfallback" )
	public UserOtp getUserOtp(String auth,long id) {
		System.out.println("getUserOtp in");
		HttpHeaders http=new HttpHeaders();
		http.add("Authorization",auth);
		HttpEntity entity=new HttpEntity(http); 
		HttpEntity response=restTemplate.exchange("http://CUSTOMER-SERVICE/api/customer/getuserotp/"+id, HttpMethod.GET, entity, UserOtp.class);
		System.out.println("getUserOtp out"+response.getBody());
		return (UserOtp) response.getBody();
	}
	public UserOtp getUserOtpfallback(Exception e) {
		return new UserOtp();
	}










	public UserOtp getSupplierUserotp() {
		UserOtp uo=new UserOtp();
		uo.setUserid(supplierRepository.findAll().size());
		Long l=(long) str.findAll().size();
		uo.setOtp(l.toString());
		return uo;
	}










	public ALL getSupplierAdmin(String auth, long id) {
		User u=getSupplierUser(auth,id);
		Supplier c=getSupplier(id);
		ALL all=new ALL();
		all.setUser(u);
		all.setSupplier(c);
		
		return all;
	}
	public User getSupplierUser(String auth,long id) {
		System.out.println("getCustomerUser in");
		HttpHeaders http=new HttpHeaders();
		http.add("Authorization",auth);
		HttpEntity entity=new HttpEntity(http); 
		HttpEntity response=restTemplate.exchange("http://SECURITY-SERVICE/api/secure/getuserforadmin/"+id, HttpMethod.GET, entity, User.class);
		System.out.println("getCustomerUser out"+response.getBody());
		return (User) response.getBody();
	}
	public User SupplierUserfallback(Exception e) {
		return new User();
	}

}
	
	

//public String about(String auth) {
//HttpHeaders http=new HttpHeaders();
//http.add("Authorization",auth);
//HttpEntity entity=new HttpEntity(http); 
//HttpEntity response=restTemplate.exchange("http://SECURITY-SERVICE/api/secure/about", HttpMethod.GET, entity, String.class);
//return (String) response.getBody();		
//}
//@CircuitBreaker(name = SUPPLIER_SERVICE, fallbackMethod = "getscFallback")
//@Retry(name = SUPPLIER_SERVICE,fallbackMethod ="getscFallback" )
//public ResponseTemplate getsc(long id) {
//	ResponseTemplate rt=new ResponseTemplate();		
//	Supplier s= supplierRepository.findById(id).get();
//	Customer c=restTemplate.getForObject("http://CUSTOMER-SERVICE/api/customer/getcustomer/"+s.getCustomersid(),Customer.class);
//	rt.setCustomer(c);
//	rt.setSupplier(s);
//	return rt;
//}
//
//public ResponseTemplate getscFallback(Exception e) {
//	ResponseTemplate rt=new ResponseTemplate();
//	return rt;
//}
//public Customer getCustomer(String auth,User u) {
//	System.out.println("getSupplierUser getCustomer");
//	HttpHeaders http=new HttpHeaders();
//	http.add("Authorization",auth);
////	http.setContentType(MediaType.APPLICATION_JSON);
////	String json=null;
////	try {
////		json=new ObjectMapper().writeValueAsString(u);
////	} catch (JsonProcessingException e) {
////		throw new RuntimeException(e);
////	}
//	HttpEntity<String> entity=new HttpEntity<String>(http); 
//	HttpEntity response=restTemplate.exchange("http://CUSTOMER-SERVICE/api/customer/getcustomersuppliers", HttpMethod.GET, entity, Customer.class);
//	System.out.println("getCustomerUser  getCustomer out"+response.getBody());
//	return (Customer) response.getBody();
//}
//public Customer getCustomerUfallback(Exception e) {
//	return new Customer();
//}
