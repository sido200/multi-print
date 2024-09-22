import { BASE_API_URL } from "../../config/api";
import axios from "axios";
axios.defaults.withCredentials = true;

export const createContact = (data) => {
  return axios.post(`${BASE_API_URL}/contact`, data);
};
