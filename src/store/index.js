import { createStore } from 'vuex';
import cart from './cart';
import products from './products';
import currency from './currency';

export default createStore({
  modules: {
    cart,
    products,
    currency,
  },
});
