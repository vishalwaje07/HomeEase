package com.utility.service;

import java.util.List;

import com.utility.entity.Customer;
import com.utility.entity.Order;
import com.utility.model.User;
import com.utility.valueobjects.ALL;
import com.utility.valueobjects.CSignUp;
import com.utility.valueobjects.SDashboard;
import com.utility.valueobjects.UserOtp;

public interface CustomerServiceInterface {

	public Customer saveCustomer(Customer customer);
	
	
	public Customer getCustomer(long id);
	
	public List<Customer> getAllCustomers();
	
	
	public User getUser(String auth);
	
	
	public User getCUfallback(Exception e);
	
	public Object editCustomer(String auth,CSignUp cust);
	
	public Customer getCustomerSignup(CSignUp cust,Customer c);
	
	public boolean SaveUser(String auth,User u);
	
	public User getSaveUfallback(Exception e);
	
	public Object getOrderDetails(User u, long id);
	
	public Order save(User u,Order o);
	
	public Object cancalOrder(User user, long id);
	
	
	public SDashboard supplierDashboard(String auth,User u);
	
	
	public long getSupplier(String auth,User u);
	
	
	public List<Order> getSupplierOrders(String auth,User u);
	
	
	public Long getCustomerpin(long id);
	
	public Object getSuppOrderDetails(String auth,User u, long id);
	
	public UserOtp getUserOtp(String auth, long id);
	
	
	public ALL getCustomerorder(String auth, long id);
	
	
	public SDashboard getAdminDashboard(String auth);
	
	
	public UserOtp supplierUserOTP(String auth);
	
	
	public UserOtp Userfallback(Exception e);
	
	
	public ALL getCustomerAdmin(String auth,long id);
	
	public User getCustomerUser(String auth,long id);
	
	
	public User CustomerUserfallback(Exception e);
	
	
	
	public List<Order> getOrdersList();
	
	public Order getOrderDetail(long id);

	public Object deleteOrder(User u,long id);


	public Object supplierAccept(long id, String string);


	public Object getSupplierorder(String auth, long id);


	public Object feedback(long id,UserOtp uo);


	public Object orderForAdmin(long id); 

}