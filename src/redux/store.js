import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { combineReducers } from "redux";

import { authApi } from "./api/authApi";
import { userApi } from "./api/userApi";
import { userManagementApi } from "./api/userManagementApi";
import { propertyManagementApi } from "./api/propertyManagementApi";
import { featureManagementApi } from "./api/featureManagementApi";
import { analyticsApi } from "./api/analyticsApi";
import { tokenManagementApi } from "./api/tokenManagementApi";
import { paymentsApi } from "./api/paymnetsApi";

import userManagementReducer from "./features/userManagementSlice";
import propertyManagementReducer from "./features/propertyManagementSlice";
import userReducer from "./features/userSlice";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import { toast } from "react-toastify";
import { CustomErrorMessage } from "../utils/CustomErrorMessage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: [
    "userState",
    "userManagement",
    "propertyManagement",
    "featureManagement",
    "analyticsApi",
    "tokenManagementApi",
    "paymentsApi",
    userManagementApi.reducerPath,
    propertyManagementApi.reducerPath,
    featureManagementApi.reducerPath,
    analyticsApi.reducerPath,
    tokenManagementApi.reducerPath,
    paymentsApi.reducerPath,
  ], 
};

const rootReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
  [userManagementApi.reducerPath]: userManagementApi.reducer,
  [propertyManagementApi.reducerPath]: propertyManagementApi.reducer,
  [featureManagementApi.reducerPath]: featureManagementApi.reducer,
  [analyticsApi.reducerPath]: analyticsApi.reducer,
  [tokenManagementApi.reducerPath]: tokenManagementApi.reducer,
  [paymentsApi.reducerPath]: paymentsApi.reducer,
  userState: userReducer,
  userManagement: userManagementReducer,
  propertyManagement: propertyManagementReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Toast notifications middleware
const toastNotificationsMiddleware = (storeAPI) => (next) => (action) => {
  if (action.type.endsWith("/fulfilled")) {
    toast.success("Operation successful!");
  }
  if (action.type.endsWith("/rejected")) {
    const errorMessage = CustomErrorMessage(action.error); // Using the utility
    toast.error(errorMessage);
  }
  return next(action);
};

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV === "development",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"],
        ignoredPaths: ["register"],
      },
    }).concat([
      authApi.middleware,
      userApi.middleware,
      userManagementApi.middleware,
      propertyManagementApi.middleware,
      featureManagementApi.middleware,
      analyticsApi.middleware,
      tokenManagementApi.middleware,
      paymentsApi.middleware,
      toastNotificationsMiddleware,
    ]),
});

let persistor = persistStore(store);

const useAppDispatch = () => useDispatch();
const useAppSelector = useSelector;

export { store, persistor, useAppDispatch, useAppSelector };
