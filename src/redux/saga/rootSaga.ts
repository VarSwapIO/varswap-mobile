import { all } from "redux-saga/effects";
import userSaga from "./userSaga";
import depositSaga from "./depositSaga";
import systemSaga from "./systemSaga";

// import walletSaga from './walletSaga';
// import notiSaga from './notiSaga';
// import networkSaga from './networkSaga';
// import cartSaga from './cartSaga';

export default function* rootSaga() {
  yield all([
    // ...walletSaga,
    ...depositSaga,
    ...userSaga,
    ...systemSaga,

    // ...notiSaga,
    // ...networkSaga,
    // ...cartSaga,
    // ...suiWalletSaga,
    // ...suiUserSaga,
    // ...suiNotiSaga,
  ]);
}
