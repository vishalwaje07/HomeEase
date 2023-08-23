package com.utility.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.utility.entity.Order;
import com.utility.model.Supplier;
import com.utility.model.User;
import com.utility.repository.OrderRepository;
import com.utility.valueobjects.SDashboard;
@Service
public class OrderService implements OrderServiceInterface{
	@Autowired
 private OrderRepository or;
	@Autowired
	private RestTemplate restTemplate;
	
	public List<Order> getAllOrders(){
		 return or.findAll();
	}
	public Order save(Order o) {
		return or.save(o);
	}
	public SDashboard getOrdersCount(long id) {
		SDashboard sd=new SDashboard();
		List<Order> list= or.findAll();
		list=list.stream().filter(o->o.getSupplierid()==id).collect(Collectors.toList());
		sd.setAllorders(list.size());
		list=list.stream().filter(o->o.getStatus().equals("Pending")).collect(Collectors.toList());
		sd.setPendingorders(list.size());
		list=list.stream().filter(o->o.getStatus().equals("Cancelled")).collect(Collectors.toList());
		sd.setCancalledorders(list.size());
		list=list.stream().filter(o->o.getStatus().equals("Completed")).collect(Collectors.toList());
		sd.setCompletedorders(list.size());
		return sd;
	
		
		
	}
	public Order getOrderOfCustomer(long cid,long oid) {
	return	or.findAll().stream()
		.filter(o->o.getCustomerid().getCustomerid()==cid)
		.filter(or->or.getOrderid()==oid)
		.findFirst().get();
		
	}
	public Order getOrderOfSupplier(long sid,long oid) {
		Order ord=	or.findAll().stream()
			.filter(o->o.getSupplierid()==sid)
			.filter(or->or.getOrderid()==oid)
			.findFirst().get();
		System.out.println(ord);
			return ord;
		}
	
	
	
}
