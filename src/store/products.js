import ProductService from '../services/ProductService';

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
    getProductById: (state) => (id) => state.products.find((product) => product.id === id),
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
      const products = await ProductService.fetchProducts();
      commit('setProducts', products);
    },
    async fetchGroups({ commit }) {
      const groups = await ProductService.fetchGroups();
      commit('setGroups', groups);
    },
    async fetchAll({ dispatch }) {
      await dispatch('fetchProducts');
      await dispatch('fetchGroups');
    },
  },
};
