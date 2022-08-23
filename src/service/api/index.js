import axios from 'axios';

const BASEURL = 'http://192.168.18.102:8081/crudService/';

export const api = axios.create({
    baseURL: BASEURL,
    timeout: 2000
})
