import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "2b0cf53c0c4d47c18391a2c34f2348c5",
  },
});

export default apiClient;
