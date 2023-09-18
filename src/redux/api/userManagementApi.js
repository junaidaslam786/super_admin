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
          url: `superadmin/user/update`,
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
  }),
});

const {
  useGetAllUsersExceptSuperAdminQuery,
  useGetUserByIdQuery,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = userManagementApi;

export {
  userManagementApi,
  useGetAllUsersExceptSuperAdminQuery,
  useGetUserByIdQuery,
  useUpdateUserMutation,
  useDeleteUserMutation,
};
