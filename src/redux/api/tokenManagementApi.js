import { Token } from "@mui/icons-material";
import { createApi } from "@reduxjs/toolkit/query/react";
import customFetchBase from "./customFetchBase";

const tokenManagementApi = createApi({
  reducerPath: "tokenManagementApi",
  baseQuery: customFetchBase,
  tagTypes: ["TokenManagement"],
  endpoints: (builder) => ({
    getAllTokens: builder.query({
      query: () => {
        const token = localStorage.getItem("token");
        return {
          url: "superadmin/token/batches",
          credentials: "include",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
      // onSuccess: (data, arg, thunkAPI) => {
      //     thunkAPI.dispatch(setTokens(data));
      // },
    }),

    // getTokenById: builder.query({
    //     query: (id) => {
    //         const token = localStorage.getItem("token");
    //         return {
    //             url: `superadmin/token/${id}`,
    //             credentials: "include",
    //             headers: {
    //                 Authorization: `Bearer ${token}`,
    //             },
    //         };
    //     },
    // }),

    updateConfig: builder.mutation({
      query: (configData) => {
        const token = localStorage.getItem("token");
        return {
          url: `/superadmin/config/tokenPrice`,
          method: "PUT",
          body: configData,
          credentials: "include",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        };
      },
      // onSuccess: (data, arg, thunkAPI) => {
      //     thunkAPI.dispatch(updateToken(data));
      // },
    }),

    getConfig: builder.query({
      query: () => {
        const token = localStorage.getItem("token");
        return {
          url: `/superadmin/config/tokenPrice`,
          method: "GET",
          credentials: "include",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        };
      },
    }),

    // deleteToken: builder.mutation({
    //     query: (id) => {
    //         const token = localStorage.getItem("token");
    //         return {
    //             url: `superadmin/token/delete/${id}`,
    //             method: "DELETE",
    //             credentials: "include",
    //             headers: {
    //                 Authorization: `Bearer ${token}`,
    //             },
    //         };
    //     },
    //     onSuccess: (data, arg, thunkAPI) => {
    //         thunkAPI.dispatch(deleteToken(data));
    //     },
    // }),
  }),
});

const { useUpdateConfigMutation, useGetConfigQuery, useGetAllTokensQuery } =
  tokenManagementApi;
export {
  tokenManagementApi,
  useUpdateConfigMutation,
  useGetConfigQuery,
  useGetAllTokensQuery,
};
