import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

// importing the modules
import formsModule from "./modules/forms/index.js";
import authModule from "./modules/auth/index.js";

const store = createStore({
  modules: {
    forms: formsModule,
    auth: authModule,
  },
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  plugins: [createPersistedState()],
});

export default store;
