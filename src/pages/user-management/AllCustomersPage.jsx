import React from "react";
import MainLayout from "../../layout/MainLayout";
import AllCustomers from "../../components/user-management/AllCustomers";
import { Grid } from "@mui/material";

const AllCustomersPage = () => {
  return (
    <MainLayout>
      <Grid container spacing={3}>
        <Grid item xs={12} md={9}>
          <AllCustomers />
        </Grid>
      </Grid>
    </MainLayout>
  );
};

export default AllCustomersPage;
 