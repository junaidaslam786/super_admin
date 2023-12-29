import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import Image from "../../../assets/property2.svg";
import { useGetCustomersAnalyticsQuery } from "../../../redux/api/analyticsApi";

const CustomerCard = ({ title, value, percentageChange, imgSrc }) => (
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
        {value}
      </Typography>
      <Typography sx={{ fontSize: "1.2vmin", color: "#00C800" }}>
        {percentageChange}% than the last month
      </Typography>
    </Box>
  </Paper>
);

const CustomersList = () => {
  const { data, error, isLoading } = useGetCustomersAnalyticsQuery();

  if (isLoading) return <Typography>Loading...</Typography>;
  if (error) return <Typography>Error: {error.message}</Typography>;

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
        Customers:
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={7} md={5}>
          <CustomerCard
            title="Total Customers"
            value={data?.totalCustomers}
            percentageChange="-2"
            imgSrc={Image}
          />
        </Grid>
        <Grid item xs={12} sm={7} md={5}>
          <CustomerCard
            title="Active Customers"
            value={data?.activeCustomers}
            percentageChange="-5"
            imgSrc={Image}
          />
        </Grid>
        <Grid item xs={12} sm={7} md={5}>
          <CustomerCard
            title="Properties Bought"
            value={data?.propertiesBought}
            percentageChange="+3"
            imgSrc={Image}
          />
        </Grid>
        <Grid item xs={12} sm={7} md={5}>
          <CustomerCard
            title="Properties Rented"
            value={data?.propertiesRented}
            percentageChange="+2"
            imgSrc={Image}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default CustomersList;
