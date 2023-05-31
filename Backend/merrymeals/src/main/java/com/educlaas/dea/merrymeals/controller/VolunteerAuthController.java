package com.educlaas.dea.merrymeals.controller;

import java.net.URI;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.educlaas.dea.merrymeals.dao.AuthProvider;
import com.educlaas.dea.merrymeals.dao.Volunteer;
import com.educlaas.dea.merrymeals.exception.BadRequestException;
import com.educlaas.dea.merrymeals.jwtsecurity.TokenProvider;
import com.educlaas.dea.merrymeals.payload.VolunteerLogin;
import com.educlaas.dea.merrymeals.payload.VolunteerLoginResponse;
import com.educlaas.dea.merrymeals.payload.VolunteerRegister;
import com.educlaas.dea.merrymeals.payload.VolunteerRegisterResponse;
import com.educlaas.dea.merrymeals.repository.VolunteerRepository;

@RestController
@RequestMapping("/mow/volunteer")
public class VolunteerAuthController {
	@Autowired
	private VolunteerRepository volunteerRepository;
	
	@Autowired
	private TokenProvider tokenProvider;
	
	@Autowired
	private PasswordEncoder passwordEncoder;                      ;
	
	@Autowired 
	private AuthenticationManager authenticationManager;
	
	//Register User for Local 
	@PostMapping(value="/register")
	public ResponseEntity<?> registerVolunteer(@RequestBody VolunteerRegister register){
		//Checking duplicate email
		if(volunteerRepository.existsByEmail(register.getEmail())) {
			throw new BadRequestException("Email has already registered before so kindly try anthoner email");
		}
		
		//Create new register user
		Volunteer volunteer = new Volunteer();
		volunteer.setUserName(register.getUserName());
		volunteer.setEmail(register.getEmail());
		volunteer.setPassword(register.getPassword());
		volunteer.setProvider(AuthProvider.local);
		
		//Encode Password
		volunteer.setPassword(passwordEncoder.encode(volunteer.getPassword()));
		
		//Save new user in the database
		Volunteer newVolunteer = volunteerRepository.save(volunteer);
		
		URI location = ServletUriComponentsBuilder
				.fromCurrentContextPath().path("/me")
				.buildAndExpand(newVolunteer.getVolunteerId()).toUri();
		
		//Return to RegisterResponse Payload
		return ResponseEntity.created(location)
				.body(new VolunteerRegisterResponse(true, "User has successfully registered!!!"));
	}
	
	//Local Login
	@PostMapping("/login")
    public ResponseEntity<?> loginVolunteer(@RequestBody VolunteerLogin login) {

		//Checking Authentication 
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                		login.getEmail(),
                		login.getPassword()
                )
        );

        SecurityContextHolder.getContext().setAuthentication(authentication);
        
        // Checking if the authenticated user is a volunteer
        Optional<Volunteer> volunteer = volunteerRepository.findByEmail(login.getEmail());
        if (volunteer.isEmpty() || volunteer.get().getProvider() != AuthProvider.local) {
            throw new BadRequestException("Invalid credentials or user type");
        }
        
        
        //If authorized user, create token
        String token = tokenProvider.createToken(authentication);
        
        //Return to LoginResponse Payload
        return ResponseEntity.ok(new VolunteerLoginResponse(token));
    }
	
}
