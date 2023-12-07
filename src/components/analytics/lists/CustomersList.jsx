import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "../../../assets/property2.svg";
import { useSelector } from "react-redux";
import { selectTotalCustomers, selectTotalActiveCustomers  } from "../../../redux/selectors/userSelectors";

const CustomersList = () => {
  const totalCustomers = useSelector(selectTotalCustomers);
  const activeCustomers = useSelector(selectTotalActiveCustomers );
  console.log(totalCustomers);
  console.log(activeCustomers);
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
        Customers:
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
            boxShadow:'0px 3px 5px #333'
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
              Total Customers
            </Typography>
            <Typography
              sx={{ fontSize: "3.5vmin", color: "#191B2A", fontWeight: "600" }}
            >
              {totalCustomers}
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
            boxShadow:'0px 3px 5px #333'
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
              Active Customer
            </Typography>
            <Typography
              sx={{ fontSize: "3.5vmin", color: "#191B2A", fontWeight: "600" }}
            >
              {activeCustomers}
            </Typography>
            <Typography sx={{ fontSize: "1.2vmin", color: "#00C800" }}>
              -5% than the last month
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
            boxShadow:'0px 3px 5px #333'
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
              Properties Bought
            </Typography>
            <Typography
              sx={{ fontSize: "3.5vmin", color: "#191B2A", fontWeight: "600" }}
            >
              577
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
            boxShadow:'0px 3px 5px #333'
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
              Properties Rented
            </Typography>
            <Typography
              sx={{ fontSize: "3.5vmin", color: "#191B2A", fontWeight: "600" }}
            >
              $350
            </Typography>
            <Typography sx={{ fontSize: "1.2vmin", color: "#00C800" }}>
              +2% than the last month
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CustomersList;
