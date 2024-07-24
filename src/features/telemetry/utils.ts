import { RootParamList } from "app/navigation/types";
import { AuthMethod } from "features/telemetry/constants";
import { Screens, AppScreen } from "screens/Screens";

export function getAuthMethod(
  isSettingEnabled: boolean,
  isTouchIdSupported: boolean,
  isFaceIdSupported: boolean
): AuthMethod {
  if (!isSettingEnabled) return AuthMethod.None;

  // both cannot be true since no iOS device supports both
  if (isFaceIdSupported) return AuthMethod.FaceId;
  if (isTouchIdSupported) return AuthMethod.TouchId;

  return AuthMethod.None;
}

export function getEventParams(
  screen: AppScreen,
  params: RootParamList[AppScreen]
): Record<string, unknown> | undefined {
  switch (screen) {
    // case Screens.SettingsWallet:
    //   return {
    //     address: (params as RootParamList[Screens.SettingsWallet]).address,
    //   };
    // case Screens.SettingsWalletEdit:
    //   return {
    //     address: (params as RootParamList[Screens.SettingsWalletEdit]).address,
    //   };
    default:
      return undefined;
  }
}
