package com.utility;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.intThat;
import static org.mockito.ArgumentMatchers.nullable;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import com.utility.entity.Customer;
import com.utility.model.User;

import com.utility.repository.CustomerRepository;
import com.utility.repository.OrderRepository;
import com.utility.service.CustomerService;
import com.utility.service.OrderService;
import com.utility.valueobjects.CSignUp;

@SpringBootTest(classes= {CustomerTest.class})
public class CustomerTest {
		
	@Mock
	CustomerRepository customerRepository;
	
	@InjectMocks
	CustomerService customerService;
	
	@Mock
	OrderRepository orderRepository;
	
	@InjectMocks
	OrderService orderService;
	
	public List<Customer> mycustomers;
	
	public List<Order> myorder;
	
	@Test
	@Order(1)
	public void test_getAllCustomers() 
	{
		List<Customer> mycustomers = new ArrayList<Customer>();
		mycustomers.add(new Customer(1L,"pune",411033,456123346132L,new Date(),1,new ArrayList<>()));
		mycustomers.add(new Customer(2L,"pimpri",411026,789134679813L,new Date(),2,new ArrayList<>()));
		
		when(customerRepository.findAll()).thenReturn(mycustomers);//mocking
		assertEquals(2,customerService.getAllCustomers().size());
	}
	
	@Test
	@Order(2)
	public void test_getCustomer() 
	{
		List<Customer> mycustomers = new ArrayList<Customer>();
		mycustomers.add(new Customer(1L,"pune",411033,456123346132L,new Date(),1,new ArrayList<>()));
		mycustomers.add(new Customer(2L,"pimpri",411026,789134679813L,new Date(),2,new ArrayList<>()));
		int customerId=1;
		when(customerRepository.findAll()).thenReturn(mycustomers);
		assertEquals(customerId,customerService.getCustomer(customerId).getCustomerid());
	}
	
		@Test
		@Order(3)
		public void test_editCustomer() {
			List<Customer> mycustomers = new ArrayList<Customer>();
			mycustomers.add(new Customer(1L,"pune",411033,456123346132L,new Date(),1,new ArrayList<>()));
			mycustomers.add(new Customer(2L,"pimpri",411026,789134679813L,new Date(),2,new ArrayList<>()));
			int customerId=2;
			when(customerRepository.findAll()).thenReturn(mycustomers);
			assertEquals(customerId, customerService.getCustomer(customerId).getCustomerid());
			
		}
	
		
		@Test
		@Order(4)
		public void test_getCustomerpin() {
			List<Customer> mycustomers = new ArrayList<Customer>();
			mycustomers.add(new Customer(1L,"pune",411033,456123346132L,new Date(),1,new ArrayList<>()));
			mycustomers.add(new Customer(2L,"pimpri",411026,789134679813L,new Date(),2,new ArrayList<>()));
			int customerpin=411026;
			int Id=2;
			when(customerRepository.findAll()).thenReturn(mycustomers);
			assertEquals(Id,customerService.getCustomer(Id).getCustomerid());
			
		}
		
		@Test
		@Order(5)
		public void  test_saveCustomer() {
			Customer cus1 = new Customer(1L,"pune",411033,456123346132L,new Date(),1,new ArrayList<>());
			
			
			when(customerRepository.save(cus1)).thenReturn(cus1);
			assertEquals(cus1,  customerService.saveCustomer(cus1));
			
			
		}
		

		@Test
		@Order(6)
		public void test_cancalOrder() {
			List<Customer> mycustomers = new ArrayList<Customer>();
			mycustomers.add(new Customer(1L,"pune",411033,456123346132L,new Date(),1,new ArrayList<>()));
			mycustomers.add(new Customer(2L,"pimpri",411026,789134679813L,new Date(),2,new ArrayList<>()));
			int customerpin=411026;
			int Id=2;
			when(customerRepository.findAll()).thenReturn(mycustomers);
			assertEquals(Id,customerService.getCustomer(Id).getCustomerid());
			
		}
		
		
		
		
		
		
		/*@Test
		@Order(6)
		public void getOrdersList() {
			
			List<Order>  myorder = new ArrayList<Order>();
			Customer cus1 = new Customer(1L,"pune",411033,456123346132L,new Date(),1,new ArrayList<>());
			
			 myorder.add(1,"Supller","orderplace",
					new Date(1997-02-12),,12,13);
			
		}
		*/
		
		
		
		
		
//		@Test
//		public void test_getOrdersList()
//		{
//			List<com.utility.entity.Order> myorder = new ArrayList<com.utility.entity.Order>();
//			myorder.add(new Order(1001L,"ac repair",new Date(),2,"pending",101,1));
//			myorder.add(new Order(1002L,"tiles repair",new Date(),4,"pending",102,2));
//			
//			int orderid=1;
//			when(orderService.findAll()).thenReturn(myorder);
//			assertEquals(orderid,orderService.getOrderOfCustomer(orderid, 0).getOrderid());
//		}

		

}
