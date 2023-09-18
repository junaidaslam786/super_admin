import React from "react";
import MainLayout from "../../layout/MainLayout";
import AllUser from "../../components/user-management/AllUsers";
import { Grid } from "@mui/material";

const AllUsersPage = () => {
  return (
    <MainLayout>
      <Grid container spacing={3}>
        <Grid item xs={12} md={9}>
          <AllUser />
        </Grid>
      </Grid>
    </MainLayout>
  );
};

export default AllUsersPage;
 