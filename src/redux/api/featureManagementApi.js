import { createApi } from "@reduxjs/toolkit/query/react";
import customFetchBase from "./customFetchBase";
import { setFeatures } from "../features/featureSlice";

const featureManagementApi = createApi({
  reducerPath: "featureManagementApi",
  baseQuery: customFetchBase,
  tagTypes: ["FeatureManagement"],
  endpoints: (builder) => ({
    createFeature: builder.mutation({
      query: (newFeature) => {
        const token = localStorage.getItem("token");
        return {
          url: "superadmin/feature/create",
          method: "POST",
          body: newFeature,
          credentials: "include",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        };
      },
      invalidatesTags: [{ type: "FeatureManagement", id: "List" }], // <-- Invalidate the cache for getAllFeature
    }),
    getAllFeature: builder.query({
      query: () => {
        const token = localStorage.getItem("token");
        return {
          url: "superadmin/feature/list-all",
          credentials: "include",
          header: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
      providesTags: [{ type: "FeatureManagement", id: "List" }], // <-- This tag represents the cached data for getAllFeature
      onSuccess: (data, arg, thunkAPI) => {
        thunkAPI.dispatch(setFeatures(data));
      },
    }),
  }),
});

const { useCreateFeatureMutation, useGetAllFeatureQuery } =
  featureManagementApi;
export {
  featureManagementApi,
  useCreateFeatureMutation,
  useGetAllFeatureQuery,
};
