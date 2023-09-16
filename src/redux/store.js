import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { combineReducers } from "redux";

import { authApi } from "./api/authApi";
import { userApi } from "./api/userApi";
import { userManagementApi } from "./api/userManagementApi";
import { propertyManagementApi } from "./api/propertyManagementApi";



import userManagementReducer from "./features/userManagementSlice";
import proprtyManagementReducer from "./features/propertyManagementSlice";
import userReducer from "./features/userSlice";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import { toast } from "react-toastify";
import { CustomErrorMessage } from "../utils/CustomErrorMessage"; 

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["userState", "userManagement", "propertyManagement", userManagementApi.reducerPath, propertyManagementApi.reducerPath], // only userState will be persisted
};

const rootReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
  [userManagementApi.reducerPath]: userManagementApi.reducer,
  [propertyManagementApi.reducerPath]: propertyManagementApi.reducer,
  userState: userReducer,
  userManagement: userManagementReducer,
  propertyManagement: proprtyManagementReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Toast notifications middleware
const toastNotificationsMiddleware = storeAPI => next => action => {
  if (action.type.endsWith('/fulfilled')) {
      toast.success("Operation successful!");
  }
  if (action.type.endsWith('/rejected')) {
      const errorMessage = CustomErrorMessage(action.error);  // Using the utility
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
    }).concat([authApi.middleware, userApi.middleware, userManagementApi.middleware, propertyManagementApi.middleware, toastNotificationsMiddleware]),
});

let persistor = persistStore(store);

const useAppDispatch = () => useDispatch();
const useAppSelector = useSelector;

export { store, persistor, useAppDispatch, useAppSelector };
