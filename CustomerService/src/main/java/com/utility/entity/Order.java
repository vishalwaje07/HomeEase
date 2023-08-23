package com.utility.entity;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import org.hibernate.annotations.CreationTimestamp;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import com.fasterxml.jackson.annotation.JsonBackReference;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name="Orders")
@Entity
@Component
public class Order {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long orderid;
	@Column
	@Size(min=8,max=512)
	private String description;
	@Column(nullable = false,length = 16)
	@NotBlank
	private String status;
	@Column(nullable = false,length = 16)
	
	
	private Date orderdate;
	@JsonBackReference
	@ManyToOne(cascade = CascadeType.ALL)
	private Customer customerid;
	@Column(nullable = false)
	private long supplierid;
	@Column(nullable = false)
	private int servicetypeid;
	@Column
	@Value("0")
	private int rating;
	@Column
	@Value("-")
	private String feedback;
	public long getOrderid() {
		return orderid;
	}
	public void setOrderid(long orderid) {
		this.orderid = orderid;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public Date getOrderdate() {
		return orderdate;
	}
	public void setOrderdate(Date orderdate) {
		this.orderdate = orderdate;
	}
	public Customer getCustomerid() {
		return customerid;
	}
	public void setCustomerid(Customer customerid) {
		this.customerid = customerid;
	}
	public long getSupplierid() {
		return supplierid;
	}
	public void setSupplierid(long supplierid) {
		this.supplierid = supplierid;
	}
	public int getServicetypeid() {
		return servicetypeid;
	}
	public void setServicetypeid(int servicetypeid) {
		this.servicetypeid = servicetypeid;
	}
	public int getRating() {
		return rating;
	}
	public void setRating(int rating) {
		this.rating = rating;
	}
	public String getFeedback() {
		return feedback;
	}
	public void setFeedback(String feedback) {
		this.feedback = feedback;
	}
	public Order(long orderid, @Size(min = 8, max = 512) String description, @NotBlank String status, Date orderdate,
			Customer customerid, long supplierid, int servicetypeid, int rating, String feedback) {
		super();
		this.orderid = orderid;
		this.description = description;
		this.status = status;
		this.orderdate = orderdate;
		this.customerid = customerid;
		this.supplierid = supplierid;
		this.servicetypeid = servicetypeid;
		this.rating = rating;
		this.feedback = feedback;
	}
	public Order() {
		super();
	}
	
	

}
