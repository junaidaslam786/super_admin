// import React from "react";
// import { Box, Typography } from "@mui/material";
// import Image from "../../../assets/property2.svg";
// import { useGetAllTokensDetailsQuery } from "../../../redux/api/analyticsApi";

// const TokensList = () => {
//   const { data, error, isLoading } = useGetAllTokensDetailsQuery();
//   console.log(data);

//   // Add a check to ensure data is defined and has the required properties
//   if (
//     !data ||
//     data.totalTokens === undefined ||
//     data.tokensRemaining === undefined ||
//     data.pendingTokens === undefined ||
//     data.revenue_generated === undefined
//   ) {
//     return <Typography>Error: Data is not available.</Typography>;
//   }

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
//         Tokens:
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
//             boxShadow: "0px 3px 5px #333",
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
//               Total Tokens
//             </Typography>
//             <Typography
//               sx={{ fontSize: "3.5vmin", color: "#191B2A", fontWeight: "600" }}
//             >
//               {data.totalTokens}
//             </Typography>
//             <Typography sx={{ fontSize: "1.2vmin", color: "#00C800" }}>
//               +0.1% than the last month
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
//             boxShadow: "0px 3px 5px #333",
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
//               Remaining Tokens
//             </Typography>
//             <Typography
//               sx={{ fontSize: "3.5vmin", color: "#191B2A", fontWeight: "600" }}
//             >
//               {data.tokensRemaining}
//             </Typography>
//             <Typography sx={{ fontSize: "1.2vmin", color: "#00C800" }}>
//               +2% than the last month
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
//             boxShadow: "0px 3px 5px #333",
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
//               Pending Tokens
//             </Typography>
//             <Typography
//               sx={{ fontSize: "3.5vmin", color: "#191B2A", fontWeight: "600" }}
//             >
//               {data.pendingTokens}
//             </Typography>
//             <Typography sx={{ fontSize: "1.2vmin", color: "#00C800" }}>
//               +8% than the last month
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
//             boxShadow: "0px 3px 5px #333",
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
//               Revenue Generated
//             </Typography>
//             <Typography
//               sx={{ fontSize: "3.5vmin", color: "#191B2A", fontWeight: "600" }}
//             >
//               {data.revenue_generated}
//             </Typography>
//             <Typography sx={{ fontSize: "1.2vmin", color: "#00C800" }}>
//               +9% than the last month
//             </Typography>
//           </Box>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default TokensList;

import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import Image from "../../../assets/property2.svg";
import { useGetAllTokensDetailsQuery } from "../../../redux/api/analyticsApi";

const TokenCard = ({ title, value, percentageChange, imgSrc }) => (
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
        +{percentageChange}% than the last month
      </Typography>
    </Box>
  </Paper>
);

const TokensList = () => {
  const { data, error, isLoading } = useGetAllTokensDetailsQuery();

  if (!data || error || isLoading) {
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
        Tokens:
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={6} md={3}>
          <TokenCard
            title="Total Tokens"
            value={data.totalTokens}
            percentageChange="0.1"
            imgSrc={Image}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TokenCard
            title="Remaining Tokens"
            value={data.tokensRemaining}
            percentageChange="2"
            imgSrc={Image}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TokenCard
            title="Pending Tokens"
            value={data.pendingTokens}
            percentageChange="8"
            imgSrc={Image}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TokenCard
            title="Revenue Generated"
            value={data.revenue_generated}
            percentageChange="9"
            imgSrc={Image}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default TokensList;
