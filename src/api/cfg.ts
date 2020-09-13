import axios from "axios";

const baseURL = "/";

const api = axios.create({
  timeout: 150000,
  baseURL,
});
api.defaults.headers.post["Content-Type"] = "application/json;charset=UTF-8";
api.defaults.timeout = 50000;

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  (err) => Promise.reject(err)
);

// api.interceptors.response.use(
//   (res) => {
//     if (res.data.code === 401) {
//       location.replace('login');
//     } else {
//       return res;
//     }
//   },
//   (error) => {
//     return Promise.reject(error.response);
//   },
// );

const get = (url: string, params: any) => api.get(url, { params });
const post = (url: string, params: any) => api.post(url, params);
const put = (url: string, params: any) => api.put(url, params);

export { get, post, put };
