import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveToStorage = async (key: string, value: any) => {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.error(`Error saving ${key}:`, error);
    }
};

export const getFromStorage = async (key: string) => {
    try {
        const value = await AsyncStorage.getItem(key);
        return value ? JSON.parse(value) : null;
    } catch (error) {
        console.error(`Error retrieving ${key}:`, error);
    }
};

export const clearStorage = async (keys: string[]) => {
    try {
        await AsyncStorage.multiRemove(keys);
    } catch (error) {
        console.error("Error clearing storage:", error);
    }
};
