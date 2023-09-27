import AsyncStorage from "@react-native-async-storage/async-storage";
import dayjs from "dayjs";

export const setAuthToken = async (securityCredentials: {
  token: string;
  expiry: string;
}) => {
  try {
    console.log("==");
    console.log(securityCredentials);
    await AsyncStorage.setItem("flavora_token", securityCredentials.token);
    await AsyncStorage.setItem("flavora_expiry", securityCredentials.expiry);
  } catch (error) {
    throw new Error(`Failed to set expiry and token. error: ${error}`);
  }
};

export const getAuthToken = async () => {
  try {
    return await AsyncStorage.getItem("flavora_token");
  } catch (error) {
    throw new Error(`Failed to get token. error: ${error}`);
  }
};

export const getTokenExpiry = async () => {
  try {
    return await AsyncStorage.getItem("flavora_expiry");
  } catch (error) {
    throw new Error(`Failed to get expiry token. error: ${error}`);
  }
};

export const resetAuth = async () => {
  try {
    await AsyncStorage.removeItem("flavora_token");
    await AsyncStorage.removeItem("flavora_expiry");
  } catch (error) {
    console.log(error);
    throw new Error(`Failed to reset token and expiry. error: ${error}`);
  }
};

export const isTokenActive = async () => {
  try {
    const expiryString = await AsyncStorage.getItem("flavora_expiry");
    return dayjs(expiryString).isAfter(dayjs());
  } catch (error) {
    throw new Error(`Failed to get expiry token. error: ${error}`);
  }
};
