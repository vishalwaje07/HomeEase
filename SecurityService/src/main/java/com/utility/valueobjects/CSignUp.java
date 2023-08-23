package com.utility.valueobjects;

import java.util.Date;

import org.springframework.stereotype.Component;

import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Component
public class CSignUp {
	private String name;
	private String address;	
	private int pincode;
	private Date dob;
	private long aadhaar;
	private String mobile;
	private String username;	
	private int service;
	private int charge;
	private String role;
	private  int isAccountNonExpired;
	private   int isAccountNonLocked;
	private  int isCredentialsNonExpired;
	private  int isEnabled;
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
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
	public Date getDob() {
		return dob;
	}
	public void setDob(Date dob) {
		this.dob = dob;
	}
	public long getAadhaar() {
		return aadhaar;
	}
	public void setAadhaar(long aadhaar) {
		this.aadhaar = aadhaar;
	}
	public String getMobile() {
		return mobile;
	}
	public void setMobile(String mobile) {
		this.mobile = mobile;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public int getService() {
		return service;
	}
	public void setService(int service) {
		this.service = service;
	}
	public int getCharge() {
		return charge;
	}
	public void setCharge(int charge) {
		this.charge = charge;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	public int getIsAccountNonExpired() {
		return isAccountNonExpired;
	}
	public void setIsAccountNonExpired(int isAccountNonExpired) {
		this.isAccountNonExpired = isAccountNonExpired;
	}
	public int getIsAccountNonLocked() {
		return isAccountNonLocked;
	}
	public void setIsAccountNonLocked(int isAccountNonLocked) {
		this.isAccountNonLocked = isAccountNonLocked;
	}
	public int getIsCredentialsNonExpired() {
		return isCredentialsNonExpired;
	}
	public void setIsCredentialsNonExpired(int isCredentialsNonExpired) {
		this.isCredentialsNonExpired = isCredentialsNonExpired;
	}
	public int getIsEnabled() {
		return isEnabled;
	}
	public void setIsEnabled(int isEnabled) {
		this.isEnabled = isEnabled;
	}
	public CSignUp(String name, String address, int pincode, Date dob, long aadhaar, String mobile, String username,
			int service, int charge, String role, int isAccountNonExpired, int isAccountNonLocked,
			int isCredentialsNonExpired, int isEnabled) {
		super();
		this.name = name;
		this.address = address;
		this.pincode = pincode;
		this.dob = dob;
		this.aadhaar = aadhaar;
		this.mobile = mobile;
		this.username = username;
		this.service = service;
		this.charge = charge;
		this.role = role;
		this.isAccountNonExpired = isAccountNonExpired;
		this.isAccountNonLocked = isAccountNonLocked;
		this.isCredentialsNonExpired = isCredentialsNonExpired;
		this.isEnabled = isEnabled;
	}
	public CSignUp() {
		super();
	}
	
	
			
}
