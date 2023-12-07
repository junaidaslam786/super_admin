// import React from "react";
// import { Box } from "@mui/material";
// import { useSelector } from 'react-redux';
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
// } from "recharts";
// import { selectGraphDataForAgents } from '../../../redux/selectors/userSelectors';

// const TradersGraph = () => {
//   const tradersByMonth = useSelector(selectGraphDataForAgents);
//   const data = Object.keys(tradersByMonth).map(month => ({
//     month,
//     totalAgents: tradersByMonth[month].totalAgents,
//     activeAgents: tradersByMonth[month].activeAgents,
//   }));

//   return (
//     <Box sx={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingTop: "5vmin" }}>
//       <Box sx={{ width: "100%", height: "50vmin", border: "0.2vmin solid #00C800", borderRadius: "0.4vmin", backgroundColor: "white", display: "flex", alignItems: "center", justifyContent: "center" }}>
//         <BarChart width={1000} height={310} data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="month" />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <Bar dataKey="totalAgents" fill="#737791" />
//           <Bar dataKey="activeAgents" fill="#82ca9d" />
//         </BarChart>
//       </Box>
//     </Box>
//   );
// };

// export default TradersGraph;
import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { useSelector } from 'react-redux';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import { selectGraphDataForAgents } from '../../../redux/selectors/userSelectors';
import { useGetAllAgentsQuery } from '../../../redux/api/analyticsApi'; 

const TradersGraph = () => {
  const [graphData, setGraphData] = useState([]);
  const tradersByMonth = useSelector(selectGraphDataForAgents);
  const { data: agentsData } = useGetAllAgentsQuery();

  useEffect(() => {
    if (agentsData && tradersByMonth) {
      const mergedData = Object.keys(tradersByMonth).map(month => ({
        month,
        totalAgents: tradersByMonth[month].totalAgents,
        activeAgents: tradersByMonth[month].activeAgents,
        inactiveAgents: agentsData.inactiveAgents,
        servicesBought: agentsData.servicesBought
      }));
      setGraphData(mergedData);
    }
  }, [tradersByMonth, agentsData]);

  return (
    <Box sx={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingTop: "5vmin" }}>
      <Box sx={{ width: "100%", height: "50vmin", border: "0.2vmin solid #00C800", borderRadius: "0.4vmin", backgroundColor: "white", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <BarChart width={1000} height={310} data={graphData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="totalAgents" fill="#737791" />
          <Bar dataKey="activeAgents" fill="#82ca9d" />
          <Bar dataKey="inactiveAgents" fill="#8884d8" />
          <Bar dataKey="servicesBought" fill="#82ca9d" />
        </BarChart>
      </Box>
    </Box>
  );
};

export default TradersGraph;
