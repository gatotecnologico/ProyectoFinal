import axios from "axios";

const comprasAPI = axios.create({
  baseURL: "http://localhost:3001/api/compras",
});

export default comprasAPI;
