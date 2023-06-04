import axios from 'axios'
const API_BASE_URL = "http://localhost:8080/"
class MealService{
    getMealItems() {
        return axios.get(API_BASE_URL + "meal/all");
    }
}

const mealService = new MealService()
export default mealService

