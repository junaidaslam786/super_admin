import React from "react";
import MainLayout from "../../layout/MainLayout";
import AllTraders from "../../components/user-management/AllTraders";
import { Grid } from "@mui/material";

const AllTradersPage = () => {
  return (
    <MainLayout>
      <Grid container spacing={3}>
        <Grid item xs={12} md={9}>
          <AllTraders />
        </Grid>
      </Grid>
    </MainLayout>
  );
};

export default AllTradersPage;
 