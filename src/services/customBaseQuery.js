import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import {authActions} from '../store/slices/auth.slice';
import {userActions} from '../store/slices/user.slice';
import {refreshTokenURL} from '../constants/apiUrls';


const createBaseQuery = (baseUrl) => fetchBaseQuery({
  baseUrl,
  prepareHeaders: (headers, api) => {
    const state = api.getState();
    if (state.auth?.accessToken) {
      headers.set('authorization', state.auth?.accessToken);
    }
  }
});

const logout = (dispatch) => {
  dispatch(authActions.reset());
  dispatch(userActions.reset());
}

const refreshToken = async (state, dispatch) => {
  if (!state.auth?.refreshToken) {
    logout(dispatch);
    return;
  }
  const response = await fetch(refreshTokenURL, {
    method: 'POST',
    body: JSON.stringify({ refreshToken: state.auth?.refreshToken }),
    headers: {
      'Content-Type': 'application/json',
    }
  });
  if (response.status >= 400) {
    logout(dispatch);
    return;
  }
  const tokens = await response.json();
  dispatch(authActions.set(tokens));
}



export const createCustomBaseQuery = (baseUrl) => async (args, api, extraOptions) => {
  const baseQuery = createBaseQuery(baseUrl);
  let result = await baseQuery(args, api, extraOptions);
  if (result.error?.status === 401) {
    await refreshToken(api.getState(), api.dispatch);
    result = await baseQuery(args, api, extraOptions);
  }
  if (result.error) {
    logout(api.dispatch);
    return;
  }
  return result;
};
