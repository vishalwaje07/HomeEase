package com.utility.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.utility.entity.ServiceType;
@Repository
public interface ServiceTypeRepository extends JpaRepository<ServiceType, Integer>{

}
