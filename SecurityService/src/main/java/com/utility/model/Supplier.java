package com.utility.model;
import java.util.Date;
import java.util.List;
import javax.persistence.*;
import lombok.*;
import com.utility.model.*;



@Data
@AllArgsConstructor
@NoArgsConstructor
public class Supplier {
	
	
	private long supplierid;
	
	private String address;
	
	private int pincode;
	
	private long aadhaar;
	
	private Date dob;
	private ServiceType serviceType;	
	private long userid;
	private int charge;
	public long getSupplierid() {
		return supplierid;
	}
	public void setSupplierid(long supplierid) {
		this.supplierid = supplierid;
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
	public ServiceType getServiceType() {
		return serviceType;
	}
	public void setServiceType(ServiceType serviceType) {
		this.serviceType = serviceType;
	}
	public long getUserid() {
		return userid;
	}
	public void setUserid(long userid) {
		this.userid = userid;
	}
	public int getCharge() {
		return charge;
	}
	public void setCharge(int charge) {
		this.charge = charge;
	}
	public Supplier(long supplierid, String address, int pincode, long aadhaar, Date dob, ServiceType serviceType,
			long userid, int charge) {
		super();
		this.supplierid = supplierid;
		this.address = address;
		this.pincode = pincode;
		this.aadhaar = aadhaar;
		this.dob = dob;
		this.serviceType = serviceType;
		this.userid = userid;
		this.charge = charge;
	}
	public Supplier() {
		super();
	}
	

 
	
	
}
