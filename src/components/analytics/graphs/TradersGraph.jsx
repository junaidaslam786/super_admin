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
import { useGetAllAgentsQuery } from "../../../redux/api/analyticsApi";

const TradersGraph = () => {
  const [graphData, setGraphData] = useState([]);
  const { data: agentsData } = useGetAllAgentsQuery();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    if (agentsData) {
      setGraphData([
        { name: "Total Agents", value: agentsData.totalAgents },
        { name: "Active Agents", value: agentsData.activeAgents },
        { name: "Inactive Agents", value: agentsData.inactiveAgents },
        { name: "Services Bought", value: agentsData.servicesBought },
      ]);
    }
  }, [agentsData]);

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
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default TradersGraph;
