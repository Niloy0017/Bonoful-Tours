import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authslice from "./reduxslices/authslice";
import cartslice from "./reduxslices/cartslice"
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import orderslice from './reduxslices/orderslice';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  auth: authslice ,
  cart : cartslice ,
  orde : orderslice
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);