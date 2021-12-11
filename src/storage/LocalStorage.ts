import { StorageKey } from './config.interface';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Logger } from '../helpers/logger';

export class LocalStorage {
  /**
   * @param key for using a new key you should update StorageKey
   * @param value should be an object mandatory
   */
  static async setItem(key: StorageKey, value: Object) {
    try {
      const updatedValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, updatedValue);
    } catch (e) {
      Logger.log(e);
    }
  }

  /**
   * @param key anyone from StorageKey
   * @returns allways an object
   */
  static async getItem(key: StorageKey) {
    try {
      const value = await AsyncStorage.getItem(key);
      const parsedValue: Object | null = value !== null ? JSON.parse(value) : null;
      return parsedValue;
    } catch (e) {
      Logger.log(e);
      return null;
    }
  }
}
