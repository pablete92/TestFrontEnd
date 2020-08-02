const actions = {
  setLoader({ commit }, value) {
    commit("setLoader", value);
  },
  search({ commit }, value) {
    commit("search", value);
  }
};

export default actions;
