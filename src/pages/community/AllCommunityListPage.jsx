import React from "react";
import MainLayout from "../../layout/MainLayout";
import { Grid } from "@mui/material";
import ListCommunity from "../../components/community/ListCommunity";

const AllCommunityListPage = () => {
  return (
    <MainLayout>
      <Grid container spacing={3}>
        <Grid item xs={12} md={9}>
          <ListCommunity />
        </Grid>
      </Grid>
    </MainLayout>
  );
};

export default AllCommunityListPage;
 