import axios from "axios";
import { BASE_URL } from "./consts";


export const axi = axios.create({
    baseURL: BASE_URL
})

axi.interceptors.request.use(function (config) {
    config.headers.Accept = 'application/json';
    
    return config
});
