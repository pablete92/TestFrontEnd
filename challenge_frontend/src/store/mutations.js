const mutations = {
  setLoader(state, value) {
    state.isLoading = value;
  },
  search(state, value) {
    state.search = value;
  }
};

export default mutations;
