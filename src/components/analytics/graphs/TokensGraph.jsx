// import React, { useEffect, useState } from "react";
// import { Box } from "@mui/material";
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
// import { useGetAllTokensDetailsQuery } from "../../../redux/api/analyticsApi";
// import { format, parseISO } from 'date-fns';

// const TokensGraph = () => {
//   const [graphData, setGraphData] = useState([]);
//   const { data, error, isLoading } = useGetAllTokensDetailsQuery();

//   useEffect(() => {
//     if (data && !isLoading && !error) {
//       // Transform data to fit the graph format
//       const aggregatedData = data.rows.reduce((acc, row) => {
//         const monthYear = format(parseISO(row.createdAt), 'MMMM-yyyy');
//         if (!acc[monthYear]) {
//           acc[monthYear] = { totalTokens: 0, tokensRemaining: 0, pendingTokens: 0, revenue_generated: 0 };
//         }
//         acc[monthYear].totalTokens += row.quantity;
//         acc[monthYear].tokensRemaining += row.remainingAmount;
//         acc[monthYear].revenue_generated += row.totalAmount;
//         return acc;
//       }, {});

//       setGraphData(Object.keys(aggregatedData).map(month => ({ month, ...aggregatedData[month] })));
//     }
//   }, [data, isLoading, error]);

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
//           justifyContent: "center"
//         }}
//       >
//         <BarChart
//           width={1000}
//           height={310}
//           data={graphData}
//           margin={{
//             top: 20,
//             right: 30,
//             left: 20,
//             bottom: 5,
//           }}
//         >
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="month" />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <Bar dataKey="totalTokens" fill="#737791" />
//           <Bar dataKey="tokensRemaining" fill="#191B2A" />
//           <Bar dataKey="pendingTokens" fill="red" />
//           <Bar dataKey="revenue_generated" fill="#00C800" />
//         </BarChart>
//       </Box>
//     </Box>
//   );
// };

// export default TokensGraph;

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
import { useGetAllTokensDetailsQuery } from "../../../redux/api/analyticsApi";
import { format, parseISO } from "date-fns";

const TokensGraph = () => {
  const [graphData, setGraphData] = useState([]);
  const { data, error, isLoading } = useGetAllTokensDetailsQuery();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    if (data && !isLoading && !error) {
      const aggregatedData = data.rows.reduce((acc, row) => {
        const monthYear = format(parseISO(row.createdAt), "MMMM-yyyy");
        if (!acc[monthYear]) {
          acc[monthYear] = {
            totalTokens: 0,
            tokensRemaining: 0,
            pendingTokens: 0,
            revenue_generated: 0,
          };
        }
        acc[monthYear].totalTokens += row.quantity;
        acc[monthYear].tokensRemaining += row.remainingAmount;
        acc[monthYear].revenue_generated += row.totalAmount;
        return acc;
      }, {});

      setGraphData(
        Object.keys(aggregatedData).map((month) => ({
          month,
          ...aggregatedData[month],
        }))
      );
    }
  }, [data, isLoading, error]);

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
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="totalTokens" fill="#737791" />
          <Bar dataKey="tokensRemaining" fill="#191B2A" />
          <Bar dataKey="pendingTokens" fill="red" />
          <Bar dataKey="revenue_generated" fill="#00C800" />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default TokensGraph;
