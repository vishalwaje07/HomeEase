package com.utility.service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
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
import com.utility.entity.Customer;
import com.utility.entity.Order;
import com.utility.exceptions.AllException;
import com.utility.model.ServiceType;
import com.utility.model.Supplier;
import com.utility.model.User;
import com.utility.repository.CustomerRepository;
import com.utility.repository.OrderRepository;
import com.utility.valueobjects.ALL;
import com.utility.valueobjects.CSignUp;
import com.utility.valueobjects.SDashboard;
import com.utility.valueobjects.UserOtp;

import io.github.resilience4j.retry.annotation.Retry;
import lombok.extern.log4j.Log4j2;


@Service
public class CustomerService implements CustomerServiceInterface{
	@Autowired
	private CustomerRepository customerRepository;
	@Autowired
	private RestTemplate restTemplate;
	@Autowired
	private OrderRepository or;
	@Autowired
	private OrderService os;
	
	private static final String CUSTOMER_SERVICE= "CustomerService";
	
	public Customer saveCustomer(Customer customer) {
		
		return customerRepository.save(customer);
		
	}




	public Customer getCustomer(long id) {
		//log.info("Inside Saveorder incoming");"Inside getCustomer"+id);
		//System.out.println((List<Customer>)customerRepository.findAll());
		return (Customer) customerRepository.findAll().stream().filter(c->c.getUserid() == id).collect(Collectors.toList()).get(0);
//		Customer c=customerRepository.findByuserid(id);
//		System.out.println(c);
//		return c;
	}




	public List<Customer> getAllCustomers() {
		return customerRepository.findAll();
	}
	
	public User getUser(String auth) {
		//System.out.println("getcustomerUser in");
		HttpHeaders http=new HttpHeaders();
		http.add("Authorization",auth);
		HttpEntity entity=new HttpEntity(http); 
		HttpEntity response=restTemplate.exchange("http://SECURITY-SERVICE/api/secure/getcustomeruser", HttpMethod.GET, entity, User.class);
		//System.out.println("getCustomerUser out"+response.getBody());
		return (User) response.getBody();
	}
	public User getCUfallback(Exception e) {
		return new User();
	}




	public Object editCustomer(String auth,CSignUp cust) {
		User u=getUser(auth);
		Customer cu =customerRepository.findAll().stream().filter(c->c.getUserid()==u.getId()).collect(Collectors.toList()).get(0);
		cu=getCustomerSignup(cust,cu);
		
		customerRepository.save(cu);
		
		u.setMobile(cust.getMobile());
		u.setName(cust.getName());
		SaveUser(auth,u);
		return cu;
	}



	public Customer getCustomerSignup(CSignUp cust,Customer c) {
		
		c.setAddress(cust.getAddress());
		c.setPincode(cust.getPincode());
		c.setAadhaar(cust.getAadhaar());
		if(cust.getDob()!=null)
			c.setDob(cust.getDob());
		
		return c;
	}
	public boolean SaveUser(String auth,User u) {
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
	public User getSaveUfallback(Exception e) {
		return new User();
	}




	public Object getOrderDetails(User u, long id) {

		Customer c=getCustomer(u.getId());
		return os.getOrderOfCustomer(c.getCustomerid(),id);
		 
	}




	public Order save(User u,Order o) {
		Customer c=getCustomer(u.getId());
		c.setOrders(null);
		o.setCustomerid(c);
		o.setStatus("New");
		o.setFeedback(" ");
		o.setRating(0);
		
		return or.save(o);
	}




	public Object cancalOrder(User user, long id) {
		Customer c=getCustomer(user.getId());
		Order order=or.findAll().stream().filter(o->o.getCustomerid().getCustomerid()== c.getCustomerid())
				.filter(or->or.getOrderid()==id).collect(Collectors.toList()).get(0);
		order.setStatus("Cancelled");
		or.save(order);
		return null;
	}
	
	public SDashboard supplierDashboard(String auth,User u) {
		SDashboard sd=new SDashboard();
		long s=getSupplier(auth,u);
		List<Order> list1=or.findAll().stream().filter(o->o.getSupplierid()== s ).collect(Collectors.toList());
		sd.setAllorders(list1.size());
		List 	list=list1.stream().filter(o->o.getStatus().equals("New")).collect(Collectors.toList());
		sd.setNeworders(list.size());
		list=list1.stream().filter(o->o.getStatus().equals("Pending")).collect(Collectors.toList());
		sd.setPendingorders(list.size());
		list=list1.stream().filter(o->o.getStatus().equals("Cancelled")).collect(Collectors.toList());
		sd.setCancalledorders(list.size());
		list=list1.stream().filter(o->o.getStatus().equals("Completed")).collect(Collectors.toList());
		sd.setCompletedorders(list.size());
		
		return sd;
	}
	
	public long getSupplier(String auth,User u) {
		HttpHeaders http=new HttpHeaders();
		System.out.println("getSupplier from custControll-181");
		http.add("Authorization",auth);
		//http.setContentType(MediaType.APPLICATION_JSON);
		HttpEntity<String> entity=new HttpEntity<String>(http); 
		ResponseEntity<Long> o=restTemplate.exchange("http://SUPPLIER-SERVICE/api/supplier/getsupplierdash/"+u.getId(), HttpMethod.GET, entity, Long.class);
		System.out.println(o.getBody());
		System.out.println(o);
		return o.getBody();
		
	
	}

	public List<Order> getSupplierOrders(String auth,User u) {
		Long sid=getSupplier(auth,u);
		
		return or.findAll().stream().filter(o->o.getSupplierid()==sid)
				.collect(Collectors.toList());
	}


	public Long getCustomerpin(long id) {
		System.out.println(id+"inside getCustomerpin");
		Customer c=getCustomer(id);	
		System.out.println(c.getPincode());
		return (long)c.getPincode();
	}




	public ALL getSuppOrderDetails(String auth,User u, long id) {
		long s=getSupplier(auth, u);
		System.out.println(s);
		Order ord=or.findById(id).get();
		
		ALL all=new ALL();
		all.setOrder(ord);
		Customer c=customerRepository.findById(ord.getCustomerid().getCustomerid()).get();
		c.setOrders(null);
		all.setCustomer(c);
		
		return all;
	}
//	public Order getOrderOfSupplier(long sid,long oid) {
//		Order ord=	or.findAll().stream()
//			.filter(or->or.getOrderid()==oid)
//			.findFirst().get();
//		System.out.println(ord);
//			return ord;
//		}



	public UserOtp getUserOtp(String auth, long id) {
		Order o=or.findAll().stream().filter(or->or.getOrderid()==id).collect(Collectors.toList()).get(0);		
		return new UserOtp(o.getSupplierid(),o.getDescription(),o.getDescription());
	}




	public ALL getCustomerorder(String auth, long id) {
		Order o=or.findById(id).get();
		Customer c=customerRepository.findAll().stream().filter(cu->cu.getCustomerid()==o.getCustomerid().getCustomerid())
				.collect(Collectors.toList()).get(0);
		c.setOrders(null);
		
		ALL all=new ALL();
		
		all.setOrder(o);
		all.setCustomer(c);
		return all;
	}
	



	public SDashboard getAdminDashboard(String auth) {
		SDashboard sd=new SDashboard();
		sd.setAllorders(or.findAll().size());
		sd.setNeworders(or.findAll().stream().filter(o->o.getStatus().equals("New")).collect(Collectors.toList()).size());
		sd.setPendingorders(or.findAll().stream().filter(o->o.getStatus().equals("Pending")).collect(Collectors.toList()).size());
		sd.setCancalledorders(or.findAll().stream().filter(o->o.getStatus().equals("Cancelled")).collect(Collectors.toList()).size());
		sd.setCompletedorders(or.findAll().stream().filter(o->o.getStatus().equals("Completed")).collect(Collectors.toList()).size());
		sd.setCustomers(customerRepository.findAll().size());
		UserOtp uo=supplierUserOTP(auth);
		sd.setSuppliers(uo.getUserid());
		sd.setServices(Long.parseLong(uo.getOtp()));
		return sd;
	}
	@Retry(name = CUSTOMER_SERVICE,fallbackMethod ="Userfallback" )
	public UserOtp supplierUserOTP(String auth) {
		System.out.println("supplierUserOTP in");
		HttpHeaders http=new HttpHeaders();
		http.add("Authorization",auth);
		HttpEntity entity=new HttpEntity(http); 
		HttpEntity response=restTemplate.exchange("http://SUPPLIER-SERVICE/api/supplier/getsupplieruserotp/", HttpMethod.GET, entity, UserOtp.class);
		System.out.println("supplierUserOTP out"+response.getBody());
		return (UserOtp) response.getBody();
	}
	public UserOtp Userfallback(Exception e) {
		return new UserOtp();
	}




	public ALL getCustomerAdmin(String auth,long id) {
		User u=getCustomerUser(auth,id);
		Customer c=getCustomer(id);
		ALL all=new ALL();
		all.setUser(u);
		all.setCustomer(c);
		return all;
	}
	public User getCustomerUser(String auth,long id) {
		System.out.println("getCustomerUser in");
		HttpHeaders http=new HttpHeaders();
		http.add("Authorization",auth);
		HttpEntity entity=new HttpEntity(http); 
		HttpEntity response=restTemplate.exchange("http://SECURITY-SERVICE/api/secure/getuserforadmin/"+id, HttpMethod.GET, entity, User.class);
		System.out.println("getCustomerUser out"+response.getBody());
		return (User) response.getBody();
	}
	
	
	
	public User CustomerUserfallback(Exception e) {
		return new User();
	}




	public List<Order> getOrdersList() {
		
		return or.findAll();
	}




	public Order getOrderDetail(long id) {
		
		return or.findById(id).get();
	}




	public Object deleteOrder(User u,long id) {
		or.deleteById(id);		
		return u;
	}




	public Object getSupplierorder(String auth, long id) {
		
		Order o=or.findById(id).get();
		Customer c=customerRepository.findAll().stream().filter(cu->cu.getCustomerid()==o.getCustomerid().getCustomerid())
				.collect(Collectors.toList()).get(0);
		c.setOrders(null);
		User u=getUserForSupplier(auth,c.getUserid());
		ALL all=new ALL();
		all.setUser(u);
		all.setOrder(o);
		all.setCustomer(c);
		return all;
	}
	public User getUserForSupplier(String auth,long id) {
		HttpHeaders http=new HttpHeaders();
		http.add("Authorization",auth);
		HttpEntity entity=new HttpEntity(http); 
		HttpEntity response=restTemplate.exchange("http://SECURITY-SERVICE/api/secure/getuserforsupplier/"+id, HttpMethod.GET, entity, User.class);
		return (User) response.getBody();
	}




	public Object supplierAccept(long id, String string) {
		Order o=or.findById(id).get();
		o.setStatus(string);
		return or.save(o);
	}




	@Override
	public Long feedback(long id,UserOtp uo) {
		Order o=or.findById(id).orElseThrow();
		o.setRating(Integer.parseInt(uo.getToken()));
		o.setFeedback(uo.getOtp());
		
		return or.save(o).getOrderid();
	}




	@Override
	public ALL orderForAdmin(long id) {
		Order o= or.findById(id).orElseThrow();
		Customer c=o.getCustomerid();
		ALL all=new ALL();
		all.setOrder(o);
		all.setCustomer(c);
		return all;
	}




	
}
