import { createApi } from "@reduxjs/toolkit/query/react";
import customFetchBase from "./customFetchBase";

const propertyManagementApi = createApi({
  reducerPath: "propertyManagementApi",
  baseQuery: customFetchBase,
  tagTypes: ['Property'], // Changed to a more specific tag name
  endpoints: (builder) => ({
    getAllProperties: builder.query({
      query: () => {
        const token = localStorage.getItem("token");
        return {
          url: "superadmin/property/list-all",
          credentials: "include",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
      providesTags: ['Property'] // Tag the query
    }),
    
    addProperty: builder.mutation({
      query: (property) => {
        const token = localStorage.getItem("token");
        return {
          url: "superadmin/property/create",
          method: "POST",
          body: property,
          credentials: "include",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        };
      },
      invalidatesTags: ['Property'] // Invalidate the tag on success
    }),

    getPropertyById: builder.query({
      query: (id) => {
        const token = localStorage.getItem("token");
        return {
          url: `superadmin/property/${id}`,
          credentials: "include",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
      providesTags: ['Property'] // Tag the query
    }),

    updateProperty: builder.mutation({
      query: (property) => {
        const token = localStorage.getItem("token");
        return {
          url: "superadmin/property/update",
          method: "PUT",
          body: property,
          credentials: "include",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        };
      },
      invalidatesTags: ['Property'] // Invalidate the tag on success
    }),

    deleteProperty: builder.mutation({
      query: (id) => {
        const token = localStorage.getItem("token");
        return {
          url: `superadmin/property/${id}`,
          method: "DELETE",
          credentials: "include",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
      invalidatesTags: ['Property'] // Invalidate the tag on success
    }),
  }),
  refetchOnFocus: true,
  refetchOnReconnect: true,
  refetchOnMountOrArgChange: true,
});

const {
  useGetAllPropertiesQuery,
  useDeletePropertyMutation,
  useUpdatePropertyMutation,
  useAddPropertyMutation,
  useGetPropertyByIdQuery
} = propertyManagementApi;

export {
  propertyManagementApi,
  useGetAllPropertiesQuery,
  useDeletePropertyMutation,
  useUpdatePropertyMutation,
  useAddPropertyMutation,
  useGetPropertyByIdQuery
};
