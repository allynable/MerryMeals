package com.educlaas.dea.merrymeals.dao;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import java.util.Objects;

@Entity
@Table(name ="meal_order")
public class MealOrder {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long mealOrderId;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "member_id", referencedColumnName = "memberId")
    private Member member;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "meal_item_id", referencedColumnName = "mealItemId")
    private MealItem mealItem;

    public MealOrder() {
    }

    public MealOrder(long mealOrderId, Member member, MealItem mealItem) {
        this.mealOrderId = mealOrderId;
        this.member = member;
        this.mealItem = mealItem;
    }

    public long getMealOrderId() {
        return this.mealOrderId;
    }

    public void setMealOrderId(long mealOrderId) {
        this.mealOrderId = mealOrderId;
    }

    public Member getMember() {
        return this.member;
    }

    public void setMember(Member member) {
        this.member = member;
    }

    public MealItem getMealItem() {
        return this.mealItem;
    }

    public void setMealItem(MealItem mealItem) {
        this.mealItem = mealItem;
    }

    public MealOrder mealOrderId(long mealOrderId) {
        setMealOrderId(mealOrderId);
        return this;
    }

    public MealOrder member(Member member) {
        setMember(member);
        return this;
    }

    public MealOrder mealItem(MealItem mealItem) {
        setMealItem(mealItem);
        return this;
    }

}
