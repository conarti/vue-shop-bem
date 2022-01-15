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
    totalCount: (state, _, __, rootGetters) => state.products
      .reduce((acc, { id, count }) => {
        const product = rootGetters['products/getProductById'](id);
        const sum = product.price * count;
        return acc + sum;
      }, 0),
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
  },
};
