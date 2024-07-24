import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum AppearanceSettingType {
  System = "system",
  Light = "light",
  Dark = "dark",
}

export interface AppearanceSettingsState {
  selectedAppearanceSettings: AppearanceSettingType;
}

export const initialAppearanceSettingsState: AppearanceSettingsState = {
  selectedAppearanceSettings: AppearanceSettingType.System,
};

const appearanceSlice = createSlice({
  name: "appearanceSlice",
  initialState: initialAppearanceSettingsState,
  reducers: {
    setSelectedAppearanceSettings: (
      state,
      action: PayloadAction<AppearanceSettingType>
    ) => {
      state.selectedAppearanceSettings = action.payload;
    },
    resetSettings: () => initialAppearanceSettingsState,
  },
});

export const appearanceActions = appearanceSlice.actions;
export const appearanceReducer = appearanceSlice.reducer;
