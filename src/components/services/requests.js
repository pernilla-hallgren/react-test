import axios from 'axios';

const API_URL = 'https://reqres.in/api';

// axios.defaults.withCredentials = true;


export const GET = (url) => {
  return axios.get(`${API_URL}/${url}`, { headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json"
    }}
  );
}

export const POST = async (url, data) => {
  return axios(`${API_URL}/${url}`, {
    method: 'POST',
    data,
    headers: {
      "Content-Type": "application/json"
    }
  });
}

export const PATCH = async (url, data) => {
  return axios(`${API_URL}/${url}`, {
    method: 'PATCH',
    data,
  });
}

export const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('token'));
  };

export const getCurrentCreatedUser = () => {
    return JSON.parse(localStorage.getItem('id'));
  };
