/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { StrictMode, useEffect } from "react";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  GestureHandlerRootView,
  gestureHandlerRootHOC,
} from "react-native-gesture-handler";
import { Provider, useDispatch } from "react-redux";
import * as SplashScreen from "expo-splash-screen";

import MainNavigator from "app/navigation/MainNavigator";
import { NavigationContainer } from "app/navigation/NavigationContainer";
// import {BiometricContextProvider} from 'features/biometrics/context';
import store from "store/index";
import { DynamicThemeProvider } from "styles/DynamicThemeProvider";
import { AppModals } from "app/modals/AppModals";
// import { Trace } from "components/telemetry/Trace";
import { useIsDarkMode } from "features/appearance/hooks";
import { Loading } from "components/loading/ActivityIndicator";
import { NotificationToastWrapper } from "features/notifications/NotificationToastWrapper";
// import { registerNotification } from "features/notifications/service";
import { userActions } from "reducer/userReducer";
import { useTimeout } from "utils/timing";
// import {LockScreenContextProvider} from 'features/authentication/lockScreenContext';

SplashScreen.preventAutoHideAsync();

function NavStack({ isDarkMode }: { isDarkMode: boolean }): JSX.Element {
  return (
    <NavigationContainer
      onReady={(navigationRef): void => {
        // routingInstrumentation.registerNavigationContainer(navigationRef);
      }}
    >
      {/* <OfflineBanner /> */}
      <NotificationToastWrapper />
      <MainNavigator />
      {/* <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} /> */}
    </NavigationContainer>
  );
}

function AppInner(): JSX.Element {
  const isDarkMode = useIsDarkMode();
  const dispatch = useDispatch();
  dispatch(userActions.getUser({}));

  useTimeout(async () => await SplashScreen.hideAsync(), 1500);
  return <NavStack isDarkMode={isDarkMode} />;
}

const App = () => {
  useEffect(() => {
    // registerNotification();
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StrictMode>
        <SafeAreaProvider>
          <Provider store={store}>
            <DynamicThemeProvider>
              {/* <BiometricContextProvider>
                <LockScreenContextProvider> */}
              <BottomSheetModalProvider>
                <AppModals />
                <AppInner />
                <Loading />
              </BottomSheetModalProvider>
              {/* </LockScreenContextProvider>
              </BiometricContextProvider> */}
            </DynamicThemeProvider>
          </Provider>
        </SafeAreaProvider>
      </StrictMode>
    </GestureHandlerRootView>
  );
};

export default gestureHandlerRootHOC(App);
