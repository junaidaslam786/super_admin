import { createApi } from "@reduxjs/toolkit/query/react";
import customFetchBase from "./customFetchBase";
import { userApi } from "./userApi";

const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: customFetchBase,
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query(data) {
        return {
          url: "auth/register",
          method: "POST",
          body: data,
        };
      },
    }),
    loginUser: builder.mutation({
      query(data) {
        return {
          url: "superadmin/auth/login",
          method: "POST",
          body: data,
          credentials: "include",
        };
      },
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          let responseData = await queryFulfilled.then((result) => result.data);
          localStorage.setItem("userData", JSON.stringify(responseData.user));
          localStorage.setItem("token", responseData.token);
          await dispatch(userApi.endpoints.getMe.initiate(null));
        } catch (error) {
          console.error("Error after login:", error);
        }
      },
    }),
    logoutUser: builder.mutation({
      query() {
        return {
          url: "auth/logout",
          credentials: "include",
        };
      },
    }),
    verifyEmail: builder.mutation({
      query(verificationCode) {
        return {
          url: `auth/verifyemail/${verificationCode}`,
          credentials: "include",
        };
      },
    }),
    forgotPassword: builder.mutation({
      query(body) {
        return {
          url: "auth/forgotpassword",
          method: "POST",
          credentials: "include",
          body,
        };
      },
    }),
    changeSuperAdminPassword: builder.mutation({
      query({ id, oldPassword, newPassword, confirmNewPassword }) {
        const token = localStorage.getItem("token")
        return {
          url: 'superadmin/auth/change-password',
          method: "PUT",
          body: { id, oldPassword, newPassword, confirmNewPassword, token },
          credentials: "include",
        };
      },
    }),
  }),
});

const {
  useLoginUserMutation,
  useRegisterUserMutation,
  useLogoutUserMutation,
  useVerifyEmailMutation,
  useForgotPasswordMutation,
  useChangeSuperAdminPasswordMutation,
} = authApi;

export {
  authApi,
  useLoginUserMutation,
  useRegisterUserMutation,
  useLogoutUserMutation,
  useVerifyEmailMutation,
  useForgotPasswordMutation,
  useChangeSuperAdminPasswordMutation,
};
