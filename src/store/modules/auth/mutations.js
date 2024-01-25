export default {
  setUser(state, payload) {
    state.token = payload.token;
    state.tokenExpiration = payload.tokenExpiration;
    state.userId = payload.userId;
    state.userName = payload.userName;
    state.userEmail = payload.userEmail;
    state.userAvatar = payload.userAvatar;
  },
};
