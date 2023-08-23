package com.utility.exceptions;

import org.springframework.http.HttpStatus;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@NoArgsConstructor
@AllArgsConstructor
public class HttpMessage {

	
	public HttpMessage(HttpStatus status, String message) {
		super();
		this.status = status;
		this.message = message;
	}
	
	public HttpMessage() {
		super();
	}

	private HttpStatus status;
	private String message;
}
