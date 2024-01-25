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
  userAvatar(state) {
    return state.userAvatar;
  },
  isAuthenticated(state) {
    return !!state.token;
  },
};
