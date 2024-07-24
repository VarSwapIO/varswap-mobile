import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ModalName } from "features/telemetry/constants";
import { ScannerModalState } from "components/QRCodeScanner/constants";
import { getKeys } from "utils/objects";
import { RootState } from "reducer/index";

export interface AppModalState<T> {
  isOpen: boolean;
  initialState?: T;
}

export interface TransactionState {
  txId?: string;
  // [CurrencyField.INPUT]: TradeableAsset | null
  // [CurrencyField.OUTPUT]: TradeableAsset | null
  // exactCurrencyField: CurrencyField
  exactAmountToken: string;
  exactAmountUSD?: string;
  // focusOnCurrencyField?: CurrencyField | null
  recipient?: string;
  isUSDInput?: boolean;
  // selectingCurrencyField?: CurrencyField
  showRecipientSelector?: boolean;
  customSlippageTolerance?: number;
}

interface CommonState {
  collectionName: string;
  projectLogo: string;
  title?: string;
  onPress: () => Promise<void>;
}

interface ChooseNetworkState {
  id: number;
}

interface ChooseWithdrawNetworkState {
  id: number;
}

interface ChooseMethodWithdrawState {
  symbol: string;
  logo: string;
  id: number;
}

type AccountSwitcherModalParams = {
  name: ModalName.AccountSwitcher;
  initialState?: undefined;
};

type ExperimentsModalParams = {
  name: ModalName.Experiments;
  initialState?: undefined;
};

type ExploreModalParams = { name: ModalName.Explore; initialState?: undefined };

type FiatOnRampModalParams = {
  name: ModalName.FiatOnRamp;
  initialState?: undefined;
};

type WalletConnectModalParams = {
  name: ModalName.WalletConnectScan;
  initialState: ScannerModalState;
};
type SwapModalParams = {
  name: ModalName.Swap;
  initialState?: TransactionState;
};

type SendModalParams = {
  name: ModalName.Send;
  initialState?: TransactionState;
};

type LoginModalParams = {
  name: ModalName.Login;
  initialState?: undefined;
};

type CommonModalParams = {
  name: ModalName.Common;
  initialState?: CommonState;
};

type ChoooseNetworkModalParams = {
  name: ModalName.ChooseNetwork;
  initialState?: ChooseNetworkState;
};

type ChoooseWithdrawNetworkModalParams = {
  name: ModalName.ChooseWithdrawNetwork;
  initialState?: ChooseWithdrawNetworkState;
};

type ChoooseMethodWithdrawModalParams = {
  name: ModalName.ChooseMethodWithdraw;
  initialState?: ChooseMethodWithdrawState;
};

type AuthenticatorPasscodeModalParams = {
  name: ModalName.AuthenticatorPasscode;
  initialState?: undefined;
};

export type OpenModalParams =
  | AccountSwitcherModalParams
  | ExperimentsModalParams
  | ExploreModalParams
  | FiatOnRampModalParams
  | LoginModalParams
  | SendModalParams
  | SwapModalParams
  | WalletConnectModalParams
  | CommonModalParams
  | ChoooseNetworkModalParams
  | AuthenticatorPasscodeModalParams
  | ChoooseWithdrawNetworkModalParams
  | ChoooseMethodWithdrawModalParams;

export interface ModalsState {
  [ModalName.AccountSwitcher]: AppModalState<undefined>;
  [ModalName.Experiments]: AppModalState<undefined>;
  [ModalName.Explore]: AppModalState<undefined>;
  [ModalName.FiatOnRamp]: AppModalState<undefined>;
  [ModalName.Login]: AppModalState<undefined>;
  [ModalName.Send]: AppModalState<TransactionState>;
  [ModalName.Swap]: AppModalState<TransactionState>;
  [ModalName.WalletConnectScan]: AppModalState<ScannerModalState>;
  [ModalName.Common]: AppModalState<CommonState>;
  [ModalName.ChooseNetwork]: AppModalState<ChooseNetworkState>;
  [ModalName.ChooseWithdrawNetwork]: AppModalState<ChooseWithdrawNetworkState>;
  [ModalName.AuthenticatorPasscode]: AppModalState<undefined>;
  [ModalName.ChooseMethodWithdraw]: AppModalState<ChooseMethodWithdrawState>;
}

const initialState: ModalsState = {
  [ModalName.FiatOnRamp]: {
    isOpen: false,
    initialState: undefined,
  },
  [ModalName.WalletConnectScan]: {
    isOpen: false,
    initialState: ScannerModalState.ScanQr,
  },
  [ModalName.Swap]: {
    isOpen: false,
    initialState: undefined,
  },
  [ModalName.Send]: {
    isOpen: false,
    initialState: undefined,
  },
  [ModalName.Experiments]: {
    isOpen: false,
    initialState: undefined,
  },
  [ModalName.Explore]: {
    isOpen: false,
    initialState: undefined,
  },
  [ModalName.AccountSwitcher]: {
    isOpen: false,
    initialState: undefined,
  },
  [ModalName.Login]: {
    isOpen: false,
    initialState: undefined,
  },
  [ModalName.Common]: {
    isOpen: false,
    initialState: undefined,
  },
  [ModalName.ChooseNetwork]: {
    isOpen: false,
    initialState: undefined,
  },
  [ModalName.ChooseWithdrawNetwork]: {
    isOpen: false,
    initialState: undefined,
  },
  [ModalName.ChooseMethodWithdraw]: {
    isOpen: false,
    initialState: undefined,
  },
  [ModalName.AuthenticatorPasscode]: {
    isOpen: false,
    initialState: undefined,
  },
};

const modalsSlice = createSlice({
  name: "modalsSlice",
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<OpenModalParams>) => {
      const { name, initialState } = action.payload;
      state[name].isOpen = true;
      state[name].initialState = initialState;
    },
    closeModal: (state, action: PayloadAction<{ name: keyof ModalsState }>) => {
      const { name } = action.payload;
      state[name].isOpen = false;
      state[name].initialState = undefined;
    },
    closeAllModals: (state) => {
      getKeys(state).forEach((modalName) => {
        state[modalName].isOpen = false;
        state[modalName].initialState = undefined;
      });
    },
  },
});

export function selectModalState<T extends keyof ModalsState>(
  name: T
): (state: RootState) => ModalsState[T] {
  return (state) => state.modalsReducer[name];
}

export function selectSomeModalOpen(state: RootState): boolean {
  return Object.values(state.modalsReducer).some(
    (modalState) => modalState.isOpen
  );
}

export const modalsActions = modalsSlice.actions;
export const modalsReducer = modalsSlice.reducer;
