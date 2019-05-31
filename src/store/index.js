import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

//暴露
export default new Vuex.Store({
  state: {
    //数据状态
    oneName: "oneName",
    twoName: "twoName",
    threeName: "threeName"

  },
  getters: {},
  mutations: {
    //改变state
    changeTwoName(state,name){
        state.twoName = name
    },
    changeThreeName(state,name){
        state.threeName = name
    }
  },
  actions: {
    //异步调用mutations
  }
});
