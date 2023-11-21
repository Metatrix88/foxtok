import { createSlice } from '@reduxjs/toolkit';

import { INITIAL_STATE } from '../../constants/initialState';

const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE.user,
  reducers: {
    set: (state, { payload }) => payload,
    reset: () => INITIAL_STATE.user,
  },
});

export const userActions = userSlice.actions
export const userReducer = userSlice.reducer;