import { put, takeLatest } from "redux-saga/effects";

import { getDepositTokenAddress } from "api/index";
import { hideLoading, showLoading } from "components/loading/ActivityIndicator";
import { notificationActions } from "../reducer/notificationReducer";
import { AppNotificationType } from "features/notifications/types";
import { depositActions } from "../reducer/depositReducer";

export default [
  takeLatest(
    depositActions.getDepositTokensAddressRequest,
    getDepositAddressSaga
  ),
];

function* getDepositAddressSaga(action: any) {
  try {
    showLoading();
    const { data, error } = yield getDepositTokenAddress({
      network_id: action.payload.NetworkId,
    });
    if (data?.Status != 200) {
      throw data?.err;
    }
    yield put(
      depositActions.getDepositTokensAddressSuccess({
        depositAddress: data?.address,
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
