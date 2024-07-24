import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  finishedOnboarding: boolean;
  showOnboardingBanner: boolean;
  user?: {
    can_deposit: boolean;
    can_trade: boolean;
    can_withdraw: boolean;
    email: string;
    error: string;
    id: number;
    is_verified: boolean;
    pid: number;
    status: number;
    user_name: string;
    is_enable_2fa?: boolean;
  };
}

export const initialState: UserState = {
  finishedOnboarding: false,
  showOnboardingBanner: true,
  user: undefined,
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    loginRequest: (state, { payload }) => {},
    loginSuccess: (state) => {
      state.finishedOnboarding = true;
    },
    logoutRequest: (state) => {},
    logoutSuccess: (state) => {
      state.finishedOnboarding = false;
    },
    getUser: (state, { payload }) => {},
    getUserSuccess: (state, { payload }) => {
      state.finishedOnboarding = true;
      state.user = payload.user;
    },
    hideOnboardingBannerSuccess: (state, { payload }) => {
      state.showOnboardingBanner = false;
    },
    resendOTPRequest: (state, { payload }) => {},
  },
});

export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;
