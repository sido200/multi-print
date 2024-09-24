import { BASE_API_URL } from "../../config/api";
import axios from "axios";
axios.defaults.withCredentials = true;

export const getpub = () => {
  return axios.get(`${BASE_API_URL}/pub`);
};
