export default {
  token(state) {
    return state.token;
  },
  userIdd(state) {
    return state.userId;
  },
  userName(state) {
    return state.userName;
  },
  isAuthenticated(state) {
    return !!state.token;
  },
};
