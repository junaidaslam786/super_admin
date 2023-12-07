import { createApi } from "@reduxjs/toolkit/query/react";
import customFetchBase from "./customFetchBase";


const getDefaultDates = () => {
  const currentDate = new Date();
  const firstDayOfYear = new Date(currentDate.getFullYear(), 0, 1); // January is 0 in JavaScript Date

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  return {
    startDate: formatDate(firstDayOfYear),
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
          url: "/superadmin/analytics/users",
          method: "GET",
          credentials: "include",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
    }),
    getAllTokensDetails: builder.query({
      query: () => {
        const token = localStorage.getItem("token");
        return {
          url: "/superadmin/analytics/tokens",
          method: "GET",
          credentials: "include",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
    }),
    getUserDataForReports: builder.query({
      query: (body) => {
        const token = localStorage.getItem("token");
        return {
          url: "/superadmin/reports/users",
          method: "POST",
          body: body,
          credentials: "include",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
    }),
    getPropertiesDataForReports: builder.query({
      query: (body) => {
        const token = localStorage.getItem("token");
        return {
          url: "/superadmin/reports/properties",
          method: "POST",
          body: body,
          credentials: "include",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
    }),
    getServicesDataForReports: builder.query({
      query: (body) => {
        const token = localStorage.getItem("token");
        return {
          url: "/superadmin/reports/services",
          method: "POST",
          body: body,
          credentials: "include",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
    }),
    getCustomersAnalytics: builder.query({
      query: () => {
        // const { startDate, endDate } = getDefaultDates();
        const token = localStorage.getItem('token');

        return {
          url: `/superadmin/analytics/customers`,
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
          url: "/superadmin/analytics/active-users",
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
          url: "/superadmin/analytics/non-active-users",
          method: "GET",
          credentials: "include",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
    }),
    getAllAgents: builder.query({
      query: () => {
        const token = localStorage.getItem("token");
        return {
          url: "/superadmin/analytics/agents",
          method: "GET",
          credentials: "include",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
    }),
    getAllPropertyAnalytics: builder.query({
      query: () =>{
        const token = localStorage.getItem("token")
        return {
          url: "/superadmin/analytics/properties-listed",
          method: "GET",
          credentials: "include",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      }
    }),
    getAllSoldProperties: builder.query({
      query: () =>{
        const token = localStorage.getItem("token")
        return {
          url: "/superadmin/analytics/properties-sold-rented",
          method: "GET",
          credentials: "include",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      }
    }),
  }),
});

const {
  useGetUsersAnalyticsQuery,
  useGetActiveUsersAnalyticsQuery,
  useGetNonActiveUsersAnalyticsQuery,
  useGetCustomersAnalyticsQuery,
  useGetAllTokensDetailsQuery,
  useGetAllAgentsQuery,
  useGetAllPropertyAnalyticsQuery,
  useGetAllSoldPropertiesQuery,
  useGetUserDataForReportsQuery,
  useGetPropertiesDataForReportsQuery,
  useGetServicesDataForReportsQuery,
} = analyticsApi;

export {
  analyticsApi,
  useGetUsersAnalyticsQuery,
  useGetActiveUsersAnalyticsQuery,
  useGetNonActiveUsersAnalyticsQuery,
  useGetCustomersAnalyticsQuery,
  useGetAllTokensDetailsQuery,
  useGetAllAgentsQuery,
  useGetAllPropertyAnalyticsQuery, 
  useGetAllSoldPropertiesQuery,
  useGetUserDataForReportsQuery,
  useGetPropertiesDataForReportsQuery,
  useGetServicesDataForReportsQuery,
};
