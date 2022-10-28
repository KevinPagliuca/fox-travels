import axios from 'axios';

export const mapboxAPI = axios.create({
  baseURL: process.env.NEXT_PUBLIC_MAPBOX_API_URL,
  params: {
    access_token: process.env.NEXT_PUBLIC_MAPBOX_API_KEY,
    language: 'pt-BR'
  }
});
