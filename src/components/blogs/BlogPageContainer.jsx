import React from "react";
import { Grid } from "@mui/material";
import {
  useGetAllCmsPagesQuery,
  useUpdateCmsPageMutation,
  useDeleteCmsPageMutation,
} from "../../redux/api/cmsApi";
import CmsPagesList from "./CmsPagesList";

const CmsPageContainer = () => {
  const { data: cmsPages, isLoading, error } = useGetAllCmsPagesQuery({ pageType: "blogs" });
  const [deleteCmsPage] = useDeleteCmsPageMutation();
  const [updateCmsPage] = useUpdateCmsPageMutation();

  console.log("cmsPages data:", cmsPages);


  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error occurred: {error.message}</p>;

  const handleDelete = async (pageId) => {
    try {
      await deleteCmsPage(pageId).unwrap();
    } catch (err) {
      console.error("Failed to delete CMS page:", err);
    }
  };

  const handleUpdate = async (pageId) => {
    try {
      await updateCmsPage(pageId).unwrap();
    } catch (err) {
      console.error("Failed to update CMS page:", err);
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <CmsPagesList
          cmsPages={cmsPages || []}
          onDelete={handleDelete}
          onUpdate={handleUpdate}
        />
      </Grid>
    </Grid>
  );
};

export default CmsPageContainer;
