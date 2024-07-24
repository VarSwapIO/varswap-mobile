import { put, takeLatest } from "redux-saga/effects";
import SInfo from "react-native-sensitive-info";

// import FAxios from "api/FAxios";

import { userActions } from "reducer/userReducer";
import { getMe, login, sendEmailVerify } from "api/index";
import { hideLoading, showLoading } from "components/loading/ActivityIndicator";
import { notificationActions } from "../reducer/notificationReducer";
import { AppNotificationType } from "features/notifications/types";
import FAxios from "api/FAxios";

export default [
  takeLatest(userActions.loginRequest, loginSaga),
  takeLatest(userActions.logoutRequest, logoutSaga),
  takeLatest(userActions.getUser, getUserSaga),
  takeLatest(userActions.resendOTPRequest, resendOTPSaga),

  // takeLatest(userActions.deleteUser, deleteUserSaga),
];

function* loginSaga(action: any) {
  try {
    // 1. get message
    // 2. sign Hexstring - aptos account
    // 3. login
    // 4. hearder.bearer
    const params = {
      email: action.payload.email,
      password: action.payload.password,
      // walletAddress: action.payload.address,
      // message: action.payload.message,
      // deviceToken: action?.payload?.deviceToken,
    };
    showLoading();
    const { data, error } = yield login(params);
    if (data?.Status != 200) {
      throw data?.err;
    }
    const BearerToken = `Bearer ${data?.accesstoken}`;
    FAxios.defaults.headers.common["Authorization"] = BearerToken;
    yield SInfo.setItem(`BearerToken`, BearerToken, {
      sharedPreferencesName: "mySharedPrefs",
      keychainService: "myKeychain",
    });
    yield SInfo.setItem(`refreshToken`, BearerToken, {
      sharedPreferencesName: "mySharedPrefs",
      keychainService: "myKeychain",
    });
    const { data: userData, error: userError } = yield getMe({});
    yield put(userActions.getUserSuccess({ user: userData }));
    yield put(userActions.loginSuccess());
    yield put(
      notificationActions.pushNotification({
        type: AppNotificationType.Success,
        message: "Login successfully",
      })
    );
  } catch (error) {
    yield put(
      notificationActions.pushNotification({
        type: AppNotificationType.Error,
        errorMessage: error + "",
      })
    );
  } finally {
    hideLoading();
  }
}

function* getUserSaga(action: any) {
  try {
    const { data, error } = yield getMe({});
    if (!error) {
      yield put(
        userActions.getUserSuccess({
          user: data,
        })
      );
    }
    const showOnboardingBanner: string = yield SInfo.getItem(
      "showOnboardingBanner",
      {
        sharedPreferencesName: "mySharedPrefs",
        keychainService: "myKeychain",
      }
    );
    if (showOnboardingBanner == "False") {
      yield put(userActions.hideOnboardingBannerSuccess({}));
    }
  } catch (error) {
  } finally {
  }
}

function* resendOTPSaga(action: any) {
  try {
    showLoading();
    const params = {
      email: action.payload.emailAddress,
      Type: !!action.payload.type ? "1" : "0",
    };
    const { data, error } = yield sendEmailVerify(params);
    if (data?.Status != 200) {
      throw data?.err;
    }
    yield put(
      notificationActions.pushNotification({
        type: AppNotificationType.Success,
        message: "Verification code was sent successfully",
      })
    );
  } catch (error) {
    yield put(
      notificationActions.pushNotification({
        type: AppNotificationType.Error,
        errorMessage: error + "",
      })
    );
  } finally {
    hideLoading();
  }
}

// function* deleteUserSaga(action: any) {
//   try {
//     const { data } = yield deleteUser({});
//     if (data) {
//       showAlert(TYPE.SUCCESS, "Success", "Delete account successfully!");
//       yield put(userActions.logout({}));
//       goback();
//     }
//   } catch (error) {}
// }

function* logoutSaga() {
  try {
    showLoading();
    SInfo.deleteItem("BearerToken", {
      sharedPreferencesName: "mySharedPrefs",
      keychainService: "myKeychain",
    });
    yield put(
      notificationActions.pushNotification({
        type: AppNotificationType.Success,
        message: "Logout successfully",
      })
    );
    yield put(userActions.logoutSuccess());
  } catch (error) {
    // Alert.alert("Logout failed");
  } finally {
    hideLoading();
  }
}
