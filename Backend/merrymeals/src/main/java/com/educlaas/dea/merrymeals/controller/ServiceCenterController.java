package com.educlaas.dea.merrymeals.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.educlaas.dea.merrymeals.dao.ServiceCenter;
import com.educlaas.dea.merrymeals.repository.ServiceCenterRepository;

@RestController
@RequestMapping("/ServiceCenter")
public class ServiceCenterController{
    @Autowired
    private ServiceCenterRepository serviceCenterRepository;

    @PostMapping("/")
    public void saveServiceCenter(@RequestBody ServiceCenter serviceCenter){
        serviceCenterRepository.save(serviceCenter);
    }

    @GetMapping("/map")
    public 
}