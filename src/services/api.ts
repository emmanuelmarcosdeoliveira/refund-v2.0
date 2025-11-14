import axios from "axios";

export const api = axios.create({
  baseURL: "https://refund-api-3rp2.onrender.com",
});
