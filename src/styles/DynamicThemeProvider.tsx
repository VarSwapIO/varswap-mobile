import { ThemeProvider } from "@shopify/restyle";
import React, {
  PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Appearance, ColorSchemeName } from "react-native";
// import {useAppSelector} from 'app/hooks';
// import {selectUserPalette} from 'features/wallet/selectors';
import { darkTheme, theme as lightTheme, Theme } from "./theme";
import { AppearanceSettingType } from "reducer/appearanceReducer";
// import {useCurrentAppearanceSetting} from 'features/appearance/hooks';

const COLOR_SCHEME_FLICKER_DELAY_MS = 250;

/** Provides app theme based on active account */
// TODO: [MOB-3922] add back dynamic theming aspect, probably based on Unicon gradient start / end
export function DynamicThemeProvider({
  children,
}: PropsWithChildren<unknown>): JSX.Element {
  const isSystemDarkMode = useColorScheme() === "dark";
  const systemTheme = isSystemDarkMode ? darkTheme : lightTheme;

  // const currentAppearanceSetting = useCurrentAppearanceSetting();
  const currentAppearanceSetting = AppearanceSettingType.Dark;

  const selectedTheme =
    currentAppearanceSetting === AppearanceSettingType.Dark
      ? darkTheme
      : lightTheme;

  // const userPalette = useAppSelector(selectUserPalette);
  const baseTheme = selectedTheme;
  // currentAppearanceSetting !== AppearanceSettingType.System
  //   ? selectedTheme
  //   : systemTheme;

  const theme: Theme = useMemo(
    () => ({
      ...baseTheme,
      colors: {
        ...baseTheme.colors,
        userThemeColor:
          // userPalette?.userThemeColor ?? baseTheme.colors.userThemeColor,
          baseTheme.colors.primary,
      },
    }),
    [baseTheme]
  );

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

/**
 * Custom useColorScheme hook to determine the app's color scheme.
 * Borrowed from https://github.com/facebook/react-native/issues/28525 due to a react-native bug. This workaround debounces the initial color scheme flicker.
 */
function useColorScheme(): ColorSchemeName {
  const [colorScheme, setColorScheme] = useState(Appearance.getColorScheme());
  const timeout = useRef<NodeJS.Timeout>();

  const resetCurrentTimeout = useCallback(() => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
  }, []);

  const onColorSchemeChange = useCallback(
    (preferences: Appearance.AppearancePreferences) => {
      resetCurrentTimeout();

      timeout.current = setTimeout(() => {
        setColorScheme(preferences.colorScheme);
      }, COLOR_SCHEME_FLICKER_DELAY_MS);
    },
    [resetCurrentTimeout]
  );

  useEffect(() => {
    Appearance.addChangeListener(onColorSchemeChange);
    return (): void => {
      resetCurrentTimeout();
    };
  }, [onColorSchemeChange, resetCurrentTimeout]);

  return colorScheme;
}
