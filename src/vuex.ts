import { createStore } from "vuex";

const SET_TOKEN = "SET_TOKEN";
const SET_HEADER_TITLE = "SET_HEADER_TITLE";
const SET_USER_INFO = "SET_USER_INFO";
const SET_CUR_NAV = "SET_CUR_NAV";

const defaultUser = {
  avatar: "https://static.huiman.top/logo/gdr.png",
  name: '--',
  mobile: '--',
};
const loaclUserInfo = localStorage.getItem("userInfo");

const userInfo = loaclUserInfo ? JSON.parse(loaclUserInfo) : defaultUser;

const state = {
  userInfo,
  token: localStorage.getItem('token') || '',
  headerTitle: "首页",
  curNav: 0,
};

const actions = {
  setCurNav({ commit }: any, curNav: number) {
    commit(SET_CUR_NAV, curNav);
  },
  setToken({ commit }: any, token: string) {
    localStorage.setItem("token", JSON.stringify(token));
    commit(SET_TOKEN, token);
  },
  setHeaderTitle({ commit }: any, headerTitle: string) {
    commit(SET_HEADER_TITLE, headerTitle);
  },
  setUserInfo({ commit }: any, userInfo: any) {
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
    commit(SET_USER_INFO, userInfo);
  },
  setSignOut({ commit }: any) {
    localStorage.removeItem("token");
    localStorage.removeItem("userInfo");
    commit(SET_TOKEN, "");
    commit(SET_USER_INFO, defaultUser);
    return true;
  },
};

const mutations = {
  [SET_CUR_NAV](st: any, curNav: number) {
    st.curNav = curNav;
  },
  [SET_TOKEN](st: any, token: string) {
    st.token = token;
  },
  [SET_HEADER_TITLE](st: any, headerTitle: string) {
    st.headerTitle = headerTitle;
  },
  [SET_USER_INFO](s: any, userInfo: any) {
    s.userInfo = userInfo;
  },
};

export default createStore({
  state,
  actions,
  mutations,
});
