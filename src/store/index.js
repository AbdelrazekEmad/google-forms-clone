import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

// importing the modules
import requestsModule from "./modules/requests/index.js";
import authModule from "./modules/auth/index.js";

const store = createStore({
  modules: {
    requests: requestsModule,
    auth: authModule,
  },
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  plugins: [createPersistedState()],
});

export default store;
