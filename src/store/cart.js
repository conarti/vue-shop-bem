export default {
  namespaced: true,
  state: {
    products: [
      {
        id: '1',
        count: '1',
      },
      {
        id: '2',
        count: '3',
      },
    ],
  },
  getters: {
    products: (state) => state.products,
    totalCount: (state, _, __, rootGetters) => {
      if (rootGetters['products/isLoaded']) {
        return state.products.reduce((acc, { id, count }) => {
          const product = rootGetters['products/getProductById'](id);
          const sum = product.price * count;
          return acc + sum;
        }, 0);
      }
      return null;
    },
  },
  mutations: {
    setProducts(state, payload) {
      state.products = payload;
    },
    setProductCount(state, payload) {
      const { id, count } = payload;
      const cartProduct = state.products.find((product) => product.id === id);
      cartProduct.count = count;
    },
    removeProduct(state, id) {
      const cartProductIdx = state.products.findIndex((product) => product.id === id);
      state.products.splice(cartProductIdx, 1);
    },
  },
};
