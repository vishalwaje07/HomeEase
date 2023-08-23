package com.utility.controller;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;
import com.utility.entity.Customer;
import com.utility.entity.Order;
import com.utility.model.User;
import com.utility.service.CustomerService;
import com.utility.service.CustomerServiceInterface;
import com.utility.valueobjects.CSignUp;
import com.utility.valueobjects.UserOtp;

import lombok.extern.log4j.Log4j2;

import java.util.*;
@RestController
@RequestMapping("/api/customer")
@CrossOrigin
@Log4j2
public class CustomerController {
	@Autowired
	
	
	private CustomerServiceInterface customerService;
	private static Logger log;
	@PutMapping("/feedback/{id}")
	public Object feedback(@RequestHeader(value = "Authorization") String auth,@PathVariable("id") long id,@RequestBody UserOtp uo) {
		User u=customerService.getUser(auth);
		return customerService.feedback(id,uo);
	}
	
	@GetMapping("/orderforadmin/{id}")
	public Object orderForAdmin(@RequestHeader(value = "Authorization") String auth,@PathVariable("id") long id){
		log.info("get orderForAdmin ");
		return customerService.orderForAdmin(id);
	}
	@GetMapping("/supplieraccept/{id}")
	public Object supplierAccept(@RequestHeader(value = "Authorization") String auth,@PathVariable("id") long id){
		log.info("supplier Accept enquiry");
		return customerService.supplierAccept(id,"Pending");
	}
	@GetMapping("/supplierreject/{id}")
	public Object supplierReject(@RequestHeader(value = "Authorization") String auth,@PathVariable("id") long id){
		log.info("supplier reject enquiry");
		return customerService.supplierAccept(id,"Cancelled");
	}
	
	@GetMapping("/suppliercomplete/{id}")
	public Object supplierComplete(@RequestHeader(value = "Authorization") String auth,@PathVariable("id") long id){
		log.info("supplier completes enquiry");
		return customerService.supplierAccept(id,"Completed");
	}
	
	
	
	//used
	@GetMapping("/ordersdetails/{id}")
	public Object getOrderDetail(@RequestHeader(value = "Authorization") String auth,@PathVariable("id") long id){
		User u=customerService.getUser(auth);
		log.info("Inside getOrderDetail for admin");

		if(u.getRole().equals("ROLE_ADMIN"))
			return customerService.getOrderDetail(id);
	
	return new ArrayList();
	}
	@DeleteMapping("/deleteorder/{id}")
	public Object deleteOrder(@RequestHeader(value = "Authorization") String auth,@PathVariable("id") long id){
		User u=customerService.getUser(auth);
		log.info("Inside deleteOrder for admin");

		if(u.getRole().equals("ROLE_ADMIN"))
			return customerService.deleteOrder(u,id);
	
	return new ArrayList();
	}
	
	
	@GetMapping("/orderslist")
	public Object getOrdersList(@RequestHeader(value = "Authorization") String auth){
		User u=customerService.getUser(auth);
		log.info("Inside getOrdersList for admin");
		if(u.getRole().equals("ROLE_ADMIN"))
			return customerService.getOrdersList();
	
	return new ArrayList();
	}
	
	
	@GetMapping("/customerforadmin/{id}")
	public Object getCustomerAdmin(@RequestHeader(value = "Authorization") String auth,@PathVariable("id") long id) {
		log.info("Inside getCustomerAdmin for admin");

		return customerService.getCustomerAdmin(auth,id);
	}
	
	
	
	
	//used
	@GetMapping("/admindashboard")
	public Object getAdminDashboard(@RequestHeader(value ="Authorization") String auth) {
		User u=customerService.getUser(auth);
		log.info("Inside getCustomerAdmin for admin");

		if(u.getRole().equals("ROLE_ADMIN"))
			return customerService.getAdminDashboard(auth);
		return new Object();
	}
	
	
	
	//used
	@GetMapping("/getuserotp/{id}")
	public Object getUserOtp(@RequestHeader(value ="Authorization") String auth,@PathVariable("id") long id) {
		log.info("Inside getUserOtp");

		return customerService.getUserOtp(auth,id);
	}
	
	
	//used
	@GetMapping("/getsupplierorders")
	public Object getSupplierOrders(@RequestHeader(value ="Authorization") String auth) {
		User u=customerService.getUser(auth);
		return customerService.getSupplierOrders(auth,u);
	}
	//used
	@GetMapping("/getcustomerorder/{id}")
	public Object getCustomerorder(@RequestHeader(value ="Authorization") String auth,@PathVariable("id") long id)
	{
		return customerService.getCustomerorder(auth,id);
	}
	@GetMapping("/getsupplierorder/{id}")
	public Object getSupplierorder(@RequestHeader(value ="Authorization") String auth,@PathVariable("id") long id)
	{
		return customerService.getSupplierorder(auth,id);
	}

	
	
	//used
		@GetMapping("/supplierdashboard")
		public Object supplierDashboard(@RequestHeader(value ="Authorization") String auth){
			
			User u=customerService.getUser(auth);
			return customerService.supplierDashboard(auth,u);
		}
	
	//All below used
	@GetMapping("/getcustomerpin/{id}")
	public Long getCustomerpin(@RequestHeader(value ="Authorization") String auth,@PathVariable("id") long id) {
		
		User u=customerService.getUser(auth);
		return customerService.getCustomerpin(id);
		 
	}	
	
	@PostMapping("/savecustomer")
	public Customer saveCustomer(@RequestBody Customer customer) {
		return customerService.saveCustomer(customer);
	}
	
	@PutMapping("/editcustomer")
	public Object editCustomer(@RequestHeader(value = "Authorization") String auth,
												@RequestBody CSignUp cust) {
		return	customerService.editCustomer(auth,cust);
		
	}
	
	
	@GetMapping("/getcustomer")
	public Object getCustomers(@RequestHeader(value = "Authorization") String auth) {
		User u=customerService.getUser(auth);
		return customerService.getCustomer(u.getId());
	}
	
	
	@GetMapping("/getcustomersuppliers")
	public Customer getCustomer(@RequestHeader(value = "Authorization") String auth) {
		User u=customerService.getUser(auth);
		return customerService.getCustomer(u.getId());
	}
	
	@GetMapping("/getorderdetails/{id}")
	public Object getOrderDetails(@RequestHeader(value = "Authorization") String auth,@PathVariable long id) {
		User u=customerService.getUser(auth);
		return customerService.getOrderDetails(u,id);
	}
	@GetMapping("/getsuporderdetails/{id}")
	public Object getSuppOrderDetails(@RequestHeader(value = "Authorization") String auth,@PathVariable long id) {
		User u=customerService.getUser(auth);
		System.out.println("inside getSuppOrderDetails");
		return customerService.getSuppOrderDetails(auth,u,id);
	}
	
	@GetMapping("/getallcustomer")
	public Object getAllCustomers(@RequestHeader(value = "Authorization") String auth){
		return customerService.getAllCustomers();
	}
	@PostMapping("/saveorder")
	 public Object saveOrder(@RequestHeader(value = "Authorization") String auth,@RequestBody Order o) {
		User user=customerService.getUser(auth);
		
		log.info("Inside Saveorder incoming");
		return customerService.save(user,o);
	}
	@GetMapping("/cancalorder/{id}")
	public Object cancalOrder(@RequestHeader(value = "Authorization") String auth,@PathVariable long id)
	{
		User user=customerService.getUser(auth);
		
		return customerService.cancalOrder(user,id);
	}
	
}
