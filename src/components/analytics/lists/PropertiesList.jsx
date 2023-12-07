import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "../../../assets/property2.svg";

import {
  useGetAllPropertyAnalyticsQuery,
  useGetAllSoldPropertiesQuery,
} from "../../../redux/api/analyticsApi";

const PropertiesList = () => {
  const { data: propertyAnalytics } = useGetAllPropertyAnalyticsQuery();
  const { data: soldProperties } = useGetAllSoldPropertiesQuery();

  // Add a check to ensure data is defined and has the required properties
  if (
    !propertyAnalytics ||
    propertyAnalytics.propertiesListed === undefined ||
    propertyAnalytics.revenue_generated === undefined ||
    propertyAnalytics.propertiesUnderOffer === undefined
  ) {
    return <Typography>Error: Data is not available.</Typography>;
  }

  if (
    !soldProperties ||
    soldProperties.propertiesSoldRentedByMonth === undefined
  ) {
    return <Typography>Error: Data is not available.</Typography>;
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        paddingTop: "5vmin",
      }}
    >
      <Typography
        sx={{
          fontWeight: "600",
          color: "191B2A",
          fontSize: "4vmin",
        }}
      >
        Properties:
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
              Properties Listed
            </Typography>
            <Typography
              sx={{ fontSize: "3.5vmin", color: "#191B2A", fontWeight: "600" }}
            >
              {propertyAnalytics.propertiesListed}
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
              Under Offer
            </Typography>
            <Typography
              sx={{ fontSize: "3.5vmin", color: "#191B2A", fontWeight: "600" }}
            >
              {propertyAnalytics.propertiesUnderOffer}
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
              Properties Sold
            </Typography>
            <Typography
              sx={{ fontSize: "3.5vmin", color: "#191B2A", fontWeight: "600" }}
            >
              {soldProperties.propertiesSoldRentedByMonth}
            </Typography>
            <Typography sx={{ fontSize: "1.2vmin", color: "#00C800" }}>
              -2% than the last month
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
              sx={{ fontSize: "3.5vmin", color: "#191B2A", fontWeight: "600" }}
            >
              {propertyAnalytics.revenue_generated}
            </Typography>
            <Typography sx={{ fontSize: "1.2vmin", color: "#00C800" }}>
              +4% than the last month
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PropertiesList;
