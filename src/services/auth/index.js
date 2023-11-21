import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

import { authURL } from '../../constants/apiUrls';
import {authActions} from '../../store/slices/auth.slice';
import {users} from '../users';

export const auth = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: authURL,
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: '/',
        method: 'POST',
        body: data,
      }),
      onQueryStarted: async (args, api) => {
        try {
          const { data } = await api.queryFulfilled;
          api.dispatch(authActions.set(data));
          await api.dispatch(users.endpoints.getMe.initiate(null));
        } catch (error) {
          console.log(error.message);
        }
      },
    }),
  }),
});
export const { useLoginMutation } = auth;