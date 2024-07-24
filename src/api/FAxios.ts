import axios from "axios";
import SInfo from "react-native-sensitive-info";
import { PRAMB_NETWORK } from "./constants";

let appConfigs = {
  dev: {
    baseURL: PRAMB_NETWORK.REACT_APP_API_URL,
    evn: "dev",
  },
};

export const appConfig = appConfigs.dev;

const FAxios = axios.create({
  baseURL: appConfig?.baseURL,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
  },
});

FAxios.interceptors.request.use(
  async function (config) {
    const BearerToken = await SInfo.getItem("BearerToken", {
      sharedPreferencesName: "mySharedPrefs",
      keychainService: "myKeychain",
    });
    if (BearerToken) {
      config.headers.Authorization = BearerToken;
    }
    config.baseURL = appConfig?.baseURL;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
FAxios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if ((error?.response?.data?.detail ?? "") === "USER_BLOCKED") {
      SInfo.deleteItem("BearerToken", {}).then(() => {});
      return Promise.reject(Error("USER_BLOCKED"));
    }
    if (is401Error(error)) {
      // token expired
      SInfo.deleteItem("BearerToken", {}).then(() => {});
    }
    return Promise.reject(error);
  }
);

export const is401Error = (error: any) => {
  return (
    error &&
    error.response &&
    error.response.Status &&
    error.response.Status === 401
  );
};

export default FAxios;
