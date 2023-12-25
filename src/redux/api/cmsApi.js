import { createApi } from "@reduxjs/toolkit/query/react";
import customFetchBase from "./customFetchBase";

export const cmsApi = createApi({
  reducerPath: "cmsApi",
  baseQuery: customFetchBase,
  tagTypes: ["CmsApi"],
  endpoints: (builder) => ({
    addCmsPage: builder.mutation({
      query: (newCmsData) => {
        const token = localStorage.getItem("token");
        return {
          url: "/superadmin/cms/page/add-page",
          method: "POST",
          body: newCmsData,
          credentials: "include",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        };
      },
    }),
    deleteCmsPage: builder.mutation({
      query: (id) => {
        const token = localStorage.getItem("token");
        return {
          url: `/superadmin/cms/page/page/${id}`,
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
    updateCmsPage: builder.mutation({
      query: (updateData) => {
        const token = localStorage.getItem("token");
        return {
          url: "/superadmin/cms/page/update-status",
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
    updateCmsPageStatus: builder.mutation({
      query: (updateData) => {
        const token = localStorage.getItem("token");
        return {
          url: "/superadmin/cms/update-cms-status",
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
    getAllCmsPages: builder.query({
      query: (pageType) => {
        const token = localStorage.getItem("token");
        return {
          url: `/superadmin/cms/all-pages`,
          method: "POST",
          credentials: "include",
          body: pageType,
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        };
      },
    }),
  }),
});

const {
  useAddCmsPageMutation,
  useDeleteCmsPageMutation,
  useUpdateCmsPageMutation,
  useUpdateCmsPageStatusMutation,
  useGetAllCmsPagesQuery,
} = cmsApi;

export {
  useAddCmsPageMutation,
  useDeleteCmsPageMutation,
  useUpdateCmsPageMutation,
  useUpdateCmsPageStatusMutation,
  useGetAllCmsPagesQuery,
};
