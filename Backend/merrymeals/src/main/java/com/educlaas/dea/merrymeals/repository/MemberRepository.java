package com.educlaas.dea.merrymeals.repository;

import org.springframework.stereotype.Repository;

import com.educlaas.dea.merrymeals.dao.Member;
import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface MemberRepository extends JpaRepository<Member, Long>{
    
}
