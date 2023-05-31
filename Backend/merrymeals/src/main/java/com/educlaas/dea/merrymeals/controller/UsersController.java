package com.educlaas.dea.merrymeals.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.educlaas.dea.merrymeals.dao.Users;
import com.educlaas.dea.merrymeals.exception.ResourceNotFoundException;
import com.educlaas.dea.merrymeals.repository.UsersRepository;
import com.educlaas.dea.merrymeals.service.UsersPrincipal;

@RestController
@RequestMapping("/online")
@CrossOrigin("http://localhost:3000")
public class UsersController {
    @Autowired
    private UsersRepository userRepository;

	//Profile API <<Get Current User Profile>>
    @GetMapping("/user/me")
    public Users getUser(@CurrentUser UsersPrincipal usersPrincipal) {
    	return userRepository.findById((usersPrincipal.getUserId())) 
                .orElseThrow(() -> new ResourceNotFoundException("Users", "userId", usersPrincipal.getUserId()));
    }    
}
