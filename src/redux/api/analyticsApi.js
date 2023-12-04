import { createApi } from "@reduxjs/toolkit/query/react";
import customFetchBase from "./customFetchBase";


const getDefaultDates = () => {
  const currentDate = new Date();
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  return {
    startDate: formatDate(firstDayOfMonth),
    endDate: formatDate(currentDate)
  };
};

const analyticsApi = createApi({
  reducerPath: "analyticsApi",
  baseQuery: customFetchBase,
  tagTypes: ["AnalyticsApi"],
  endpoints: (builder) => ({
    getUsersAnalytics: builder.query({
      query: () => {
        const token = localStorage.getItem("token");
        return {
          URL: "/superadmin/analytics/users",
          method: "GET",
          credentials: "include",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
    }),
    getCustomersAnalytics: builder.query({
      query: () => {
        const { startDate, endDate } = getDefaultDates();
        const token = localStorage.getItem('token');

        return {
          URL: `/superadmin/analytics/customers?startDate=${startDate}&endDate=${endDate}`,
          method: 'GET',
          credentials: 'include',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
    }),
    getActiveUsersAnalytics: builder.query({
      query: () => {
        const token = localStorage.getItem("token");
        return {
          URL: "/superadmin/analytics/active-users",
          method: "GET",
          credentials: "include",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
    }),
    getNonActiveUsersAnalytics: builder.query({
      query: () => {
        const token = localStorage.getItem("token");
        return {
          URL: "/superadmin/analytics/non-active-users",
          method: "GET",
          credentials: "include",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
    }),
  }),
});

const {
  useGetUsersAnalyticsQuery,
  useGetActiveUsersAnalyticsQuery,
  useGetNonActiveUsersAnalyticsQuery,
  useGetCustomersAnalyticsQuery
} = analyticsApi;

export {
  analyticsApi,
  useGetUsersAnalyticsQuery,
  useGetActiveUsersAnalyticsQuery,
  useGetNonActiveUsersAnalyticsQuery,
  useGetCustomersAnalyticsQuery
};
