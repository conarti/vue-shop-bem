import api from './api';

const apiEndpoints = {
  products: '/products.json',
  groups: '/groups.json',
};

export default class Products {
  static async fetchProducts() {
    return api.get(apiEndpoints.products);
  }

  static async fetchGroups() {
    return api.get(apiEndpoints.groups);
  }
}
