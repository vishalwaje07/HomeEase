package com.utility.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.utility.entity.Customer;

@Repository
public interface CustomerRepository extends JpaRepository<Customer,Long>{

	public Customer findByuserid(long id);
}
