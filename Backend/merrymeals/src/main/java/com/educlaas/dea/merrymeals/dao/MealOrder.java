package com.educlaas.dea.merrymeals.dao;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name ="meal_order")
public class MealOrder {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long mealOrderId;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id", referencedColumnName = "userId")
    private Users user;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "meal_item_id", referencedColumnName = "mealItemId")
    private MealItem mealItem;


    public MealOrder() {
    }

    public MealOrder(long mealOrderId, Users user, MealItem mealItem) {
        this.mealOrderId = mealOrderId;
        this.user = user;
        this.mealItem = mealItem;
    }


    public long getMealOrderId() {
        return this.mealOrderId;
    }

    public void setMealOrderId(long mealOrderId) {
        this.mealOrderId = mealOrderId;
    }

    public Users getUser() {
        return this.user;
    }

    public void setUser(Users user) {
        this.user = user;
    }

    public MealItem getMealItem() {
        return this.mealItem;
    }

    public void setMealItem(MealItem mealItem) {
        this.mealItem = mealItem;
    }

}
