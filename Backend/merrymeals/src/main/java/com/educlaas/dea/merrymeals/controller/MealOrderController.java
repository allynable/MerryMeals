package com.educlaas.dea.merrymeals.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.educlaas.dea.merrymeals.dao.MealOrder;
import com.educlaas.dea.merrymeals.repository.MealOrderRepository;


@RestController
@RequestMapping("/order")
public class MealOrderController {
   @Autowired
   private MealOrderRepository mealOrderRepository;

   @PostMapping("/")
   private MealOrder saveMealOrder(@RequestBody MealOrder mealOrder){
        return null;
   }
}
