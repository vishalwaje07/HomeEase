package com.utility.service;

import java.util.List;
import java.util.Optional;

import com.utility.entity.User;
import com.utility.model.Customer;
import com.utility.model.Supplier;
import com.utility.valueobjects.CSignUp;
import com.utility.valueobjects.UserOtp;

public interface UserServiceInterface {

	
	public User findByUsername(String username);
	
	
	
	public User changePassword(User u);
	
	
	public boolean savePassword(User u);
	
	public Optional<User> getUserFromToken(String token);
	
	
	public Optional<Boolean> verifyOtp(UserOtp uo);
	
	public Optional<User> saveUserForCustomer(CSignUp cust);
	
	public Customer getCustomerFromSigup(CSignUp cust);
	
	
	public boolean saveCustomer(Customer  c);
	
	public boolean getcFallback(Exception e);
	
	public Supplier getSupplierFromSignup(CSignUp supp);
	
	public boolean saveSupplier(Supplier c);
	
	
	public boolean getsFallback(Exception e);
	
	
	public User save(User u);
	
	
	public User findById(long id);
	
	
	public List<User> getCustomersList();
	
	
	public List<User> getSuppliersList();
	
	
	public List<User> getAdminList();
	
	
	public User editUser(CSignUp s);
	
	
	
	
	
}