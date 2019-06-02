import AsyncStorage from '@react-native-community/async-storage';

// @format
// @flow

export const USER_KEY = 'USER_KEY';

export default class AsyncCache {
  static getUser = () => {
    return this.get(USER_KEY);
  };

  static setUser = (username: string) => {
    return this.set(USER_KEY, username);
  };

  static removeUser = () => {
    return this.remove(USER_KEY);
  };

  static set = async (key: String, value: string) => {
    return AsyncStorage.setItem(key, value);
  };

  static get = (key: string) => {
    return AsyncStorage.getItem(key);
  };

  static remove = (key: string) => {
    return AsyncStorage.removeItem(key);
  };
}
