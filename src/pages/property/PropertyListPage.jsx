import React from "react";
import MainLayout from "../../layout/MainLayout";
import PropertyList from "../../components/property/PropertyList";
import { Grid } from "@mui/material";

const PropertyListPage = () => {
  return (
    <MainLayout>
      <Grid container spacing={3}>
        <Grid item xs={12} md={9}>
          <PropertyList />
        </Grid>
      </Grid>
    </MainLayout>
  );
};

export default PropertyListPage;
 