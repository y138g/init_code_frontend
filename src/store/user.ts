// initial state
import { StoreOptions } from "vuex";
import accessEnum from "@/access/accessEnum";

export default {
  namespaced: true,
  state: () => ({
    loginUser: {
      username: "未登录",
      userRole: accessEnum.NOT_LOGIN,
    },
  }),
  actions: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getLoginUser({ commit, state }, payload) {
      //todo 改成远程请求获取登录信息
      commit("updateUser", payload);
    },
  },
  mutations: {
    updateUser(state, payload) {
      state.loginUser = payload;
    },
  },
} as StoreOptions<any>;
