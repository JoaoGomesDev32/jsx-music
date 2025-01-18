import axios from 'axios';

const API = axios.create({
  baseURL: 'https://api.example.com', // Substitua pela API escolhida
});

export default API;
