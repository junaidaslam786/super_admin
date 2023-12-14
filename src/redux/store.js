import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { combineReducers } from 'redux';

// Import your API slices
import { authApi } from "./api/authApi";
import { userApi } from "./api/userApi";
import { userManagementApi } from "./api/userManagementApi";
import { propertyManagementApi } from "./api/propertyManagementApi";
import { featureManagementApi } from "./api/featureManagementApi";
import { analyticsApi } from "./api/analyticsApi";
import { tokenManagementApi } from "./api/tokenManagementApi";
import { paymentsApi } from "./api/paymnetsApi"; 
import { communityApi } from './api/communityApi';

// Import your reducers
import userManagementReducer from './features/userManagementSlice';
import propertyManagementReducer from './features/propertyManagementSlice';
import userReducer from './features/userSlice';

// Redux Persist
import {  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Toast notifications
import { toast } from 'react-toastify';
import { CustomErrorMessage } from '../utils/CustomErrorMessage';

//middleware
// import { localStorageMiddleware, reHydrateStore } from '../middleware/localStorageMiddleware'

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: [
    'userState',
    // "userManagement",
    // "propertyManagement",
    // "featureManagement",
    // "analyticsApi",
    // "tokenManagementApi",
    // "paymentsApi",
    // "communityApi",
    // userManagementApi.reducerPath,
    // propertyManagementApi.reducerPath,
    // // featureManagementApi.reducerPath,
    // // analyticsApi.reducerPath,
    // tokenManagementApi.reducerPath,
    // paymentsApi.reducerPath,
    // communityApi.reducerPath,
  ],
};

const rootReducer = combineReducers({
  // Add your reducers
  [authApi.reducerPath]: authApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
  [userManagementApi.reducerPath]: userManagementApi.reducer,
  [propertyManagementApi.reducerPath]: propertyManagementApi.reducer,
  [featureManagementApi.reducerPath]: featureManagementApi.reducer,
  [analyticsApi.reducerPath]: analyticsApi.reducer,
  [tokenManagementApi.reducerPath]: tokenManagementApi.reducer,
  [paymentsApi.reducerPath]: paymentsApi.reducer,
  [communityApi.reducerPath]: communityApi.reducer,
  userState: userReducer,
  userManagement: userManagementReducer,
  propertyManagement: propertyManagementReducer,
  featureManagement: featureManagementApi.reducer,
  analyticsApi: analyticsApi.reducer,
  // other reducers
});

// Toast notifications middleware
const toastNotificationsMiddleware = (storeAPI) => (next) => (action) => {
  if (action.type.endsWith('/fulfilled')) {
    toast.success('Operation successful!');
  }
  if (action.type.endsWith('/rejected')) {
    // Check if the action payload contains a specific message
    const message = action.error?.data?.message || action.error?.message;
    const errorMessage = message || 'An error occurred';
    toast.error(errorMessage);
  }
  return next(action);
};


const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
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
      communityApi.middleware,
      toastNotificationsMiddleware,
    ]),
});



let persistor = persistStore(store);



const useAppDispatch = () => useDispatch();
const useAppSelector = useSelector;

export { store, persistor, useAppSelector, useAppDispatch };
