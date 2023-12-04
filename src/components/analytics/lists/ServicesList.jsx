import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "../../../assets/property2.svg";

import {
  useGetUsersAnalyticsQuery,
  useGetActiveUsersAnalyticsQuery,
  useGetNonActiveUsersAnalyticsQuery,
  useGetCustomersAnalyticsQuery
} from "../../../redux/api/analyticsApi";

const ServicesList = () => {

  // Fetch data from the API endpoint using the custom hook provided by the query object

  const {data, error, isLoading } = useGetCustomersAnalyticsQuery();
  console.log(data);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Handle error state
  if (error) {
    return <div>Error occurred: {error.message}</div>;
  }

  // Use the data to display in your UI
  const totalUsers = data ? data.totalUsers : 'N/A'; // Replace 'data.totalUsers' with the correct data path

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        paddingTop: "10vmin",
      }}
    >
      <Typography
        sx={{
          fontWeight: "600",
          color: "191B2A",
          fontSize: "4vmin",
        }}
      >
        Services:
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginTop: "3vmin",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            backgroundColor: "white",
            width: "30vmin",
            height: "12vmin",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            border: "0.2vmin solid #00C800",
            borderRadius: "0.4vmin",
            boxShadow: "0px 3px 5px #333",
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
            <img src={Image} />
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
              Total Users
            </Typography>
            <Typography
              sx={{
                fontSize: "3.5vmin",
                color: "#191B2A",
                fontWeight: "600",
              }}
            >
              340
            </Typography>
            <Typography sx={{ fontSize: "1.2vmin", color: "#00C800" }}>
              +3% than the last month
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            backgroundColor: "white",
            width: "30vmin",
            height: "12vmin",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            border: "0.2vmin solid #00C800",
            borderRadius: "0.4vmin",
            boxShadow: "0px 3px 5px #333",
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
            <img src={Image} />
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
              Active Users
            </Typography>
            <Typography
              sx={{
                fontSize: "3.5vmin",
                color: "#191B2A",
                fontWeight: "600",
              }}
            >
              420
            </Typography>
            <Typography sx={{ fontSize: "1.2vmin", color: "#00C800" }}>
              +10% than the last month
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            backgroundColor: "white",
            width: "30vmin",
            height: "12vmin",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            border: "0.2vmin solid #00C800",
            borderRadius: "0.4vmin",
            boxShadow: "0px 3px 5px #333",
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
            <img src={Image} />
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
              Services Sold
            </Typography>
            <Typography
              sx={{
                fontSize: "3.5vmin",
                color: "#191B2A",
                fontWeight: "600",
              }}
            >
              140
            </Typography>
            <Typography sx={{ fontSize: "1.2vmin", color: "#00C800" }}>
              +7% than the last month
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            backgroundColor: "white",
            width: "30vmin",
            height: "12vmin",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            border: "0.2vmin solid #00C800",
            borderRadius: "0.4vmin",
            boxShadow: "0px 3px 5px #333",
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
            <img src={Image} />
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
              Revenue Generated
            </Typography>
            <Typography
              sx={{
                fontSize: "3.5vmin",
                color: "#191B2A",
                fontWeight: "600",
              }}
            >
              $2000
            </Typography>
            <Typography sx={{ fontSize: "1.2vmin", color: "#00C800" }}>
              +5% than the last month
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ServicesList;
