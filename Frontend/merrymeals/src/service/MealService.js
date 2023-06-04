import axios from 'axios'
const API_BASE_URL = "http://localhost:8080/"
class MealService{
    getMealItems() {
        return axios.get(API_BASE_URL + "meal/all");
    }
    updateMeal(meal){
        return axios.put(API_BASE_URL + "meal/" + meal.mealItemId, meal);
    }
    deleteMeal(mealItemId){
        return axios.delete(API_BASE_URL + "meal/" + mealItemId);
    }

    saveMeal(meal){
        return axios.post(API_BASE_URL + "savemeal", meal);
    }
}

const mealService = new MealService()
export default mealService

