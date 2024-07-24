import { createSelector, Selector } from "@reduxjs/toolkit";
import { RootState } from "reducer/index";
import { AppNotification } from "features/notifications/types";
// import { selectActiveAccountAddress } from "features/wallet/selectors";
import { EMPTY_ARRAY } from "constants/misc";

const selectNotificationQueue = (state: RootState): AppNotification[] =>
  state.notificationReducer.notificationQueue;

export const selectActiveAccountNotifications = createSelector(
  selectNotificationQueue,
  //   selectActiveAccountAddress,
  (notificationQueue) => {
    // if (!address) return EMPTY_ARRAY;
    // If a notification doesn't have an address param assume it belongs to the active account
    return notificationQueue.filter((notif) => !notif.address);
  }
);

const selectNotificationStatus = (
  state: RootState
): {
  [userAddress: string]: boolean | undefined;
} => state.notificationReducer.notificationStatus;

export const makeSelectHasNotifications = (
  address: Address | null
): Selector<RootState, boolean | undefined> =>
  createSelector(selectNotificationStatus, (notificationStatuses) => {
    if (!address) return undefined;
    return notificationStatuses?.[address];
  });

export const selectLastTxNotificationUpdate = (
  state: RootState
): {
  [address: string]: number | undefined;
} => state.notificationReducer.lastTxNotificationUpdate;
