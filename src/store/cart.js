import Cart from '../services/Cart';

export default {
  namespaced: true,
  state: {
    products: Cart.getFromStorage() ?? [],
  },
  getters: {
    products: (state) => state.products,
    hasProduct: (state) => (id) => Cart.hasProduct(id, state.products),
    totalCount: (state, getters, rootState, rootGetters) => {
      const isProductsNotLoaded = !rootGetters['products/isLoaded'];
      if (isProductsNotLoaded) {
        throw new Error('totalCount: product not loaded');
      }
      const cartProducts = state.products;
      const productsData = rootGetters['products/products'];
      const currentCurrency = rootGetters['currency/current'];
      return Cart.calculateTotalSum(cartProducts, productsData, currentCurrency);
    },
    getProductCount: (state) => (id) => Cart.getProductCount(id, state.products),
  },
  mutations: {
    setProducts: (state, payload) => {
      state.products = payload;
      Cart.saveToStorage(payload);
    },
    setProductCount: (state, { id, count }) => {
      state.products = Cart.updateProduct({ id, count }, state.products);
      Cart.saveToStorage(state.products);
    },
    removeProduct: (state, id) => {
      state.products = Cart.removeProduct(id, state.products);
      Cart.saveToStorage(state.products);
    },
    addProduct: (state, id) => {
      state.products = Cart.addProduct(id, state.products);
      Cart.saveToStorage(state.products);
    },
  },
};
