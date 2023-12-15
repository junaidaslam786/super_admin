import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import { useGetCustomersAnalyticsQuery } from '../../../redux/api/analyticsApi';

const CustomersGraph = () => {
  const [graphData, setGraphData] = useState([]);
  const { data: analyticsData } = useGetCustomersAnalyticsQuery();

  useEffect(() => {
    if (analyticsData) {
      setGraphData([
        {
          name: 'Total Customers',
          count: analyticsData.totalCustomers,
        },
        {
          name: 'Active Customers',
          count: analyticsData.activeCustomers,
        },
        {
          name: 'Properties Bought',
          count: analyticsData.propertiesBought,
        },
        {
          name: 'Properties Rented',
          count: analyticsData.propertiesRented,
        },
      ]);
    }
  }, [analyticsData]);

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: '5vmin',
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: '50vmin',
          border: '0.2vmin solid #00C800',
          borderRadius: '0.4vmin',
          backgroundColor: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <BarChart
          width={500}
          height={300}
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
      </Box>
    </Box>
  );
};

export default CustomersGraph;
