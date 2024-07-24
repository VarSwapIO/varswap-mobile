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
  TokenAddress?: string;
  DepositBlockConfirm?: number;
  EstimateDepositTimeSecond?: number;
}

interface DepositState {
  selectedTokenNetwork: TokenNetwork;
  depositAddress: string;
}

export const initialState: DepositState = {
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
    TokenAddress: "",
    DepositBlockConfirm: 0,
    EstimateDepositTimeSecond: 0,
  },
  depositAddress: "",
};

const depositSlice = createSlice({
  name: "depositSlice",
  initialState,
  reducers: {
    selectNetworkTokensSuccess: (state, { payload }) => {
      state.selectedTokenNetwork = payload.selectedTokenNetwork;
    },
    getDepositTokensAddressRequest: (state, { payload }) => {},
    getDepositTokensAddressSuccess: (state, { payload }) => {
      state.depositAddress = payload.depositAddress;
    },
    removeData: (state) => {
      (state.selectedTokenNetwork = initialState.selectedTokenNetwork),
        (state.depositAddress = initialState.depositAddress);
    },
  },
});

export const depositActions = depositSlice.actions;
export const depositReducer = depositSlice.reducer;
