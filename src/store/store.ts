import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);
Vue.config.productionTip = false;
export const store = new Vuex.Store({
  state: {
    count: 1,
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    incrementBy(state, payload) {
      state.count += payload.amount;
    },
    decrement(state, n) {
      state.count -= n;
    },
  },
  actions: {
    increment({ commit }) {
      return new Promise((resolve, reject) => {
        axios
          .get("https://jsonplaceholder.typicode.com/todos/1")
          .then((result) => {
            commit("increment");
            console.log(result);
            resolve(result);
          })
          .catch((error) => reject(error));
      });
    },
    async decrement({ dispatch, commit }, n) {
      await dispatch("increment");
      commit("decrement", n);
      commit("decrement", n);
      // return dispatch("increment").then((result) => {
      //   commit("decrement", n); // 1st old value
      //   commit("decrement", n); // 2st -= 1
      // });
    },
  },
});
