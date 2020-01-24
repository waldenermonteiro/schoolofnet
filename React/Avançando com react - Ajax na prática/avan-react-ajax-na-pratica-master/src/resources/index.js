import axios from 'axios';

const BASE_URL = 'http://localhost:9000';

const instance = axios.create({
    baseURL: BASE_URL
})

export default instance;