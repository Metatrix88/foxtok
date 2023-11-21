import { combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';

import { persistReducer } from 'redux-persist';
import { authReducer } from './auth.slice';
import { userReducer } from './user.slice';
import { auth } from '../../services/auth';
import { users } from '../../services/users';
import {  posts } from '../../services/posts';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: [ auth.reducerPath, users.reducerPath, posts.reducerPath],
};

export const rootReducer = persistReducer(persistConfig, combineReducers({
  [auth.reducerPath]: auth.reducer,
  [users.reducerPath]: users.reducer,
  [posts.reducerPath]: posts.reducer,
  auth: authReducer,
  user: userReducer,
}));