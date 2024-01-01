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
import { useGetCustomersAnalyticsQuery } from "../../../redux/api/analyticsApi";

const CustomersGraph = () => {
  const [graphData, setGraphData] = useState([]);
  const { data: analyticsData } = useGetCustomersAnalyticsQuery();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    if (analyticsData) {
      setGraphData([
        {
          name: "Total Customers",
          count: analyticsData.totalCustomers,
        },
        {
          name: "Active Customers",
          count: analyticsData.activeCustomers,
        },
        {
          name: "Properties Bought",
          count: analyticsData.propertiesBought,
        },
        {
          name: "Properties Rented",
          count: analyticsData.propertiesRented,
        },
      ]);
    }
  }, [analyticsData]);

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
          <Bar dataKey="count" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default CustomersGraph;
