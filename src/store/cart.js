import LocalStorage from '../services/LocalStorage';

const CART_PRODUCTS_KEY = 'vue-shop-cart-products';

export default {
  namespaced: true,
  state: {
    products: LocalStorage.get(CART_PRODUCTS_KEY) ?? [],
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
    isHaveProduct: (state) => (id) => state.products
      .find((product) => product.id === id) ?? false,
    getProductCount: (state) => (id) => {
      const product = state.products
        .find((cartProduct) => cartProduct.id === id);
      if (product) {
        return product.count;
      }
      return 0;
    },
  },
  mutations: {
    setProducts(state, payload) {
      state.products = payload;
      LocalStorage.set(CART_PRODUCTS_KEY, state.products);
    },
    setProductCount(state, payload) {
      const { id, count } = payload;
      const cartProduct = state.products.find((product) => product.id === id);
      cartProduct.count = count;
      LocalStorage.set(CART_PRODUCTS_KEY, state.products);
    },
    removeProduct(state, id) {
      const cartProductIdx = state.products.findIndex((product) => product.id === id);
      state.products.splice(cartProductIdx, 1);
      LocalStorage.set(CART_PRODUCTS_KEY, state.products);
    },
    addProduct(state, id) {
      const product = {
        id,
        count: 1,
      };
      state.products.push(product);
      LocalStorage.set(CART_PRODUCTS_KEY, state.products);
    },
  },
};
