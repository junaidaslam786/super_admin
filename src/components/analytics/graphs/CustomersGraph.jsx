import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
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
import { selectCustomersGroupedByMonth } from '../../../redux/selectors/userSelectors'; 
import { useGetCustomersAnalyticsQuery } from '../../../redux/api/analyticsApi';

const CustomersGraph = () => {
  const [graphData, setGraphData] = useState([]);
  const customersByMonth = useSelector(selectCustomersGroupedByMonth);
  const { data: analyticsData } = useGetCustomersAnalyticsQuery();
  console.log(customersByMonth);

  useEffect(() => {
    if (analyticsData && customersByMonth) {
      const mergedData = Object.entries(customersByMonth).map(([month, values]) => ({
        month,
        totalCustomers: values.total,
        activeCustomers: values.active,
        propertiesBought: analyticsData.propertiesBought,
        propertiesRented: analyticsData.propertiesRented
      }));
      setGraphData(mergedData);
    }
  }, [customersByMonth, analyticsData]);
  
  // Convert the object into an array for the chart
  // const data = Object.entries(customersByMonth).map(([month, values]) => ({
  //   month: month,
  //   totalCustomers: values.total,
  //   activeCustomers: values.active,
  // }));

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
          width={1000}
          height={310}
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
          <Bar dataKey="totalCustomers" fill="#737791" />
          <Bar dataKey="activeCustomers" fill="#82ca9d" />
          <Bar dataKey="propertiesBought" fill="#8884d8" />
          <Bar dataKey="propertiesRented" fill="#82ca9d" />
        </BarChart>
      </Box>
    </Box>
  );
};

export default CustomersGraph;
