export default class Money {
  static defaultApiCurrency = 'usd'

  static rates = {
    usd: {
      rub: 72,
    },
    rub: {
      usd: 0.013,
    },
  }

  constructor(value, currency) {
    this.value = value;
    this.currency = currency;
  }

  static getCurrencies() {
    return Object.keys(this.rates);
  }

  static isValidCurrency(currency) {
    return this.getCurrencies().includes(currency);
  }

  exchangeTo(newCurrency) {
    if (!this.constructor.isValidCurrency(newCurrency)) {
      throw new Error(`exchangeTo: unknown currency - ${newCurrency}`);
    }
    if (this.currency === newCurrency) {
      return new Money(this.value, this.currency);
    }
    const newValue = this.value * this.constructor.rates[this.currency][newCurrency];
    return new Money(newValue, newCurrency);
  }

  toString() {
    return this.value.toLocaleString('ru-RU', {
      style: 'currency',
      currency: this.currency,
    });
  }
}
