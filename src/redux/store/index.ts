// import {createLogger} from 'redux-logger';
import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";

//Redux saga
import rootSaga from "saga/rootSaga";
import allReducers from "reducer/index";
//Middleware
const sagaMiddleware = createSagaMiddleware();
// const logger = createLogger({
//   ...options
// });

//Từ applyMiddleware vào Reducers thì tạo một store, sagaMiddleware nằm giữa Action và Reducers.
const IsEnableLogger = true;

let store = configureStore({
  reducer: allReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      sagaMiddleware
      // logger,
    ),
});

sagaMiddleware.run(rootSaga);
export type AppDispatch = typeof store.dispatch;
export default store;
