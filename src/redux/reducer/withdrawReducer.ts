import { createSlice } from "@reduxjs/toolkit";

export interface TokenNetwork {
  Decimals: number;
  Id: number;
  MinimumDeposit: number;
  MinimumWithdraw: number;
  Name: string;
  NetworkId: number;
  NetworkName: string;
  Symbol: string;
  WithdrawFee: number;
  BlockConfirm?: number;
  EstimateArrival?: number;
}

interface WithdrawState {
  selectedTokenNetwork: TokenNetwork;
}

export const initialState: WithdrawState = {
  selectedTokenNetwork: {
    Decimals: 0,
    Id: 0,
    MinimumDeposit: 0,
    MinimumWithdraw: 0,
    Name: "",
    NetworkId: 0,
    NetworkName: "",
    Symbol: "",
    WithdrawFee: 0,
  },
};

const withdrawSlice = createSlice({
  name: "withdrawSlice",
  initialState,
  reducers: {
    selectNetworkTokensSuccess: (state, { payload }) => {
      state.selectedTokenNetwork = payload.selectedTokenNetwork;
    },
    removeData: (state) => {
      state.selectedTokenNetwork = initialState.selectedTokenNetwork;
    },
  },
});

export const withdrawActions = withdrawSlice.actions;
export const withdrawReducer = withdrawSlice.reducer;
