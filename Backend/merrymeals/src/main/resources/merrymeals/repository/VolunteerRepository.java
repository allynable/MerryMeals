package com.educlaas.dea.merrymeals.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.educlaas.dea.merrymeals.dao.Volunteer;

public interface VolunteerRepository extends JpaRepository<Volunteer, Long>{
    
}
