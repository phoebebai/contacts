export const state = () => ({
  profile: null
});

export const getters = {

};

export const mutations = {
  SET_USER(state, payload) {
    state.profile = payload;
  }
};

export const actions = {
  setUsers({ commit }, payload) {
    commit('SET_USER', payload);
  }
};
