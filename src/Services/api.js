import axios from "axios";

export const key = "c093d2479b523b7583b776ed3a5cee88318c9b8c"

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers: {
        'Authorization': `Bearer ${key}`
    }
})

export default api;