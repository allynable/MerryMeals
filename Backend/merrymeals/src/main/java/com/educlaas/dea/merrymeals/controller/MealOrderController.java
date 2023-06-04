package com.educlaas.dea.merrymeals.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.educlaas.dea.merrymeals.dao.MealOrder;
import com.educlaas.dea.merrymeals.dao.Member;
import com.educlaas.dea.merrymeals.payload.MealOrderDto;
import com.educlaas.dea.merrymeals.payload.MealOrderResponse;
import com.educlaas.dea.merrymeals.repository.MealOrderRepository;
import com.educlaas.dea.merrymeals.repository.MemberRepository;

@RestController
@RequestMapping("/order")
public class MealOrderController {
   @Autowired
   private MealOrderRepository mealOrderRepository;

   @Autowired
   private MemberRepository memberRepository;

   @PostMapping("/save/")
   private MealOrderResponse saveMealOrder(@RequestBody MealOrderDto mealOrderDto) {
      Optional<Member> optionalMember = memberRepository.findById(mealOrderDto.getCurrentMember());
      if(optionalMember.isPresent()){
         Member member = optionalMember.get();

         MealOrder mealOrder = new MealOrder();
         mealOrder.setMember(member);
         mealOrder.setMondayMeal(mealOrderDto.getMondayMeal());
         mealOrder.setTuesdayMeal(mealOrderDto.getTuesdayMeal());
         mealOrder.setWednesdayMeal(mealOrderDto.getWednesdayMeal());
         mealOrder.setThursdayMeal(mealOrderDto.getThursdayMeal());
         mealOrder.setFridayMeal(mealOrderDto.getFridayMeal());
         mealOrderRepository.save(mealOrder);
         return new MealOrderResponse(true, "Meal Ordered Successfully!");
      }
      return new MealOrderResponse(false, "Failed to Order");
   }

   @GetMapping("/all")
   private List<MealOrder> getMealOrders() {
      return mealOrderRepository.findAll();
   }

}
