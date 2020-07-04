import Vue from "vue";
import Vuex from "vuex";

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
});
