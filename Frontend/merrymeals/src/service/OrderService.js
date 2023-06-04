import axios from 'axios'
const API_BASE_URL = "http://localhost:8080/"

class OrderService{
    saveOrder(orderData){
        return axios.post(API_BASE_URL + "order/save", orderData)
    }
}

const orderService = new OrderService()
export default orderService


