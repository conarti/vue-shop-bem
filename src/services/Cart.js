import LocalStorage from './LocalStorage';
import CartProduct from './CartProduct';
import Money from './Money';
import params from '../utils/params';

const { cartProductsLocalStorageKey } = params;

export default class Cart {
  static calculateTotalSum(cartProducts, productsData, currency) {
    const totalSum = cartProducts.reduce((acc, { id, count }) => {
      const productData = productsData.find((product) => product.id === id);
      const productPrice = productData.price.value;
      const sum = productPrice * count;
      return acc + sum;
    }, 0);
    return new Money(totalSum, currency);
  }

  static findProduct(id, cartProducts) {
    return cartProducts.find((product) => product.id === id);
  }

  static removeProduct(id, cartProducts) {
    return cartProducts.filter((product) => product.id !== id);
  }

  static hasProduct(id, cartProducts) {
    return this.findProduct(id, cartProducts) !== undefined;
  }

  static updateProduct({ id, count }, cartProducts) {
    const cartProductIdx = cartProducts.findIndex((product) => product.id === id);
    const updatedCart = cartProducts.concat();
    updatedCart[cartProductIdx] = new CartProduct(id, count);
    return updatedCart;
  }

  static addProduct(id, cartProducts) {
    const product = new CartProduct(id, 1);
    cartProducts.push(product);
    return cartProducts;
  }

  static saveToStorage(cartProducts) {
    LocalStorage.set(cartProductsLocalStorageKey, cartProducts);
  }

  static getFromStorage() {
    return LocalStorage.get(cartProductsLocalStorageKey);
  }

  static getProductCount(id, cartProducts) {
    if (this.hasProduct(id, cartProducts)) {
      const { count } = this.findProduct(id, cartProducts);
      return count;
    }
    return 0;
  }

  static getFormattedProductCount(count, maxCount) {
    if (count < 1 || count instanceof String) {
      return 1;
    }
    if (count > maxCount) {
      return maxCount;
    }
    return count;
  }
}
