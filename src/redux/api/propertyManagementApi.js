import { createApi } from "@reduxjs/toolkit/query/react";
import customFetchBase from "./customFetchBase";
import {
  deleteProperty,
  setProperties,
  updateProperty,
} from "../features/propertyManagementSlice";
import { userManagementApi } from "./userManagementApi";

const propertyManagementApi = createApi({
  reducerPath: "propertyManagementApi",
  baseQuery: customFetchBase,
  tagTypes: ["PropertyManagement"],
  endpoints: (builder) => ({
    getAllProperties: builder.query({
      query: () => {
        const token = localStorage.getItem("token");
        return {
          url: "superadmin/property/list-all",
          credentials: "include",
          header: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
      onSuccess: async (data, arg, thunkAPI) => {
        // Start all fetch operations in parallel
        const userFetchPromises = data.map(property => 
            thunkAPI.dispatch(userManagementApi.endpoints.getUserById.initiate(property.createdBy))
        );
    
        // Wait for all fetch operations to complete
        const userResponses = await Promise.all(userFetchPromises);
    
        // Create updated properties array with user names
        const updatedProperties = data.map((property, index) => {
            const userResponse = userResponses[index];
            return {
                ...property,
                createdBy: userResponse?.data?.firstName || property.createdBy
            };
        });
    
        // Update the Redux state with the updated properties
        thunkAPI.dispatch(setProperties(updatedProperties));
    }
    
    }),
    // addProperty: builder.mutation({
    //   query: (property) => {
    //     const token = localStorage.getItem("token");
    //     return {
    //       url: "superadmin/property/create",
    //       method: "POST",
    //       body: property,
    //       credentials: "include",
    //       headers: {
    //         Authorization: `Bearer ${token}`,
    //         "Content-Type": "application/json",
    //       },
    //     };
    //   },
    //   onSuccess: (data, arg, thunkAPI) => {
    //     // Handle successful addition of property
    //     // For example, you might want to invalidate the cache for getAllProperties to refetch the list

    //     thunkAPI.dispatch(
    //       propertyManagementApi.util.invalidateTags([
    //         { type: "PropertyManagement", id: "getAllProperties" },
    //       ])
    //     );
    //   },
    // }),
    addProperty: builder.mutation({
      query: (property) => {
        const token = localStorage.getItem("token");
        const rawUserState = localStorage.getItem("userState");
        let userId;
        if (rawUserState) {
          const userState = JSON.parse(rawUserState);
          userId = userState.user.id; // Use .id here
        }

        // Include the userId in the property data
        property.userId = userId;

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
      onSuccess: (data, arg, thunkAPI) => {
        // Handle successful addition of property
        // For example, you might want to invalidate the cache for getAllProperties to refetch the list

        thunkAPI.dispatch(
          propertyManagementApi.util.invalidateTags([
            { type: "PropertyManagement", id: "getAllProperties" },
          ])
        );
      },
    }),

    updateProperty: builder.mutation({
      query: (property) => {
        const token = localStorage.getItem("token");
        return {
          url: "superadmin/property/update",
          method: "PUT",
          body: { ...property, productId: property.id },
          credentials: "include",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        };
      },
      onSuccess: (data, arg, thunkAPI) => {
        thunkAPI.dispatch(updateProperty(data));
      },
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
      onSuccess: (data, arg, thunkAPI) => {
        thunkAPI.dispatch(deleteProperty(data.id));
        thunkAPI.dispatch(
          propertyManagementApi.util.invalidateTags([
            { type: "PropertyManagement", id: "getAllProperties" },
          ])
        );
      },
    }),
  }),
});

const {
  useGetAllPropertiesQuery,
  useDeletePropertyMutation,
  useUpdatePropertyMutation,
  useAddPropertyMutation,
} = propertyManagementApi;

export {
  propertyManagementApi,
  useGetAllPropertiesQuery,
  useDeletePropertyMutation,
  useUpdatePropertyMutation,
  useAddPropertyMutation,
};