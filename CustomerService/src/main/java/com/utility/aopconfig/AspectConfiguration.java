package com.utility.aopconfig;

import java.util.List;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.utility.entity.Customer;
import com.utility.entity.Order;
import com.utility.model.ServiceType;
import com.utility.model.Supplier;
import com.utility.model.User;
import com.utility.service.CustomerService;
import com.utility.service.OrderService;
import com.utility.valueobjects.ALL;
import com.utility.valueobjects.SDashboard;




@Aspect
@Component
@CrossOrigin
public class AspectConfiguration {
	@Autowired
	private CustomerService customerService;
	
	@Pointcut ("execution(Object com.utility.controller.*.*(..))")
	public void logging() {}
	
	@Around("logging()")	
	public Object supplierAOP(ProceedingJoinPoint pjp) throws Throwable {
		
		Object[] args=pjp.getArgs();
		
		String token=(String)args[0];		
		User user=customerService.getUser(token);
		int i=0;
		for(Object arg:args) {
			if(arg instanceof User)
				args[i]=user;
			i++;
		}
		Object object=pjp.proceed(args); 
				//null;
		List list=null;
		Customer cust=null;
		Supplier supp=null;
		ServiceType service=null;
		Order order=null;
		SDashboard sd=null;
		List<Supplier> supplierslist=null;
		List <Customer> customerslist=null;
		List<ServiceType> servicelist=null;
		List<Order> orderlist=null;
		ALL all =new ALL();
		boolean flag=false;
		if(object instanceof List) {
			list=(List)object;
			if(list.get(0) instanceof Supplier) {
				all.setSupplierslist(list);flag=true;
			}
			if(list.get(0) instanceof Customer) {
				all.setCustomerslist(list);flag=true;
			}
			if(list.get(0) instanceof Order) {
				all.setOrderlist(list);flag=true;
			}
			if(list.get(0) instanceof ServiceType) {
				all.setServicelist(list);flag=true;
			}
		}
		if(object instanceof Supplier)
			{all.setSupplier((Supplier)object);flag=true;}
		if(object instanceof Customer)
			{all.setCustomer((Customer)object);flag=true;}
		if(object instanceof Order)
			{all.setOrder((Order)object);flag=true;}
		if(object instanceof ServiceType)
			{all.setService((ServiceType)object);flag=true;}
		if(object instanceof SDashboard)
			{all.setsDashboard((SDashboard)object);flag=true;}
		if(object instanceof ALL)
		{all=(ALL)object;flag=true;
		
		}
		if(all.getUser()==null)
			all.setUser(user);	
		
		
		if(user !=null && flag==true)
			return (Object)all;
		else if(user!= null && flag==false)
			return object;
		else 
			return new Object();
	}
	
	
	
}
