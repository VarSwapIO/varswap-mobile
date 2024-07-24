import { useFocusEffect } from "@react-navigation/core";
import { useState } from "react";
import messaging from "@react-native-firebase/messaging";

import { useAppSelector } from "app/hooks";
import { makeSelectHasNotifications } from "features/notifications/selectors";
import { useAppStateTrigger } from "utils/useAppStateTrigger";
import { hideLoading, showLoading } from "components/loading/ActivityIndicator";
import { AppDispatch } from "store/index";
import { notificationActions } from "reducer/notificationReducer";
import { AppNotificationType } from "features/notifications/types";
import {
  registerDeviceToken,
  getNotificationsList,
  getMarkReadAll,
} from "api/index";

export enum NotificationPermission {
  Enabled = "enabled",
  Disabled = "disabled",
  Loading = "loading",
}

export function useSelectAddressHasNotifications(
  address: Address | null
): boolean | undefined {
  return useAppSelector(makeSelectHasNotifications(address));
}

export function useNotificationOSPermissionsEnabled(): NotificationPermission {
  const [notificationPermissionsEnabled, setNotificationPermissionsEnabled] =
    useState<NotificationPermission>(NotificationPermission.Loading);
  useFocusEffect(() => {
    const checkNotificationPermissions = async (): Promise<void> => {
      //   const { status } = await checkNotifications();
      const status = "granted";
      const permission =
        status === "granted"
          ? NotificationPermission.Enabled
          : NotificationPermission.Disabled;
      setNotificationPermissionsEnabled(permission);
    };
    checkNotificationPermissions();
  });

  useAppStateTrigger("background", "active", () => {
    const checkNotificationPermissions = async (): Promise<void> => {
      //   const { status } = await checkNotifications();
      const status = "granted";
      const permission =
        status === "granted"
          ? NotificationPermission.Enabled
          : NotificationPermission.Disabled;
      setNotificationPermissionsEnabled(permission);
    };
    checkNotificationPermissions();
  });

  return notificationPermissionsEnabled;
}

export const useRegisterDeviceToken = async () => {
  try {
    const deviceToken = await messaging().getToken();
    const { data, error } = await registerDeviceToken({
      deviceToken,
    });
  } catch (error) {
  } finally {
  }
};

export const useGetNotificationsList = async (
  params: any,
  dispatch: AppDispatch
) => {
  try {
    showLoading();
    const { data, error } = await getNotificationsList(params);

    if (data?.Status != 200) {
      throw data?.err;
    }
    return data?.notifications;
  } catch (error) {
    dispatch(
      notificationActions.pushNotification({
        type: AppNotificationType.Error,
        errorMessage: error + "",
      })
    );
    return [];
  } finally {
    hideLoading();
  }
};

export const useMarkAsReadAll = async (dispatch: AppDispatch) => {
  try {
    showLoading();
    const { data, error } = await getMarkReadAll();
    if (data?.Status != 200) {
      throw data?.err;
    }
    return true;
  } catch (error) {
    dispatch(
      notificationActions.pushNotification({
        type: AppNotificationType.Error,
        errorMessage: error + "",
      })
    );
    return false;
  } finally {
    hideLoading();
  }
};
