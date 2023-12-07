import React from "react";
import MainLayout from "../../layout/MainLayout";
import { Grid } from "@mui/material";
import ListAllCommunityPosts from "../../components/community/ListAllCommunityPosts";

const AllCommunityPostsPage = () => {
  return (
    <MainLayout>
      <Grid container spacing={3}>
        <Grid item xs={12} md={9}>
          <ListAllCommunityPosts />
        </Grid>
      </Grid>
    </MainLayout>
  );
};

export default AllCommunityPostsPage;
 