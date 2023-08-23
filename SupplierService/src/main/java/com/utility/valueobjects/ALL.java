package com.utility.valueobjects;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.utility.entity.ServiceType;
import com.utility.entity.Supplier;
import com.utility.model.Customer;
import com.utility.model.Order;
import com.utility.model.User;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
@AllArgsConstructor
@Data
@ToString
@NoArgsConstructor
public class ALL {
	
	private Customer customer;	
	private Supplier supplier;
	private ServiceType service;
	private Order order;
	private User user;		
	private List<Supplier> supplierslist;
	private List <Customer> customerslist;
	private List<ServiceType> servicelist;
	private List<Order> orderlist;
	private SDashboard sDashboard;
	private String description;
	private UserOtp useOtp;
	public Customer getCustomer() {
		return customer;
	}
	public void setCustomer(Customer customer) {
		this.customer = customer;
	}
	public Supplier getSupplier() {
		return supplier;
	}
	public void setSupplier(Supplier supplier) {
		this.supplier = supplier;
	}
	public ServiceType getService() {
		return service;
	}
	public void setService(ServiceType service) {
		this.service = service;
	}
	public Order getOrder() {
		return order;
	}
	public void setOrder(Order order) {
		this.order = order;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	public List<Supplier> getSupplierslist() {
		return supplierslist;
	}
	public void setSupplierslist(List<Supplier> supplierslist) {
		this.supplierslist = supplierslist;
	}
	public List<Customer> getCustomerslist() {
		return customerslist;
	}
	public void setCustomerslist(List<Customer> customerslist) {
		this.customerslist = customerslist;
	}
	public List<ServiceType> getServicelist() {
		return servicelist;
	}
	public void setServicelist(List<ServiceType> servicelist) {
		this.servicelist = servicelist;
	}
	public List<Order> getOrderlist() {
		return orderlist;
	}
	public void setOrderlist(List<Order> orderlist) {
		this.orderlist = orderlist;
	}
	public SDashboard getsDashboard() {
		return sDashboard;
	}
	public void setsDashboard(SDashboard sDashboard) {
		this.sDashboard = sDashboard;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public UserOtp getUseOtp() {
		return useOtp;
	}
	public void setUseOtp(UserOtp useOtp) {
		this.useOtp = useOtp;
	}
	public ALL(Customer customer, Supplier supplier, ServiceType service, Order order, User user,
			List<Supplier> supplierslist, List<Customer> customerslist, List<ServiceType> servicelist,
			List<Order> orderlist, SDashboard sDashboard, String description, UserOtp useOtp) {
		super();
		this.customer = customer;
		this.supplier = supplier;
		this.service = service;
		this.order = order;
		this.user = user;
		this.supplierslist = supplierslist;
		this.customerslist = customerslist;
		this.servicelist = servicelist;
		this.orderlist = orderlist;
		this.sDashboard = sDashboard;
		this.description = description;
		this.useOtp = useOtp;
	}
	public ALL() {
		super();
	}
	
        
}
