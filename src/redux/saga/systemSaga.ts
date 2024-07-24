import { put, takeLatest } from "redux-saga/effects";
import SInfo from "react-native-sensitive-info";

// import FAxios from "api/FAxios";

import { systemActions } from "reducer/systemReducer";
import { getListSystemTokens } from "api/index";
import { hideLoading, showLoading } from "components/loading/ActivityIndicator";
import { notificationActions } from "../reducer/notificationReducer";
import { AppNotificationType } from "features/notifications/types";
import { depositActions } from "../reducer/depositReducer";

export default [
  takeLatest(systemActions.getSystemTokensRequest, getSystemTokensSaga),
];

function* getSystemTokensSaga() {
  try {
    showLoading();
    const { data, error } = yield getListSystemTokens();
    if (data?.Status != 200) {
      throw data?.err;
    }
    yield put(
      systemActions.getSystemTokensSuccess({ systemTokens: data?.SystemTokens })
    );
  } catch (error) {
  } finally {
    hideLoading();
  }
}
