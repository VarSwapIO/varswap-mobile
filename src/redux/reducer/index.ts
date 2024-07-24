import { combineReducers } from "@reduxjs/toolkit";

// import {walletReducer} from './walletReducer';
import { modalsReducer } from "./modalsReducer";
import { appearanceReducer } from "./appearanceReducer";
import { userReducer } from "./userReducer";
import { systemReducer } from "./systemReducer";
import { depositReducer } from "./depositReducer";

import { notificationReducer } from "./notificationReducer";
import { withdrawReducer } from "./withdrawReducer";

export interface RootReducerModel {}

const allReducers = combineReducers({
  appearanceReducer,
  depositReducer,
  modalsReducer,
  notificationReducer,
  systemReducer,
  userReducer,
  withdrawReducer,
  // tokensReducer,
  // favoritesReducer,
  // transactionReducer,
  // walletConnectReducer,
  // biometricsReducer,
  // userReducer,
  // cartReducer,
  // networkReducer,
});

export type RootState = ReturnType<typeof allReducers>;
export default allReducers;
