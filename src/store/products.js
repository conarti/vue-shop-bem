import Products from '../services/products';

export default {
  namespaced: true,
  state: {
    all: null,
  },
  getters: {
    isLoaded: (state) => state.all !== null,
    all: (state) => state.all,
  },
  mutations: {
    setProducts(state, payload) {
      state.all = payload;
    },
  },
  actions: {
    async fetchProducts({ commit }) {
      const products = await Products.fetchProducts();
      commit('setProducts', products);
    },
  },
};
