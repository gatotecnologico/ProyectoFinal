import axios from "axios";

const ventasAPI = axios.create({
  baseURL: "http://localhost:3001/api/ventas",
});

export default ventasAPI;
