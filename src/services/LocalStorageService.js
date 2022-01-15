export default class LocalStorageService {
  static get(key) {
    return JSON.parse(localStorage.getItem(key));
  }

  static set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
}
