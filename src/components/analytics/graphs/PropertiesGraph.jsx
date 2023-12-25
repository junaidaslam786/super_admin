// import React, { useEffect, useState } from "react";
// import { Box } from "@mui/material";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
// } from "recharts";
// import { useGetAllPropertyAnalyticsQuery, useGetAllSoldPropertiesQuery } from "../../../redux/api/analyticsApi";

// const PropertiesGraph = () => {
//   const [graphData, setGraphData] = useState([]);
//   const { data: propertyAnalyticsData } = useGetAllPropertyAnalyticsQuery();
//   const { data: soldPropertiesData } = useGetAllSoldPropertiesQuery();

//   useEffect(() => {
//     if (propertyAnalyticsData && soldPropertiesData) {
//       const dataEntry = {
//         propertiesListed: propertyAnalyticsData.propertiesListed.length,
//         revenueGenerated: propertyAnalyticsData.revenue_generated,
//         propertiesUnderOffer: propertyAnalyticsData.propertiesUnderOffer,
//         propertiesSoldRented: soldPropertiesData.propertiesSold,
//       };

//       setGraphData([dataEntry]); // Graph data now contains only one entry
//     }
//   }, [propertyAnalyticsData, soldPropertiesData]);

//   return (
//     <Box
//       sx={{
//         width: "100%",
//         display: "flex",
//         flexDirection: "row",
//         justifyContent: "space-between",
//         alignItems: "center",
//         paddingTop: "5vmin",
//       }}
//     >
//       <Box
//         sx={{
//           width: "100%",
//           height: "50vmin",
//           border: "0.2vmin solid #00C800",
//           borderRadius: "0.4vmin",
//           backgroundColor: "white",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         <BarChart
//           width={500}
//           height={300}
//           data={graphData}
//           margin={{
//             top: 20,
//             right: 30,
//             left: 20,
//             bottom: 5,
//           }}
//         >
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="name" />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <Bar dataKey="propertiesListed" fill="#737791" />
//           <Bar dataKey="revenueGenerated" fill="#191B2A" />
//           <Bar dataKey="propertiesUnderOffer" fill="red" />
//           <Bar dataKey="propertiesSoldRented" fill="#00C800" />
//         </BarChart>
//       </Box>
//     </Box>
//   );
// };

// export default PropertiesGraph;

import React, { useEffect, useState } from "react";
import { Box, useTheme, useMediaQuery } from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  useGetAllPropertyAnalyticsQuery,
  useGetAllSoldPropertiesQuery,
} from "../../../redux/api/analyticsApi";

const PropertiesGraph = () => {
  const [graphData, setGraphData] = useState([]);
  const { data: propertyAnalyticsData } = useGetAllPropertyAnalyticsQuery();
  const { data: soldPropertiesData } = useGetAllSoldPropertiesQuery();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    if (propertyAnalyticsData && soldPropertiesData) {
      const dataEntry = {
        propertiesListed: propertyAnalyticsData.propertiesListed.length,
        revenueGenerated: propertyAnalyticsData.revenue_generated,
        propertiesUnderOffer: propertyAnalyticsData.propertiesUnderOffer,
        propertiesSoldRented: soldPropertiesData.propertiesSold,
      };

      setGraphData([dataEntry]);
    }
  }, [propertyAnalyticsData, soldPropertiesData]);

  return (
    <Box sx={{ width: "100%", pt: 5, height: isMobile ? "300px" : "500px" }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={graphData}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="propertiesListed" fill="#737791" />
          <Bar dataKey="revenueGenerated" fill="#191B2A" />
          <Bar dataKey="propertiesUnderOffer" fill="red" />
          <Bar dataKey="propertiesSoldRented" fill="#00C800" />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default PropertiesGraph;
