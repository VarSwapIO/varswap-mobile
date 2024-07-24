import { useColorScheme } from "react-native";
import { useAppSelector } from "app/hooks";
import { AppearanceSettingType } from "reducer/appearanceReducer";

export function useCurrentAppearanceSetting(): AppearanceSettingType {
  const { selectedAppearanceSettings } = useAppSelector(
    (state) => state.appearanceReducer
  );
  return selectedAppearanceSettings;
}

export function useSelectedColorScheme(): "light" | "dark" {
  const currentAppearanceSetting = useCurrentAppearanceSetting();
  const isDarkMode = useColorScheme() === "dark";

  if (currentAppearanceSetting !== AppearanceSettingType.System) {
    return currentAppearanceSetting === AppearanceSettingType.Dark
      ? "dark"
      : "light";
  }

  const systemTheme = isDarkMode ? "dark" : "light";
  return systemTheme;
}

export function useIsDarkMode(): boolean {
  // const selectedColorScheme = useSelectedColorScheme();
  // return selectedColorScheme === 'dark';
  return true;
}
