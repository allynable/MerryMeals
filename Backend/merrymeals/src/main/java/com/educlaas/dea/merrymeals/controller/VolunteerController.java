package com.educlaas.dea.merrymeals.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.educlaas.dea.merrymeals.dao.Volunteer;
import com.educlaas.dea.merrymeals.exception.ResourceNotFoundException;
import com.educlaas.dea.merrymeals.repository.VolunteerRepository;
import com.educlaas.dea.merrymeals.service.VolunteerPrincipal;

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
