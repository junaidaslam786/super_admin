import React from "react";
import { Box } from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const TokensGraph = () => {
  const data = [
    {
      month: "January",
      totalusers: 4000,
      activeusers: 2400,
      nonactiveusers: 1200,
      revenuegenerated: 2400,
    },
    {
      month: "February",
      totalusers: 3456,
      activeusers: 2564,
      nonactiveusers: 1300,
      revenuegenerated: 2599,
    },
    {
      month: "March",
      totalusers: 3645,
      activeusers: 3635,
      nonactiveusers: 800,
      revenuegenerated: 1452,
    },
    {
      month: "April",
      totalusers: 4543,
      activeusers: 2324,
      nonactiveusers: 2436,
      revenuegenerated: 2542,
    },
    {
      month: "May",
      totalusers: 3424,
      activeusers: 2321,
      nonactiveusers: 3214,
      revenuegenerated: 2547,
    },
    {
      month: "June",
      totalusers: 1452,
      activeusers: 654,
      nonactiveusers: 645,
      revenuegenerated: 6543,
    },
  ];
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: "5vmin",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "50vmin",
          border: "0.2vmin solid #00C800",
          borderRadius: "0.4vmin",
          backgroundColor: "white",
          display:'flex',
          alignItems:'center',
          justifyContent:'center'
        }}
      >
        <BarChart
          width={1000}
          height={310}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis yAxisId="left" orientation="left" stroke="#00C800" />
          <YAxis yAxisId="right" orientation="right" stroke="#191B2A" />
          <Tooltip />
          <Legend />
          <Bar yAxisId="left" dataKey="totalusers" fill="#737791" />
          <Bar yAxisId="right" dataKey="activeusers" fill="#191B2A" />
          <Bar yAxisId="right" dataKey="nonactiveusers" fill="red" />
          <Bar yAxisId="right" dataKey="revenuegenerated" fill="#00C800" />
        </BarChart>
      </Box>
    </Box>
  );
};

export default TokensGraph;
