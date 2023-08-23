package com.utility.entity;

import java.util.Calendar;
import java.util.Date;

import javax.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@NoArgsConstructor
@Data
@Entity
@AllArgsConstructor
@Table
public class VerificationToken {
	 
	  
		public VerificationToken(Long id, int otp, User user) {
		super();
		this.id = id;
		this.otp = otp;
		this.user = user;
	}
		
		public VerificationToken() {
			super();
		}

		@Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;
	    private int otp;
	    @OneToOne(fetch = FetchType.EAGER)
	    private User user;
		public Long getId() {
			return id;
		}

		public void setId(Long id) {
			this.id = id;
		}

		public int getOtp() {
			return otp;
		}

		public void setOtp(int otp) {
			this.otp = otp;
		}

		public User getUser() {
			return user;
		}

		public void setUser(User user) {
			this.user = user;
		}
		
        
}
