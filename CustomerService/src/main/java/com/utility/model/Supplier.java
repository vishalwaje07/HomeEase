package com.utility.model;
import java.util.Date;
import java.util.List;
import javax.persistence.*;
import lombok.*;
import com.utility.model.*;



public class Supplier {
	
	
	private long supplierid;
	
	private String address;

	private int pincode;
	
	private long aadhaar;

	private Date dob;
	
	private int charge;
	

	private ServiceType serviceType;
	
	private long userid;

	public Supplier(long supplierid, String address, int pincode, long aadhaar, Date dob, int charge,
			ServiceType serviceType, long userid) {
		super();
		this.supplierid = supplierid;
		this.address = address;
		this.pincode = pincode;
		this.aadhaar = aadhaar;
		this.dob = dob;
		this.charge = charge;
		this.serviceType = serviceType;
		this.userid = userid;
	}

	public Supplier() {
		super();
	}
 
	
	
}
