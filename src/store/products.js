import Products from '../services/products';

export default {
  namespaced: true,
  state: {
    products: null,
    groups: null,
  },
  getters: {
    isLoaded: (state) => state.products !== null && state.groups !== null,
    products: (state) => state.products,
    groups: (state) => state.groups,
    getGroupProducts: (state) => (groupId) => state.products
      .filter((product) => product.group === groupId),
  },
  mutations: {
    setProducts(state, payload) {
      state.products = payload;
    },
    setGroups(state, payload) {
      state.groups = payload;
    },
  },
  actions: {
    async fetchProducts({ commit }) {
      const products = await Products.fetchProducts();
      commit('setProducts', products);
    },
    async fetchGroups({ commit }) {
      const groups = await Products.fetchGroups();
      commit('setGroups', groups);
    },
    async fetchAll({ dispatch }) {
      await dispatch('fetchProducts');
      await dispatch('fetchGroups');
    },
  },
};
