import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import Image from "../../../assets/property2.svg";
import { useGetAllAgentsQuery } from "../../../redux/api/analyticsApi";

const DataBox = ({ title, count, percentageChange, imgSrc }) => (
  <Paper
    sx={{
      padding: 2,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
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

const TradersList = () => {
  const { data: agentsData } = useGetAllAgentsQuery();

  if (!agentsData) {
    return <Typography>Error: agentsData is not available.</Typography>;
  }

  const { totalAgents, activeAgents, inactiveAgents, servicesBought } =
    agentsData;

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
        Traders:
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={7} md={5}>
          <DataBox
            title="Total Traders"
            count={totalAgents}
            percentageChange="+3%"
            imgSrc={Image}
          />
        </Grid>
        <Grid item xs={12} sm={7} md={5}>
          <DataBox
            title="Active Traders"
            count={activeAgents}
            percentageChange="+3%"
            imgSrc={Image}
          />
        </Grid>
        <Grid item xs={12} sm={7} md={5}>
          <DataBox
            title="Blocked Traders"
            count={inactiveAgents}
            percentageChange="-2%"
            imgSrc={Image}
          />
        </Grid>
        <Grid item xs={12} sm={7} md={5}>
          <DataBox
            title="Services Bought"
            count={servicesBought}
            percentageChange="+4%"
            imgSrc={Image}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default TradersList;
