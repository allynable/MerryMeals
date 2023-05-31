package com.educlaas.dea.merrymeals.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.mow.dao.Member;
import com.mow.exception.ResourceNotFoundException;
import com.mow.repository.MemberRepository;

//UserDetailsService is the default built-in interface
/*
 * --- Service Class
--- implements UserDetailsService because want to use loadUserByUsername method (Override method)
--- To authenticate user based on user role (USER) because Spring Security needs to load user details. 
 */
@Service
@Transactional
public class MemberServiceImpl implements UserDetailsService{

	@Autowired
	private MemberRepository memberRepo;
	
	//Override Method for load user by username 
	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		Member member = memberRepo.findByEmail(email)
		.orElseThrow( () -> new UsernameNotFoundException("This email cannot be found" + email));
		
		return MemberPrincipal.createUser(member);
	}
	
	//It is used for JWT Authentication Filter
	public UserDetails loadUserById(long memberId){
		Member member = memberRepo.findById(memberId)
		.orElseThrow( () -> new ResourceNotFoundException("Member", "memberId", memberId));
		
		return MemberPrincipal.createUser(member);
	}

}
