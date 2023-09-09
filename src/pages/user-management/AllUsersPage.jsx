import React from "react";
import MainLayout from "../../layout/MainLayout";
import AllUserData from "../../components/user-management/AllUsersData";
import { Grid } from "@mui/material";

const AllUsersPage = () => {
  return (
    <MainLayout>
      <Grid container spacing={3}>
        <Grid item xs={12} md={9}>
          <AllUserData />
        </Grid>
      </Grid>
    </MainLayout>
  );
};

export default AllUsersPage;
 