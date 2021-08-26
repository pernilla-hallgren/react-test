import axios from 'axios';

const API_URL = 'https://reqres.in/api';

axios.defaults.withCredentials = true;



// export const GET = (url) => {
//   return axios.get(`${API_URL}/${url}`);
// }

// export const POST = async (url, data) => {
//   return axios(`${API_URL}/${url}`, {
//     method: 'POST',
//     data
//   });
// }

// export const PATCH = async (url, data) => {
//   return axios(`${API_URL}/${url}`, {
//     method: 'PATCH',
//     data,
//   });
// }