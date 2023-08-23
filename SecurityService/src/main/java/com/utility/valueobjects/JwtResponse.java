package com.utility.valueobjects;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class JwtResponse {
    
	public JwtResponse(String token, String role) {
		super();
		this.token = token;
		this.role = role;
	}
	
	public JwtResponse() {
		super();
	}

	String token;
    String role;
}
