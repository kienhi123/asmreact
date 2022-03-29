import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:2223/api"
})
export default instance;