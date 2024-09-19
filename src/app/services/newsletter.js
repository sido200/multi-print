import { BASE_API_URL } from "../../config/api";
import axios from "axios";
axios.defaults.withCredentials = true;

export const getAllNewsletter = () => {
  return axios.get(`${BASE_API_URL}/newsletter`);
};

export const getAllNewslettersCount = () => {
  return axios.get(`${BASE_API_URL}/newsletter/count`);
};

export const createNewsletter = (data) => {
  return axios.post(`${BASE_API_URL}/newsletter`, data);
}

