package com.utility.service;

import java.util.List;

import com.utility.entity.ServiceType;

public interface ServicesInterface {

	public ServiceType save(ServiceType st);
	
	public ServiceType getServiceType(ServiceType serviceid);
	
	public List<ServiceType> findAll();
	
	
	
	
	
}