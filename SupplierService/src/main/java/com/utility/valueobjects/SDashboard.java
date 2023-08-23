package com.utility.valueobjects;

import java.util.List;

import com.utility.entity.ServiceType;
import com.utility.entity.Supplier;
import com.utility.model.Customer;
import com.utility.model.Order;
import com.utility.model.User;

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
	
}
