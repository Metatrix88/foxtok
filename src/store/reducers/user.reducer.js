import { createReducer } from '@reduxjs/toolkit';

import { INITIAL_STATE } from '../../constants/initialState';
import { setUser } from '../actions';

export const userReducer = createReducer(INITIAL_STATE.user, {
  [setUser]: (state, action) => action.payload,
});