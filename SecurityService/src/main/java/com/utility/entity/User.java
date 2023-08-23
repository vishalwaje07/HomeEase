package com.utility.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

import org.springframework.stereotype.Component;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name="Users")
@Entity
@Component
public class User {
	
	
	public User(long id, @Size(min = 2, max = 64) String name,
			@Pattern(regexp = "[a-zA-Z0-9][a-zA-Z0-9_.]*@[a-zA-Z0-9]+([.][a-zA-Z]+)+") String username, String password,
			@Pattern(regexp = "(0|91)?[7-9][0-9]{9}", message = "Enter Valid mobile number") String mobile,
			@NotBlank String role, boolean isAccountNonExpired, boolean isAccountNonLocked,
			boolean isCredentialsNonExpired, boolean isEnabled) {
		super();
		this.id = id;
		this.name = name;
		this.username = username;
		this.password = password;
		this.mobile = mobile;
		this.role = role;
		this.isAccountNonExpired = isAccountNonExpired;
		this.isAccountNonLocked = isAccountNonLocked;
		this.isCredentialsNonExpired = isCredentialsNonExpired;
		this.isEnabled = isEnabled;
	}
	
	
	public User() {
		super();
	}


	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	@Column(nullable = false)
	@Size(min=2,max=64)
	private String name;	
	@Column(unique = true,length = 64,nullable = false)
	@Pattern(regexp = "[a-zA-Z0-9][a-zA-Z0-9_.]*@[a-zA-Z0-9]+([.][a-zA-Z]+)+")
	private String username;
	@Column(length = 64,nullable = false)
	private String password;
	@Column(unique = true,length = 16,nullable = false)
	@Pattern(regexp = "(0|91)?[7-9][0-9]{9}",message = "Enter Valid mobile number")
	private String mobile;
	@Column(nullable = false,length = 16)
	@NotBlank
	private String role;
	   private  boolean isAccountNonExpired;
	   private   boolean isAccountNonLocked;
	   private  boolean isCredentialsNonExpired;
	   private  boolean isEnabled;
	public long getId() {
		return id;
	}


	public void setId(long id) {
		this.id = id;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public String getUsername() {
		return username;
	}


	public void setUsername(String username) {
		this.username = username;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}


	public String getMobile() {
		return mobile;
	}


	public void setMobile(String mobile) {
		this.mobile = mobile;
	}


	public String getRole() {
		return role;
	}


	public void setRole(String role) {
		this.role = role;
	}


	public boolean isAccountNonExpired() {
		return isAccountNonExpired;
	}


	public void setAccountNonExpired(boolean isAccountNonExpired) {
		this.isAccountNonExpired = isAccountNonExpired;
	}


	public boolean isAccountNonLocked() {
		return isAccountNonLocked;
	}


	public void setAccountNonLocked(boolean isAccountNonLocked) {
		this.isAccountNonLocked = isAccountNonLocked;
	}


	public boolean isCredentialsNonExpired() {
		return isCredentialsNonExpired;
	}


	public void setCredentialsNonExpired(boolean isCredentialsNonExpired) {
		this.isCredentialsNonExpired = isCredentialsNonExpired;
	}


	public boolean isEnabled() {
		return isEnabled;
	}


	public void setEnabled(boolean isEnabled) {
		this.isEnabled = isEnabled;
	}
	
	
}
