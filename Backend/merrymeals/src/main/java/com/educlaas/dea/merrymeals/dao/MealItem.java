package com.educlaas.dea.merrymeals.dao;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "meal_item")
public class MealItem {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long mealItemId;
    
    private String name;
    private String description;
}
