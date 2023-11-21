import { createReducer } from '@reduxjs/toolkit';

import { INITIAL_STATE } from '../../constants/initialState';
import { setAuthStatus } from '../actions';

export const authReducer = createReducer(INITIAL_STATE.auth, {
  [setAuthStatus]: (state, action) => ({ ...state, status: action.payload}),
});