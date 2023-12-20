import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/authSlice';
import { reviewsApi } from 'services/reviewsApi';
import { newsApi } from 'services/newsApi'; // Import the 'api' object from your 'newsApi' file
import reviewsSlice from './reviews/reviewSlice';
import { storeCalcDataReducer } from './calculator/storeCalculatorForm';
import { transactionsApi } from 'services/transactionsApi';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const storeCalcFormConfig = { key: 'storeCalcForm', storage };

const middleware = getDefaultMiddleware => [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }).concat(reviewsApi.middleware, transactionsApi.middleware, newsApi.middleware),
];

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    [reviewsApi.reducerPath]: reviewsApi.reducer,
    reviews: reviewsSlice,
    [transactionsApi.reducerPath]: transactionsApi.reducer,
    [newsApi.reducerPath]: newsApi.reducer,
    calcData: persistReducer(storeCalcFormConfig, storeCalcDataReducer),
  },
  middleware,
});
export const persistor = persistStore(store);
