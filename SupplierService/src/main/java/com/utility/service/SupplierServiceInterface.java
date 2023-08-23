package com.utility.service;

import java.util.List;

import com.utility.entity.Supplier;
import com.utility.model.User;
import com.utility.valueobjects.ALL;
import com.utility.valueobjects.CSignUp;
import com.utility.valueobjects.UserOtp;

public interface SupplierServiceInterface {

	
	public Supplier saveSupplier(Supplier supplier);
	
	public List<Supplier> getsupplierspin(int sid, int pincode);
	
	
	public Supplier getSupplier(long id);
	
	
	public List<Supplier> getAllSupplier();
	
	
	
	public User getUser(String auth);
	
	public User getCUfallback(Exception e);
	
	public List<Supplier> getServiceSuppliers(User u,String auth, int id);
	
	public Supplier editSupplier(String auth, CSignUp supp);
	
	public boolean saveUser(String auth,User u);
	
	public Long getCustomerPincode(String auth,User u);
	
	public ALL getOrderSupplier(String auth, long id);
	
	
	public UserOtp supplierUser(String auth,long id);
	
	public UserOtp Userfallback(Exception e);
	
	public UserOtp getUserOtp(String auth,long id);
	
	public UserOtp getUserOtpfallback(Exception e);
	
	public UserOtp getSupplierUserotp();
	
	public ALL getSupplierAdmin(String auth, long id);
	
	public User getSupplierUser(String auth,long id);
	
	public User SupplierUserfallback(Exception e);

	public Supplier getSupplierforDashboard(long id);
	
}
