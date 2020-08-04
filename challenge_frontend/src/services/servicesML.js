import axios from "axios";
import i18n from "@/i18n/es.json";

let baseURL = i18n.services.base;

let axiosInstance = axios.create({
  timeout: 1000000
});

axiosInstance.interceptors.request.use(
  async config => {
    (config.baseURL = baseURL),
      (config.headers = {
        "Access-Control-Allow-Origin": true
      });
    return config;
  },
  error => Promise.reject(error)
);

axiosInstance.defaults.headers.post["Content-Type"] = "application/json";
axiosInstance.defaults.headers.post["Accept"] = "*/*";
axiosInstance.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

export default axiosInstance;
