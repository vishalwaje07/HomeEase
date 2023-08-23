package com.utility.valueobjects;

import java.util.Date;

import org.springframework.stereotype.Component;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Component
public class UserOtp {
	private long userid;
	private String otp;
	private String token;
	public long getUserid() {
		return userid;
	}
	public void setUserid(long userid) {
		this.userid = userid;
	}
	public String getOtp() {
		return otp;
	}
	public void setOtp(String otp) {
		this.otp = otp;
	}
	public String getToken() {
		return token;
	}
	public void setToken(String token) {
		this.token = token;
	}
	public UserOtp(long userid, String otp, String token) {
		super();
		this.userid = userid;
		this.otp = otp;
		this.token = token;
	}
	public UserOtp() {
		super();
	}
	

}
