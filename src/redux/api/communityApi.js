import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import customFetchBase from "./customFetchBase";

export const communityApi = createApi({
  reducerPath: "communityApi",
  baseQuery: customFetchBase,
  tagTypes: ["CommunityApi"],
  endpoints: (builder) => ({
    addCommunity: builder.mutation({
      query: (newCommunityData) => {
        const token = localStorage.getItem("token");
        return {
          url: "/superadmin/cms/community/add-community",
          method: "POST",
          body: newCommunityData,
          credentials: "include",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        };
      },
    }),
    getCategoryList: builder.query({
      query: () => {
        const token = localStorage.getItem("token");
        return {
          url: "/superadmin/cms/community/category-list",
          credentials: "include",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
      providesTags: [{ type: "CommunityApi", id: "List" }],
    }),
    getSubCategoryList: builder.query({
      query: () => {
        const token = localStorage.getItem("token");
        return {
          url: "/superadmin/cms/community/sub-categories-list",
          credentials: "include",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
      providesTags: [{ type: "CommunityApi", id: "List" }],
    }),
  }),
});

const {
  useAddCommunityMutation,
  useGetCategoryListQuery,
  useGetSubCategoryListQuery,
} = communityApi;

export {
  useAddCommunityMutation,
  useGetCategoryListQuery,
  useGetSubCategoryListQuery,
};
