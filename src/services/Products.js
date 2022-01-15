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
      price: new Money(product.price, 'usd'),
    }));
  }

  static async fetchGroups() {
    return fetch(apiEndpoints.groups);
  }
}
