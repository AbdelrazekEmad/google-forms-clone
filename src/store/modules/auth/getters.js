export default {
  token(state) {
    return state.token;
  },
  userIdd(state) {
    return state.userId;
  },
  isAuthenticated(state) {
    return !!state.token;
  },
};
