import Money from '../services/Money';

export default {
  namespaced: true,
  state: {
    current: Money.defaultApiCurrency,
    currencies: Money.getCurrencies(),
  },
  getters: {
    current: (state) => state.current,
    currencies: (state) => state.currencies,
  },
  mutations: {
    change(state, currency) {
      state.current = currency;
    },
  },
  actions: {
    change({ commit }, currency) {
      if (!Money.isValidCurrency(currency)) {
        throw new Error(`changeCurrency: unknown currency - ${currency}`);
      }
      commit('change', currency);
      commit('products/updateProductsCurrency', currency, { root: true });
    },
  },
};
