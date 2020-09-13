import { get, post } from "./cfg";

export default {
  getOptions(params: any) {
    return get("/api/base/options", params);
  },
  postLogin(params: any) {
    return post("/api/user/login", params);
  },
  getHomeData(params: any) {
    return post("/api/home/data", params);
  },
};
