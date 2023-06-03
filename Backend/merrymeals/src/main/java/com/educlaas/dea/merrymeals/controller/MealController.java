package com.educlaas.dea.merrymeals.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.educlaas.dea.merrymeals.dao.MealItem;
import com.educlaas.dea.merrymeals.repository.MealRepository;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;


@RestController
@RequestMapping("/meal")
public class MealController {
    @Autowired
    private MealRepository mealRepository;

    @PostMapping("/savemeal")
    private MealItem saveMealItem(@RequestBody MealItem mealItem){
        return mealRepository.save(mealItem);
    }

    @PutMapping("/{mealId}")
    public SomeEnityData putMethodName(@PathVariable long mealId, @RequestBody SomeEnityData entity) {
        //TODO: process PUT request
        
        return entity;
    }
}
