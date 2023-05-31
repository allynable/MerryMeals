package com.educlaas.dea.merrymeals.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.educlaas.dea.merrymeals.dao.Volunteer;
import java.util.List;
import java.util.Optional;

@Repository
public interface VolunteerRepository extends JpaRepository<Volunteer, Long>{
    Optional<Volunteer> findByVolunteerId(long volunteerId);
}
