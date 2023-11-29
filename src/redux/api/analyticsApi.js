import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import customFetchBase from './customFetchBase';

const analyticsApi = createApi({
  reducerPath: 'analyticsApi',
  baseQuery: customFetchBase,
  tagTypes: ['AnalyticsApi'],
  endpoints: (builder) => ({
    getUsersAnalytics: builder.query({
      query: () => '/superadmin/analytics/users',
    }),
    getActiveUsersAnalytics: builder.query({
      query: () => '/superadmin/analytics/active-users',
    }),
    getNonActiveUsersAnalytics: builder.query({
      query: () => '/superadmin/analytics/non-active-users',
    }),
  }),
});

const {
  useGetUsersAnalyticsQuery,
  useGetActiveUsersAnalyticsQuery,
  useGetNonActiveUsersAnalyticsQuery,
} = analyticsApi;

export {
  analyticsApi,
  useGetUsersAnalyticsQuery,
  useGetActiveUsersAnalyticsQuery,
  useGetNonActiveUsersAnalyticsQuery,
};

