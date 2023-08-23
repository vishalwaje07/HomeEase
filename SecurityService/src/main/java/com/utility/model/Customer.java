package com.utility.model;
import java.util.Date;
import java.util.List;
import javax.persistence.*;

import com.utility.entity.User;
import com.utility.model.*;

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
	private long userid;	
	private List<Order>	orders;
	public long getCustomerid() {
		return customerid;
	}
	public void setCustomerid(long customerid) {
		this.customerid = customerid;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public int getPincode() {
		return pincode;
	}
	public void setPincode(int pincode) {
		this.pincode = pincode;
	}
	public long getAadhaar() {
		return aadhaar;
	}
	public void setAadhaar(long aadhaar) {
		this.aadhaar = aadhaar;
	}
	public Date getDob() {
		return dob;
	}
	public void setDob(Date dob) {
		this.dob = dob;
	}
	public long getUserid() {
		return userid;
	}
	public void setUserid(long userid) {
		this.userid = userid;
	}
	public List<Order> getOrders() {
		return orders;
	}
	public void setOrders(List<Order> orders) {
		this.orders = orders;
	}
	public Customer(long customerid, String address, int pincode, long aadhaar, Date dob, long userid,
			List<Order> orders) {
		super();
		this.customerid = customerid;
		this.address = address;
		this.pincode = pincode;
		this.aadhaar = aadhaar;
		this.dob = dob;
		this.userid = userid;
		this.orders = orders;
	}
	public Customer() {
		super();
	}
	
	
	
}
