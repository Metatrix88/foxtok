import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';
import { usersURL } from '../../constants/apiUrls';
import {userActions} from '../../store/slices/user.slice';
import {createCustomBaseQuery} from '../customBaseQuery';

export const users = createApi({
  reducerPath: 'usersApi',
  baseQuery: createCustomBaseQuery(usersURL),
  endpoints: (builder) => ({
    getMe: builder.mutation({
      query: () => ({
        url: '/me',
        method: 'GET',
      }),
      onQueryStarted: async (args, { queryFulfilled, dispatch }) => {
        try {
          const { data } = await queryFulfilled;
          dispatch(userActions.set(data));
        } catch (error) {
          console.log(error.message);
        }
      },
    }),
  }),
});
