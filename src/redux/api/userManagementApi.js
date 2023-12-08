import { createApi } from "@reduxjs/toolkit/query/react";
import customFetchBase from "./customFetchBase";
import {
  setUsers,
  updateUser,
  deleteUser,
} from "../features/userManagementSlice";

const userManagementApi = createApi({
  reducerPath: "userManagementApi",
  baseQuery: customFetchBase,
  tagTypes: ["UserManagement"],
  endpoints: (builder) => ({
    getAllUsersExceptSuperAdmin: builder.query({
      query: () => {
        const token = localStorage.getItem("token");
        return {
          url: "superadmin/user/list-all",
          credentials: "include",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
      onSuccess: (data, arg, thunkAPI) => {
        thunkAPI.dispatch(setUsers(data));
      },
    }),

    getUserById: builder.query({
      query: (id) => {
        const token = localStorage.getItem("token");
        return {
          url: `superadmin/user/${id}`,
          method: "GET",
          credentials: "include",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
    }),

    updateUser: builder.mutation({
      query: (user) => {
        const token = localStorage.getItem("token");
        return {
          url: `superadmin/user/update/${user.id}`,
          method: "PUT",
          body: user,
          credentials: "include",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        };
      },
      onSuccess: (data, arg, thunkAPI) => {
        thunkAPI.dispatch(updateUser(data));
      },
    }),

    activateUser: builder.mutation({
      query: (id) => {
        const token = localStorage.getItem("token");
        return {
          url: `superadmin/user/${id}/activate`,
          method: "PUT",
          credentials: "include",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        };
      },
    }),

    deactivateUser: builder.mutation({
      query: (id) => {
        const token = localStorage.getItem("token");
        return {
          url: `superadmin/user/${id}/deactivate`,
          method: "PUT",
          credentials: "include",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        };
      },
    }),

    deleteUser: builder.mutation({
      query: (id) => {
        const token = localStorage.getItem("token");
        return {
          url: `superadmin/user/${id}`,
          method: "DELETE",
          credentials: "include",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
      onSuccess: (data, arg, thunkAPI) => {
        thunkAPI.dispatch(deleteUser(data.id));
        thunkAPI.dispatch(
          userManagementApi.util.invalidateTags([
            { type: "UserManagement", id: "getAllUsersExceptSuperAdmin" },
          ])
        );
      },
    }),

    blockTradersById: builder.mutation({
      query: (id) => {
        const token = localStorage.getItem("token");
        return {
          url: `superadmin/user/block-trader/${id}`,
          method: "PUT",
          credentials: "include",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        };
      },
    }),
    
    getAgentUser: builder.query({
      query: (agentUserId) => {
        const token = localStorage.getItem("token");
        return {
          url: `/agent/user/${agentUserId}`,
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
      // Optionally, you can add a transformResponse to handle the response data before it reaches the component
      // transformResponse: (response) => response.data,
    }),
    getAllTradersUsersList: builder.query({
      query: (agentUserId) => {
        const token = localStorage.getItem("token");
        return {
          url: `/superadmin/user/list-trader-users/${agentUserId}`,
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
      
    }),
  }),
});

const {
  useGetAllUsersExceptSuperAdminQuery,
  useGetUserByIdQuery,
  useUpdateUserMutation,
  useDeleteUserMutation,
  useActivateUserMutation,
  useDeactivateUserMutation,
  useGetAgentUserQuery,
  useGetAllTradersUsersListQuery,
  useBlockTradersByIdMutation,
} = userManagementApi;

export {
  userManagementApi,
  useGetAllUsersExceptSuperAdminQuery,
  useGetUserByIdQuery,
  useUpdateUserMutation,
  useDeleteUserMutation,
  useActivateUserMutation,
  useDeactivateUserMutation,
  useGetAgentUserQuery,
  useGetAllTradersUsersListQuery,
  useBlockTradersByIdMutation,
};
