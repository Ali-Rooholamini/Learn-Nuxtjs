import axios from 'axios';

const clientApi = axios.create({
    baseURL : "http://localhost:3000/",
    withCredentials : false,
    headers : {
        "Content-Type" : "application/json"
    }
})

export default {
    getEvents(){
        return clientApi.get("events/");
    },
    getEvent(id){
        return clientApi.get("events/" + id);
    }
}