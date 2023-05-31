package com.educlaas.dea.merrymeals.repository;

import org.springframework.stereotype.Repository;

import com.educlaas.dea.merrymeals.dao.Member;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface MemberRepository extends JpaRepository<Member, Long>{
    //Check or Find existing email - return user which relates with existing email
	//For Login 
    Optional<Member> findByEmail(String email);

    //Check or Find existing mail - return true or false
    //For Register (duplicate mail)
    Boolean existsByEmail(String email);
}
