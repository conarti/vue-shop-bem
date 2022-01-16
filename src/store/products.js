import Products from '../services/Products';

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
    getGroupProducts: (state) => (groupId) => Products.getGroupProducts(groupId, state.products),
    getProductById: (state) => (id) => Products.getProduct(id, state.products),
    getProductCount: (state) => (id) => Products.getCount(id, state.products),
  },
  mutations: {
    setProducts: (state, payload) => {
      state.products = payload;
    },
    setGroups: (state, payload) => {
      state.groups = payload;
    },
    updateProductsCurrency: (state, currency) => {
      state.products = Products.changeCurrency(state.products, currency);
    },
  },
  actions: {
    fetchProducts: async ({ commit }) => {
      const products = await Products.fetchProducts();
      commit('setProducts', products);
    },
    fetchGroups: async ({ commit }) => {
      const groups = await Products.fetchGroups();
      commit('setGroups', groups);
    },
    fetchAll: async ({ dispatch }) => {
      await dispatch('fetchProducts');
      await dispatch('fetchGroups');
    },
  },
};
