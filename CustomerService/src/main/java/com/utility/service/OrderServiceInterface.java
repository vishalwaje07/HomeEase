package com.utility.service;

import java.util.List;

import com.utility.entity.Order;
import com.utility.valueobjects.SDashboard;

public interface OrderServiceInterface {

	
	public List<Order> getAllOrders();
	
	
	public Order save(Order o);
	
	
	public SDashboard getOrdersCount(long id);
	
	
	
	public Order getOrderOfCustomer(long cid,long oid);
	
	
	public Order getOrderOfSupplier(long sid,long oid);
	
	
	
	
	
	
	
	
	
	
}