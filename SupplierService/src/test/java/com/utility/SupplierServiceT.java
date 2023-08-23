package com.utility;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.intThat;
import static org.mockito.ArgumentMatchers.longThat;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import com.utility.entity.ServiceType;
import com.utility.entity.Supplier;
import com.utility.model.User;
import com.utility.repository.SupplierRepository;
import com.utility.service.SupplierService;

@SpringBootTest(classes= {SupplierServiceT.class})
public class SupplierServiceT {

 @Mock
 private SupplierRepository SuppR;
	
 @InjectMocks
 private SupplierService SuppS;
	
 public Optional<Supplier> mydata;
 
 public Optional<User> myuser;
 
 public ServiceType sT;
	
 @Test
@Order(1)
 public void test_saveSupplier() {
		
     ServiceType sT= new ServiceType(1,"vikas");
	 Supplier mydata = new Supplier(1,"patil vasati",413307,12365478,
			new Date(1997-02-12),1234, 
				sT,1
			  );
		when(SuppR.save(mydata)).thenReturn(mydata);
	assertEquals(mydata,  SuppS.saveSupplier(mydata));
	
	
	/*for this method i will create no arge contructor in supllier class*/
	}
 
 @Test
 @Order(2)
 public void test_getsupplierspin() {
		
	 List<Supplier> mydata=new ArrayList<Supplier>();
	 ServiceType sT= new ServiceType(1,"vikas");
		mydata.add(new Supplier(1,"patil vasati",413307,12365478,
			new Date(1997-02-12),1234, 
				sT,1) );
		mydata.add(new Supplier(2,"patil vasati",413307,12365478,
			new Date(1997-02-12),1234, 
				sT,1) );
	
          int supplierId=1;
          int pincode = 413307;
 
 
          when(SuppR.findAll()).thenReturn(mydata);
          assertEquals(mydata,	SuppS.getsupplierspin(supplierId,pincode));
 
 }
 
 @Test
 @Order(3)
 public void test_getSupplier() {		
	 List<Supplier> mydata=new ArrayList<Supplier>();
	 ServiceType sT= new ServiceType(1,"vikas");
	 ServiceType sT1= new ServiceType(2,"vikas");
		mydata.add(new Supplier(1,"patil vasati",413307,12365478,
			new Date(1997-02-12),1234, 
				sT,1) );
		mydata.add(new Supplier(2,"patil vasati",413307,12365478,
			new Date(1997-02-12),1234, 
				sT1,1) );
	
		 int supplierid=1;
 
 

         when(SuppR.findAll()).thenReturn(mydata);
       
         assertEquals(1,SuppS.getSupplier(supplierid).getSupplierid());

		 
 }
 
 @Test
 @Order(4)
 public void test_getAllSupplier() {
		
	 List<Supplier> mydata=new ArrayList<Supplier>();
	 ServiceType sT= new ServiceType(1,"vikas");
	 ServiceType sT1= new ServiceType(2,"vikas");
		mydata.add(new Supplier(1,"patil vasati",413307,12365478,
			new Date(1997-02-12),1234, 
				sT,1) );
		mydata.add(new Supplier(2,"patil vasati",413307,12365478,
			new Date(1997-02-12),1234, 
				sT1,1) );
	 
	 
		 when(SuppR.findAll()).thenReturn(mydata);
	       
	         assertEquals(2,SuppS.getAllSupplier().size());
	 
	}
 
 
 @Test
 @Order(5)
 public void test_getUser() {
		
	 List<Supplier> mydata=new ArrayList<Supplier>();
	 ServiceType sT= new ServiceType(1,"vikas");
	 ServiceType sT1= new ServiceType(2,"vikas");
		mydata.add(new Supplier(1,"patil vasati",413307,12365478,
			new Date(1997-02-12),1234, 
				sT,1) );
		mydata.add(new Supplier(2,"patil vasati",413307,12365478,
			new Date(1997-02-12),1234, 
				sT1,1) );
	 
	 
		 when(SuppR.findAll()).thenReturn(mydata);
	       
	         assertEquals(2,SuppS.getAllSupplier().size());
	 
	}
 /*l
 @Test
 @Order(5)
 public void Test_getServiceSuppliers() {
		
		
	/* List<User> mydata=new ArrayList<User>();
	 
		mydata.add(new User(1,"vikas","patil","vikas@gmail.com",
				"1234678","supllier",true,false,true,false) );
		mydata.add(new User(2,"vikas","patil","vikas@gmail.com",
				"1234678","supllier",true,false,true,false) );
	
	 
	 User myuser = new User(1,"vikas","patil","vikas@gmail.com",
				"1234678","supllier",true,false,true,false
				  );
	 List<Supplier> mydata1=new ArrayList<Supplier>();
	 ServiceType sT= new ServiceType(1,"vikas");
	 ServiceType sT1= new ServiceType(2,"vikas");
		mydata1.add(new Supplier(1,"patil vasati",413307,12365478,
			new Date(1997-02-12),1234, 
				sT,1) );
		mydata1.add(new Supplier(2,"patil vasati",413307,12365478,
			new Date(1997-02-12),1234, 
				sT1,1) );
	 
		String name="vikas";
		int d= 1;
		
		 when(SuppR.findAll()).thenReturn(mydata1);
		assertEquals( mydata1, SuppS.getServiceSuppliers( myuser,name,d).iterator());
		
		
	}*/
 
 
 @Test
 @Order(6)
 public void test_getServiceSuppliers() {
		
	 List<Supplier> mydata=new ArrayList<Supplier>();
	 ServiceType sT= new ServiceType(1,"vikas");
		mydata.add(new Supplier(1,"patil vasati",413307,12365478,
			new Date(1997-02-12),1234, 
				sT,1) );
		mydata.add(new Supplier(2,"patil vasati",413307,12365478,
			new Date(1997-02-12),1234, 
				sT,1) );
	
          int supplierId=1;
          int pincode = 413307;
 
 
          when(SuppR.findAll()).thenReturn(mydata);
          assertEquals(mydata,	SuppS.getsupplierspin(supplierId,pincode));
 
 }
 
 
 
 
 
 
 
 
 
 
 
 
 
}
