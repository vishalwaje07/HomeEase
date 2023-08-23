package com.utility;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.apache.catalina.authenticator.SavedRequest;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import com.utility.entity.ServiceType;
import com.utility.entity.Supplier;
import com.utility.model.User;
import com.utility.repository.ServiceTypeRepository;
import com.utility.service.ServiceTypeService;

@SpringBootTest(classes= {ServiceSupplierT.class})
public class ServiceSupplierT {

	@Mock
	ServiceTypeRepository Str;
	
	@InjectMocks
	ServiceTypeService Sts;
	
	
	public Optional<ServiceType> mydata;
	
	
	@Test
	@Order(1)
	public void test_findAll() {
		
		List<ServiceType> mydata=new ArrayList<ServiceType>();
		
		mydata.add(new ServiceType(1,"Vikas") );
		mydata.add(new ServiceType(1,"Kunal") );
		when(Str.findAll()).thenReturn(mydata);
	assertEquals(2,Sts.findAll().size());
		
		
	}
	
	@Test
	@Order(2)
	public void test_save() {
		
		ServiceType mydata = new ServiceType(1,"vikas");
		when(Str.save(mydata)).thenReturn(mydata);
	assertEquals(mydata,  Sts.save(mydata));
		
	}
	@Test
	@Order(3)
	public void  Test_getServiceType() {
		
		ServiceType mydata = new ServiceType(1,"vikas");
		Optional<ServiceType> mydata1 = Optional.of(new ServiceType(1,"vikas"));
		
		when(Str.findById(mydata.getId())).thenReturn(mydata1);
		assertEquals(mydata,   Sts.getServiceType(mydata));

		
	}
	

}
