package com.utility.valueobjects;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@AllArgsConstructor
@Data
@ToString
@NoArgsConstructor
public class SDashboard {

	private long allorders;
	private long completedorders;
	private long cancalledorders;
	private long pendingorders;
	private long neworders;
	private long customers;
	private long suppliers;
	private long services;
	public long getAllorders() {
		return allorders;
	}
	public void setAllorders(long allorders) {
		this.allorders = allorders;
	}
	public long getCompletedorders() {
		return completedorders;
	}
	public void setCompletedorders(long completedorders) {
		this.completedorders = completedorders;
	}
	public long getCancalledorders() {
		return cancalledorders;
	}
	public void setCancalledorders(long cancalledorders) {
		this.cancalledorders = cancalledorders;
	}
	public long getPendingorders() {
		return pendingorders;
	}
	public void setPendingorders(long pendingorders) {
		this.pendingorders = pendingorders;
	}
	public long getNeworders() {
		return neworders;
	}
	public void setNeworders(long neworders) {
		this.neworders = neworders;
	}
	public long getCustomers() {
		return customers;
	}
	public void setCustomers(long customers) {
		this.customers = customers;
	}
	public long getSuppliers() {
		return suppliers;
	}
	public void setSuppliers(long suppliers) {
		this.suppliers = suppliers;
	}
	public long getServices() {
		return services;
	}
	public void setServices(long services) {
		this.services = services;
	}
	public SDashboard(long allorders, long completedorders, long cancalledorders, long pendingorders, long neworders,
			long customers, long suppliers, long services) {
		super();
		this.allorders = allorders;
		this.completedorders = completedorders;
		this.cancalledorders = cancalledorders;
		this.pendingorders = pendingorders;
		this.neworders = neworders;
		this.customers = customers;
		this.suppliers = suppliers;
		this.services = services;
	}
	public SDashboard() {
		super();
	}
	
	
}
