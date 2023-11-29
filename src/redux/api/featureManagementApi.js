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
      invalidatesTags: [{ type: "FeatureManagement", id: "List" }],
    }),
    getAllFeature: builder.query({
      query: () => {
        const token = localStorage.getItem("token");
        return {
          url: "superadmin/feature/list-all",
          credentials: "include",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
      providesTags: [{ type: "FeatureManagement", id: "List" }],
      onSuccess: (data, arg, thunkAPI) => {
        thunkAPI.dispatch(setFeatures(data));
      },
    }),
    updateTokensForFeature: builder.mutation({
      query: ({ id, data }) => { // Corrected to include `data` as a parameter
        const token = localStorage.getItem("token");
        return {
          url: `/superadmin/feature/${id}`,
          method: "PUT",
          body: data,
          credentials: "include",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        };
      },
    }),
    getFeatureById: builder.query({
      query: (featureId) => {
        const token = localStorage.getItem('token');
        return {
          url: `/superadmin/feature/${featureId}`,
          credentials: 'include',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
      providesTags: (result, error, featureId) => [{ type: 'FeatureManagement', id: featureId }],
    }),

    

  }),
});

const {
  useCreateFeatureMutation,
  useGetAllFeatureQuery,
  useUpdateTokensForFeatureMutation,
  useGetFeatureByIdQuery
} = featureManagementApi;
export {
  featureManagementApi,
  useCreateFeatureMutation,
  useGetAllFeatureQuery,
  useUpdateTokensForFeatureMutation,
  useGetFeatureByIdQuery,
};
