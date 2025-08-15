import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQueryWithAuth } from '../../services/baseQueryWithAuth'

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: baseQueryWithAuth, 
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: 'login',
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
})


export const { useLoginMutation } = authApi