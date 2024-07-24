import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SystemState {
  systemTokens?: {
    Id: number;
    Logo: string;
    Symbol: string;
    Name: string;
    Decimals: number;
  }[];
}

export const initialState: SystemState = {
  systemTokens: [],
};

const systemSlice = createSlice({
  name: "systemSlice",
  initialState,
  reducers: {
    getSystemTokensRequest: (state) => {},
    getSystemTokensSuccess: (state, { payload }) => {
      state.systemTokens = payload.systemTokens;
    },
  },
});

export const systemActions = systemSlice.actions;
export const systemReducer = systemSlice.reducer;
