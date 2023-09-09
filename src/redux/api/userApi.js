import { createApi } from "@reduxjs/toolkit/query/react";
import { setUser, updateProfileImage } from "../features/userSlice";
import customFetchBase from "./customFetchBase";

const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: customFetchBase,
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getMe: builder.query({
      query: () => {
        const token = localStorage.getItem("token");
        console.log(token);
        return {
          url: "superadmin/user/superadmin-details",
          credentials: "include",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
      transformResponse: (result) => result[0],
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUser(data));
        } catch (error) {}
      },
    }),
    profileUpdate: builder.mutation({
      query: ({ id, userData }) => {
        const token = localStorage.getItem("token");
        // userData.append("id", id);
        const requestBody = { ...userData, id };

        return {
          url: `/superadmin/user/update`, // Replace this with the actual endpoint URL.
          method: "PUT", // Assuming you're using PUT for updates.
          body: requestBody, // This is the data you'd send for the profile update.
          headers: {
            Authorization: `Bearer ${token}`,
            // "Content-Type": "multipart/form-data",
          },
        };
      },
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUser(data));
        } catch (error) {}
      },

      // You can add additional methods like onQueryStarted, transformResponse, etc. if needed.
    }),
    uploadImage: builder.mutation({
      query: ({ id, imageFile }) => {
        const token = localStorage.getItem("token");
        const formData = new FormData();
        formData.append("id", id);
        formData.append("image", imageFile);
        // const requesBody = { id, imageFile };
        return {
          url: "/superadmin/user/upload-image",
          method: "POST",
          body: formData,
          headers: {
            Authorization: `Bearer ${token}`,
            // "Content-Type": "multipart/form-data",
          },
        };
      },
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUser(data));
        } catch (error) {}
      },
    }),
  }),
});

const { useProfileUpdateMutation, useUploadImageMutation } = userApi;

export { userApi, useProfileUpdateMutation, useUploadImageMutation };
