import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";
import { StatusBar } from "react-native";

import { RootState } from "reducer/index";
import { OnboardingEntryPoint } from "features/onboarding/utils";
import {
  AppStackParamList,
  MainAppStackParamList,
  OnboardingStackParamList,
} from "app/navigation/types";
import { Screens } from "screens/Screens";
import Tabs from "screens/Tabs";
// import LoginSocialScreen from "screens/LoginSocialScreen";
import OnboardingScreen from "screens/OnboardingScreen";
// import LoginScreen from "screens/LoginScreen";
// import SignUpIntroScreen from "screens/SignUpIntroScreen";
// import SignUpScreen from "screens/SignUpScreen";
// import ConfirmEmailScreen from "screens/ConfirmEmailScreen";
// import ConfirmOTPScreen from "screens/ConfirmOTPScreen";
// import CreatePasswordScreen from "screens/CreatePasswordScreen";
// import SignUpOutroScreen from "screens/SignUpOutroScreen";
// import ResetPasswordScreen from "screens/ResetPasswordScreen";
// import SettingsScreen from "screens/SettingsScreen";
// import ProfileScreen from "screens/ProfileScreen";
// import DepositScreen from "screens/DepositScreen";
// import DepositDetailScreen from "screens/DepositDetailScreen";
// import WithdrawScreen from "screens/WithdrawScreen";
// import WithdrawDetailScreen from "screens/WithdrawDetailScreen";
// import NotificationsScreen from "screens/NotificationsScreen";
// import SecurityScreen from "screens/SecurityScreen";
// import AuthenticatorScreen from "screens/AuthenticatorScreen";
// import AuthenticatorConfirmOTPScreen from "screens/AuthenticatorConfirmOTPScreen";
// import AuthenticatorConfirmPasscodeScreen from "screens/AuthenticatorConfirmPasscodeScreen";
// import AuthenticatorQRGenerationScreen from "screens/AuthenticatorQRGenerationScreen";
// import TransactionHistoryScreen from "screens/TransactionHistoryScreen";

const AppStackNavigator = () => {
  const AppStack = createNativeStackNavigator<AppStackParamList>();

  return (
    <>
      <AppStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <AppStack.Screen name={Screens.Tabs} component={Tabs} />
      </AppStack.Navigator>
    </>
  );
};

const OnboardingStackNavigator = () => {
  const OnboardingStack =
    createNativeStackNavigator<OnboardingStackParamList>();
  const showOnboardingBanner = useSelector(
    (state: RootState) => state.userReducer.showOnboardingBanner
  );

  return (
    <>
      <StatusBar barStyle={"dark-content"} />
      <OnboardingStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {true && (
          <OnboardingStack.Screen
            name={Screens.OnboardingScreen}
            component={OnboardingScreen}
          />
        )}
        {/* {showOnboardingBanner && (
          <OnboardingStack.Screen
            name={Screens.OnboardingScreen}
            component={OnboardingScreen}
          />
        )} */}
      </OnboardingStack.Navigator>
    </>
  );
};

export function MainAppStackNavigator(): JSX.Element {
  const MainAppStack = createNativeStackNavigator<MainAppStackParamList>();
  const finishedOnboarding = useSelector(
    (state: RootState) => state.userReducer.finishedOnboarding
  );

  return (
    <MainAppStack.Navigator
      screenOptions={{
        headerShown: false,
        fullScreenGestureEnabled: true,
        gestureEnabled: true,
        animation: "slide_from_right",
      }}
    >
      {/* {finishedOnboarding && (
        <MainAppStack.Screen
          component={AppStackNavigator}
          name={Screens.AppStack}
        />
      )} */}
      <MainAppStack.Screen
        component={OnboardingStackNavigator}
        name={Screens.OnboardingStack}
        navigationKey={
          finishedOnboarding
            ? OnboardingEntryPoint.Sidebar.valueOf()
            : OnboardingEntryPoint.FreshInstallOrReplace.valueOf()
        }
      />
    </MainAppStack.Navigator>
  );
}

const MainNavigator = () => {
  return <MainAppStackNavigator />;
};

export default MainNavigator;
