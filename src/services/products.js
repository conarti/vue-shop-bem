import api from './api';

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
    return fetch(apiEndpoints.products);
  }

  static async fetchGroups() {
    return fetch(apiEndpoints.groups);
  }
}
