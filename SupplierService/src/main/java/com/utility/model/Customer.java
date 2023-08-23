package com.utility.model;
import java.util.Date;
import java.util.List;

import javax.persistence.*;
import com.utility.model.Order;
import com.utility.model.User;

import lombok.*;
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Customer {
	private long customerid;	
	private String address;	
	private int pincode;	
	private long aadhaar;	
	private Date dob;	
	private User user;	
	private List<Order> orders;
	
}
