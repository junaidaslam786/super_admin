import React from "react";
import MainLayout from "../../layout/MainLayout";

import { Grid } from "@mui/material";
import AllAdmins from "../../components/user-management/AllAdmins";

const AllAdminsPage = () => {
  return (
    <MainLayout>
      <Grid container spacing={3}>
        <Grid item xs={12} md={9}>
          <AllAdmins />
        </Grid>
      </Grid>
    </MainLayout>
  );
};

export default AllAdminsPage;
 