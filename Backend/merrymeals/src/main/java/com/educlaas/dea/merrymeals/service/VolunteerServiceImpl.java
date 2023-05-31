package com.educlaas.dea.merrymeals.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;


import com.educlaas.dea.merrymeals.dao.Volunteer;
import com.educlaas.dea.merrymeals.exception.ResourceNotFoundException;
import com.educlaas.dea.merrymeals.repository.VolunteerRepository;

//UserDetailsService is the default built-in interface
/*
 * --- Service Class
--- implements UserDetailsService because want to use loadUserByUsername method (Override method)
--- To authenticate user based on user role (USER) because Spring Security needs to load user details. 
 */
@Service
@Transactional
public class VolunteerServiceImpl implements UserDetailsService{

	@Autowired
	private VolunteerRepository volunteerRepo;
	
	//Override Method for load user by username 
	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		Volunteer volunteer = volunteerRepo.findByEmail(email)
		.orElseThrow( () -> new UsernameNotFoundException("This email cannot be found" + email));
		
		return VolunteerPrincipal.createUser(volunteer);
	}
	
	//It is used for JWT Authentication Filter
	public UserDetails loadUserById(long volunteerId){
		Volunteer volunteer = volunteerRepo.findById(volunteerId)
		.orElseThrow( () -> new ResourceNotFoundException("Volunteer", "volunteerId", volunteerId));
		
		return VolunteerPrincipal.createUser(volunteer);
	}

}