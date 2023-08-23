package com.utility.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.utility.entity.Supplier;
@Repository
public interface SupplierRepository extends JpaRepository<Supplier,Long>{

}
