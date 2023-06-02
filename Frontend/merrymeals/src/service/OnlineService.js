import axios from 'axios'


class OnlineService{

    slackMessage(text){
        return axios.post("http://localhost:8080/webhook/message/YourName", text)
    }

}

export default new OnlineService