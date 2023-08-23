package com.utility.entity;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.utility.model.User;

import lombok.*;



@Entity
@Table(name = "Customers")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Customer {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long customerid;
	
	@Column
	private String address;
	@Column
	private int pincode;
	@Column
	private long aadhaar;
	@Column
	private Date dob;	
	@Column
	private long userid;
	@JsonIgnore
	@JsonManagedReference
	@OneToMany(mappedBy = "customerid",fetch = FetchType.LAZY,cascade = CascadeType.ALL)
	private List<Order> orders=new ArrayList<Order>();
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
