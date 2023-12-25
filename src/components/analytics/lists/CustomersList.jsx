// import React from "react";
// import { Box, Typography } from "@mui/material";
// import Image from "../../../assets/property2.svg";
// import { useSelector } from "react-redux";
// import { useGetCustomersAnalyticsQuery } from "../../../redux/api/analyticsApi";

// const CustomersList = () => {

//   const { data, error, isLoading } = useGetCustomersAnalyticsQuery();

//   // You can handle loading and error states as well
//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>Error occurred: {error.message}</div>;

//   // Destructure the required fields from the data
//   const {
//     totalCustomers,
//     activeCustomers,
//     propertiesBought,
//     propertiesRented,
//     // other fields as needed
//   } = data || {};

//   return (
//     <Box
//       sx={{
//         display: "flex",
//         flexDirection: "column",
//         width: "100%",
//         paddingTop: "5vmin",
//       }}
//     >
//       <Typography
//         sx={{
//           fontWeight: "600",
//           color: "191B2A",
//           fontSize: "4vmin",
//         }}
//       >
//         Customers:
//       </Typography>
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: "row",
//           alignItems: "center",
//           marginTop: "3vmin",
//           width: "100%",
//           justifyContent: "space-between",
//         }}
//       >
//         <Box
//           sx={{
//             backgroundColor: "white",
//             width: "30vmin",
//             height: "12vmin",
//             display: "flex",
//             flexDirection: "row",
//             justifyContent: "space-around",
//             alignItems: "center",
//             border: "0.2vmin solid #00C800",
//             borderRadius: "0.4vmin",
//             boxShadow:'0px 3px 5px #333'
//           }}
//         >
//           <Box
//             sx={{
//               backgroundColor: "#00C800",
//               borderRadius: "50%",
//               width: "8vmin",
//               height: "8vmin",
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//             }}
//           >
//             <img src={Image} />
//           </Box>
//           <Box
//             sx={{
//               display: "flex",
//               flexDirection: "column",
//               justifyContent: "space-around",
//             }}
//           >
//             <Typography
//               sx={{ fontSize: "2vmin", color: "#737791", fontWeight: "600" }}
//             >
//               Total Customers
//             </Typography>
//             <Typography
//               sx={{ fontSize: "3.5vmin", color: "#191B2A", fontWeight: "600" }}
//             >
//               {totalCustomers}
//             </Typography>
//             <Typography sx={{ fontSize: "1.2vmin", color: "#00C800" }}>
//               -2% than the last month
//             </Typography>
//           </Box>
//         </Box>
//         <Box
//           sx={{
//             backgroundColor: "white",
//             width: "30vmin",
//             height: "12vmin",
//             display: "flex",
//             flexDirection: "row",
//             justifyContent: "space-around",
//             alignItems: "center",
//             border: "0.2vmin solid #00C800",
//             borderRadius: "0.4vmin",
//             boxShadow:'0px 3px 5px #333'
//           }}
//         >
//           <Box
//             sx={{
//               backgroundColor: "#00C800",
//               borderRadius: "50%",
//               width: "8vmin",
//               height: "8vmin",
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//             }}
//           >
//             <img src={Image} />
//           </Box>
//           <Box
//             sx={{
//               display: "flex",
//               flexDirection: "column",
//               justifyContent: "space-around",
//             }}
//           >
//             <Typography
//               sx={{ fontSize: "2vmin", color: "#737791", fontWeight: "600" }}
//             >
//               Active Customer
//             </Typography>
//             <Typography
//               sx={{ fontSize: "3.5vmin", color: "#191B2A", fontWeight: "600" }}
//             >
//               {activeCustomers}
//             </Typography>
//             <Typography sx={{ fontSize: "1.2vmin", color: "#00C800" }}>
//               -5% than the last month
//             </Typography>
//           </Box>
//         </Box>
//         <Box
//           sx={{
//             backgroundColor: "white",
//             width: "30vmin",
//             height: "12vmin",
//             display: "flex",
//             flexDirection: "row",
//             justifyContent: "space-around",
//             alignItems: "center",
//             border: "0.2vmin solid #00C800",
//             borderRadius: "0.4vmin",
//             boxShadow:'0px 3px 5px #333'
//           }}
//         >
//           <Box
//             sx={{
//               backgroundColor: "#00C800",
//               borderRadius: "50%",
//               width: "8vmin",
//               height: "8vmin",
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//             }}
//           >
//             <img src={Image} />
//           </Box>
//           <Box
//             sx={{
//               display: "flex",
//               flexDirection: "column",
//               justifyContent: "space-around",
//             }}
//           >
//             <Typography
//               sx={{ fontSize: "2vmin", color: "#737791", fontWeight: "600" }}
//             >
//               Properties Bought
//             </Typography>
//             <Typography
//               sx={{ fontSize: "3.5vmin", color: "#191B2A", fontWeight: "600" }}
//             >
//               {propertiesBought}
//             </Typography>
//             <Typography sx={{ fontSize: "1.2vmin", color: "#00C800" }}>
//               +3% than the last month
//             </Typography>
//           </Box>
//         </Box>
//         <Box
//           sx={{
//             backgroundColor: "white",
//             width: "30vmin",
//             height: "12vmin",
//             display: "flex",
//             flexDirection: "row",
//             justifyContent: "space-around",
//             alignItems: "center",
//             border: "0.2vmin solid #00C800",
//             borderRadius: "0.4vmin",
//             boxShadow:'0px 3px 5px #333'
//           }}
//         >
//           <Box
//             sx={{
//               backgroundColor: "#00C800",
//               borderRadius: "50%",
//               width: "8vmin",
//               height: "8vmin",
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//             }}
//           >
//             <img src={Image} />
//           </Box>
//           <Box
//             sx={{
//               display: "flex",
//               flexDirection: "column",
//               justifyContent: "space-around",
//             }}
//           >
//             <Typography
//               sx={{ fontSize: "2vmin", color: "#737791", fontWeight: "600" }}
//             >
//               Properties Rented
//             </Typography>
//             <Typography
//               sx={{ fontSize: "3.5vmin", color: "#191B2A", fontWeight: "600" }}
//             >
//               {propertiesRented}
//             </Typography>
//             <Typography sx={{ fontSize: "1.2vmin", color: "#00C800" }}>
//               +2% than the last month
//             </Typography>
//           </Box>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default CustomersList;

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
        <Grid item xs={12} sm={6} md={3}>
          <CustomerCard
            title="Total Customers"
            value={data?.totalCustomers}
            percentageChange="-2"
            imgSrc={Image}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <CustomerCard
            title="Active Customers"
            value={data?.activeCustomers}
            percentageChange="-5"
            imgSrc={Image}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <CustomerCard
            title="Properties Bought"
            value={data?.propertiesBought}
            percentageChange="+3"
            imgSrc={Image}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
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
