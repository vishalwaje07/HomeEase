package com.utility.entity;
import java.util.Date;
import java.util.List;
import javax.persistence.*;
import lombok.*;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.utility.model.*;


@Entity
@Table(name="suppliers")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Supplier {
	
	
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

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long supplierid;
	@Column(length = 255,nullable = false)
	private String address;
	@Column(length = 6,nullable = false)
	private int pincode;
	@Column(length = 12,nullable = false)
	private long aadhaar;
	@Column
	//@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
	private Date dob;
	@Column(length = 4,nullable = false)
	private int charge;
	
	@OneToOne
	private ServiceType serviceType;
	@Column(unique = true,nullable = false)
	private long userid;
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

	public int getCharge() {
		return charge;
	}

	public void setCharge(int charge) {
		this.charge = charge;
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
	
	
 
	
	
}
