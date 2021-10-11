import * as SecureStore from "expo-secure-store";
export default function useSecureStore() {
  async function saveInSecureStore(key: string, value: any) {
    await SecureStore.setItemAsync(key, value);
  }

  async function getValueSecureStore(key: string) {
    let result = await SecureStore.getItemAsync(key);
    return result;
  }

  async function destroySecureStoreKey(key: string) {
    await SecureStore.deleteItemAsync(key);
  }

  return {
    save: (key: string, value: any) => saveInSecureStore(key, value),
    get: (key: string) => getValueSecureStore(key),
    destroy: (key: string) => destroySecureStoreKey(key),
  };
}
