// src/store/index.js
import { createStore } from "vuex";

export default createStore({
    state: {
        count: 0
    },
    mutations: {
        increment(state) {
            state.count++;
        }
    },
    actions: {
        // 비동기로 1초 후 count 1 증가
        incrementAsync({ commit }){
            setTimeout(() => {
                commit("increment");
            }, 1000);
        }
    },
    getters: {
        doubleCount: (state) => state.count * 2
    }
});
