import axios from 'axios';

const baseUrl = process.env.NODE_ENV === 'production'
  ? 'https://pet-holiday-api.herokuapp.com/'
  : 'http://localhost:3000' 


const api = axios.create({
  baseUrl: baseUrl
})

export default api;







