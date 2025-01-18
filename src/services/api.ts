import axios from 'axios';

const API = axios.create({
  baseURL: 'https://api.deezer.com', // Substitua pela API escolhida
});

export default API;
