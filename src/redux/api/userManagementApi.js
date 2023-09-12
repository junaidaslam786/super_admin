import { createApi } from "@reduxjs/toolkit/query/react";
import customFetchBase from "./customFetchBase";
import { setUsers } from "../features/userManagementSlice";

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
        console.log("Before dispatching setUsers with data:", data);
        thunkAPI.dispatch(setUsers(data));
        console.log("After dispatching setUsers");
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
  }),
});

const { useGetAllUsersExceptSuperAdminQuery, useGetUserByIdQuery } = userManagementApi;

export { userManagementApi, useGetAllUsersExceptSuperAdminQuery, useGetUserByIdQuery };
