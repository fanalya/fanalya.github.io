export default class LocalStorage {
  key;

  constructor(key) {
    this.key = key;
  }

  getItems() {
    const data = window.localStorage.getItem(this.key) || "{}";
    return JSON.parse(data);
  }

  setItems(value) {
    window.localStorage.setItem(this.key, JSON.stringify(value));
  }

  removeItem() {
    window.localStorage.removeItem(this.key);
  }
}
