import { StorageKey } from './config.interface';

export class SecureLocalStorage {
  static async setItem(key: StorageKey, value: Object) {
    console.log(key, value);
  }

  static async getItem(key: StorageKey) {
    console.log(key);
  }
}
