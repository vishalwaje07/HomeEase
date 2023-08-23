package com.utility.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.utility.entity.ServiceType;
import com.utility.repository.ServiceTypeRepository;

@Service
public class ServiceTypeService implements ServicesInterface{
	@Autowired
	private ServiceTypeRepository str;
	
	public ServiceType save(ServiceType st) {
		return  str.save(st);
	}

	public ServiceType getServiceType(ServiceType serviceid) {
		System.out.println(serviceid);
		return str.findById(serviceid.getId()).get();		 
	}

	public List<ServiceType> findAll() {
	Optional o=	Optional.ofNullable(str.findAll());
	List<ServiceType> l = null;
	if(o.isPresent())
			l=(List<ServiceType>) o.get();
	if(!l.isEmpty())
		return l;
	throw new RuntimeException();
	}
}
