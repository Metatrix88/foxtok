import { createSlice } from '@reduxjs/toolkit';

import { INITIAL_STATE } from '../../constants/initialState';

const authSlice = createSlice({
  name: 'auth',
  initialState: INITIAL_STATE.auth,
  reducers: {
    set: (state, { payload }) => payload,
    reset: () => INITIAL_STATE.auth,
  },
});

export const authActions = authSlice.actions
export const authReducer = authSlice.reducer;