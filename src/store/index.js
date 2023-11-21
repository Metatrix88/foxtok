import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist'

import { rootReducer } from './slices';
import { posts } from '../services/posts';
import { auth } from '../services/auth';
import { users } from '../services/users';

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }).concat([auth.middleware, users.middleware, posts.middleware]),
});

export const persistor = persistStore(store)