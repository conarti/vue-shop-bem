import api from './api';
import Money from './Money';

const apiEndpoints = {
  products: '/products.json',
  groups: '/groups.json',
};

// eslint-disable-next-line consistent-return
const fetch = async (endpoint) => {
  try {
    const response = await api.get(endpoint);
    return response.data;
  } catch (e) {
    console.error(e);
  }
};

export default class Products {
  static async fetchProducts() {
    const products = await fetch(apiEndpoints.products);
    return products.map((product) => ({
      ...product,
      price: new Money(product.price, Money.defaultApiCurrency),
    }));
  }

  static async fetchGroups() {
    return fetch(apiEndpoints.groups);
  }

  static changeCurrency(products, currency) {
    return products.map((product) => ({
      ...product,
      price: product.price.exchangeTo(currency),
    }));
  }

  static getGroupProducts(groupId, products) {
    return products.filter((product) => product.group === groupId);
  }

  static getProduct(id, products) {
    return products.find((product) => product.id === id);
  }

  static getCount(id, products) {
    const product = this.getProduct(id, products);
    return product.count;
  }
}
