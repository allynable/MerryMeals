package com.mow.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mow.dao.Volunteer;
import com.mow.exception.ResourceNotFoundException;
import com.mow.repository.VolunteerRepository;
import com.mow.service.VolunteerPrincipal;

@RestController
@RequestMapping(value="/mow")
public class VolunteerController {
	@Autowired
    private VolunteerRepository volunteerRepository;

	//Profile API <<Get Current User Profile>>
    @GetMapping("/volunteer/me")
    @PreAuthorize("hasRole('VOLUNTEER')")
    public Volunteer getVolunteer(@CurrentUser VolunteerPrincipal volunteerPrincipal) {
    	return volunteerRepository.findById((volunteerPrincipal.getVolunteerId())) 
                .orElseThrow(() -> new ResourceNotFoundException("Volunteer", "volunteerId", volunteerPrincipal.getVolunteerId()));
    }
}
