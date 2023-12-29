import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import Image from "../../../assets/property2.svg";
import {
  useGetAllPropertyAnalyticsQuery,
  useGetAllSoldPropertiesQuery,
} from "../../../redux/api/analyticsApi";

const PropertyCard = ({ title, count, percentageChange, imgSrc }) => (
  <Paper
    sx={{
      padding: 2,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around",
      border: "0.2vmin solid #00C800",
      borderRadius: "0.4vmin",
      boxShadow: "0px 3px 5px #333",
      height: "100%",
    }}
  >
    <Box
      sx={{
        backgroundColor: "#00C800",
        borderRadius: "50%",
        width: "8vmin",
        height: "8vmin",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src={imgSrc}
        alt={`${title} icon`}
        style={{ maxWidth: "100%", maxHeight: "100%" }}
      />
    </Box>
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
      }}
    >
      <Typography
        sx={{ fontSize: "2vmin", color: "#737791", fontWeight: "600" }}
      >
        {title}
      </Typography>
      <Typography
        sx={{ fontSize: "3.5vmin", color: "#191B2A", fontWeight: "600" }}
      >
        {count}
      </Typography>
      <Typography sx={{ fontSize: "1.2vmin", color: "#00C800" }}>
        {percentageChange}
      </Typography>
    </Box>
  </Paper>
);

const PropertiesList = () => {
  const { data: propertyAnalytics } = useGetAllPropertyAnalyticsQuery();
  const { data: soldProperties } = useGetAllSoldPropertiesQuery();

  if (!propertyAnalytics || !soldProperties) {
    return <Typography>Error: Data is not available.</Typography>;
  }

  return (
    <Box sx={{ padding: "5vmin" }}>
      <Typography
        sx={{
          fontWeight: "600",
          color: "191B2A",
          fontSize: "4vmin",
          marginBottom: "3vmin",
        }}
      >
        Properties:
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={7} md={5}>
          <PropertyCard
            title="Properties Listed"
            count={propertyAnalytics.propertiesListed.length}
            percentageChange="+3%"
            imgSrc={Image}
          />
        </Grid>
        <Grid item xs={12} sm={7} md={5}>
          <PropertyCard
            title="Under Offer"
            count={propertyAnalytics.propertiesUnderOffer}
            percentageChange="+3%"
            imgSrc={Image}
          />
        </Grid>
        <Grid item xs={12} sm={7} md={5}>
          <PropertyCard
            title="Properties Sold"
            count={soldProperties.propertiesSold}
            percentageChange="-2%"
            imgSrc={Image}
          />
        </Grid>
        <Grid item xs={12} sm={7} md={5}>
          <PropertyCard
            title="Revenue Generated"
            count={propertyAnalytics.revenue_generated}
            percentageChange="+4%"
            imgSrc={Image}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default PropertiesList;
