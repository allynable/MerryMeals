package com.educlaas.dea.merrymeals.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.educlaas.dea.merrymeals.dao.MealOrder;
import com.educlaas.dea.merrymeals.payload.MealOrderResponse;
import com.educlaas.dea.merrymeals.repository.MealOrderRepository;

@RestController
@RequestMapping("/order")
public class MealOrderController {
   @Autowired
   private MealOrderRepository mealOrderRepository;

   @PostMapping("/save")
   private MealOrderResponse saveMealOrder(@RequestBody MealOrder mealOrder) {
      mealOrderRepository.save(mealOrder);
      return new MealOrderResponse(true, "Meal Ordered Successfully!");
   }

   @GetMapping("/all")
   private List<MealOrder> getMealOrders() {
      return mealOrderRepository.findAll();
   }

}
