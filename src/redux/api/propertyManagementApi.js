import { createApi } from "@reduxjs/toolkit/query/react";
import customFetchBase from "./customFetchBase";
import { setProperties } from "../features/propertyManagementSlice";

const propertyManagementApi = createApi({
  reducerPath: "propertyManagementApi",
  baseQuery: customFetchBase,
  tagTypes: ["PropertyManagement"],
  endpoints: (builder) => ({
    getAllProperties: builder.query({
      query: (page = 1) => {
        const token = localStorage.getItem("token");
        return {
          url: `superadmin/property/list?page=${page}`,
          credentials: "include",
          header: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
      onSuccess: (data, arg, thunkAPI) => {
        thunkAPI.dispatch(setProperties(data));
      },
    }),
  }),
});

const { useGetAllPropertiesQuery } = propertyManagementApi;

export { propertyManagementApi, useGetAllPropertiesQuery };
