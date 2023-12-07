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
    deleteCommunity: builder.mutation({
      query: (id) => {
        const token = localStorage.getItem("token");
        return {
          url: `/superadmin/cms/community/${id}`,
          method: "DELETE",
          // body: deleteData,
          credentials: "include",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        };
      },
    }),
    updateCommunity: builder.mutation({
      query: (updateData) => {
        const token = localStorage.getItem("token");
        return {
          url: "/superadmin/cms/community/update-community",
          method: "PUT",
          body: updateData,
          credentials: "include",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        };
      },
    }),
    updateCommunityStatus: builder.mutation({
      query: (updateData) => {
        const token = localStorage.getItem("token");
        return {
          url: "/superadmin/cms/community/update-community-status",
          method: "PUT",
          body: updateData,
          credentials: "include",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        };
      },
    }),
    listCommunity: builder.query({
      query: () => {
        const token = localStorage.getItem("token");
        return {
          url: "/superadmin/cms/community/list-community",
          method: "POST",
          credentials: "include",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
      providesTags: [{ type: "CommunityApi", id: "List" }],
    }),
    getAllCummunityPosts: builder.query({
      query: (id) => {
        const token = localStorage.getItem("token");
        return {
          url: `/superadmin/cms/community//all-posts/${id}`,
          method: "GET",
          credentials: "include",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
      providesTags: [{ type: "CommunityApi", id: "List" }],
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
  useListCommunityQuery,
  useUpdateCommunityStatusMutation,
  useDeleteCommunityMutation,
  useUpdateCommunityMutation,
  useGetAllCummunityPostsQuery,
} = communityApi;

export {
  useAddCommunityMutation,
  useGetCategoryListQuery,
  useGetSubCategoryListQuery,
  useListCommunityQuery,
  useUpdateCommunityStatusMutation,
  useDeleteCommunityMutation,
  useUpdateCommunityMutation,
  useGetAllCummunityPostsQuery,
};
