import SInfo from "react-native-sensitive-info";

import FAxios from "./FAxios";
import Urls from "./urls";

export interface ApiResponse {
  error?: object;
  data?: any;
  meta?: any;
}

const processResponse = (promise: Promise<ApiResponse>) => {
  return promise
    .then((response) => ({
      error: null,
      data: response.data?.data ?? response.data,
      meta: response?.data?.meta,
    }))
    .catch((error) => ({
      error,
      data:
        error?.response?.data?.data ??
        error?.response?.data ??
        error?.response ??
        error,
      meta: null,
    }));
};

export const sendEmailVerify = async (params: object) => {
  return processResponse(FAxios.post(Urls.SEND_EMAIL_VERIFY, params));
};

export const verifyEmail = async (params: object) => {
  return processResponse(FAxios.post(Urls.VERIFY_EMAIL, params));
};

export const updatePassword = async (params: object) => {
  return processResponse(FAxios.post(Urls.UPDATE_PASSWORD, params));
};

export const login = async (params: object) => {
  return processResponse(FAxios.post(Urls.LOGIN, params));
};

export const loginWithProvider = async (params: object) => {
  return processResponse(FAxios.post(Urls.LOGIN_PROVIDER, params));
};

export const getMe = (params: object) => {
  return processResponse(FAxios.get(`${Urls.USER_VIEW}`));
};

export const getListPreBalanceAssets = (params: object) => {
  return processResponse(FAxios.get(`${Urls.PRE_BALANCE_ASSETS}`));
};

export const getPreBalanceTotalTokens = (params: object) => {
  return processResponse(
    FAxios.get(`${Urls.PRE_BALANCE_TOTAL_TOKENS}`, { params })
  );
};

export const getListSystemTokens = () => {
  return processResponse(FAxios.get(`${Urls.SYSTEM_TOKEN}`));
};

export const getDepositTokenNetwork = (params: object) => {
  return processResponse(
    FAxios.get(`${Urls.DEPOSIT_TOKEN_NETWORK}`, { params })
  );
};

export const getDepositTokenAddress = (params: object) => {
  return processResponse(
    FAxios.get(`${Urls.DEPOSIT_TOKEN_ADDRESS}`, { params })
  );
};

export const getWithdrawTokenNetwork = (params: object) => {
  return processResponse(
    FAxios.get(`${Urls.DEPOSIT_TOKEN_NETWORK}`, { params })
  );
};

export const registerDeviceToken = (params: object) => {
  return processResponse(
    FAxios.get(`${Urls.REGISTER_DEVICE_TOKEN}`, { params })
  );
};

export const getNotificationsList = (params: object) => {
  return processResponse(
    FAxios.get(`${Urls.GET_NOTIFICATIONS_LIST}`, { params })
  );
};

export const getMarkReadAll = () => {
  return processResponse(FAxios.get(`${Urls.READ_ALL}`));
};

export const getEnable2FA = async (params: object) => {
  return processResponse(FAxios.get(`${Urls.ENABLE_2FA}`, { params }));
};

export const getActive2FA = async (params: object) => {
  return processResponse(FAxios.get(`${Urls.ACTIVE_2FA}`, { params }));
};

export const getListTransactions = (params: object) => {
  return processResponse(FAxios.get(`${Urls.LIST_TRANSACTIONS}`, { params }));
};

export const sendOTPEmailWithdraw = async (params: object) => {
  return processResponse(FAxios.post(Urls.SEND_EMAIL_WITHDRAW, params));
};

export const withdrawExternalToken = async (params: object) => {
  return processResponse(FAxios.post(Urls.WITHDRAW_EXTERNAL_TOKEN, params));
};

// export const updateUser = (params: any) => {
//   return processResponse(FAxios.put(Urls.UPDATE_ME, params));
// };

export const pathChangeAvatar = async (params: any) => {
  const token = await SInfo.getItem("BearerToken", {});
  const formData = new FormData();
  const { image } = params;
  const upload_body = {
    uri: image.path,
    type: image.mime,
    name: `${new Date().getTime()}-${image.filename}`,
  };
  formData.append("files", upload_body);
  try {
    const response = await fetch(
      "https://aptos-mainnet-api.bluemove.net/api/upload",
      {
        method: "post",
        body: formData,
        headers: {
          Authorization: token,
          "Content-Type": "multipart/form-data",
        },
      }
    );
    const res_json = await response.json();
    return res_json;
  } catch (error) {
    return error;
  }
};
