import React, {useEffect, useState} from "react";
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
import { useGetAllPropertyAnalyticsQuery, useGetAllSoldPropertiesQuery } from "../../../redux/api/analyticsApi";

const PropertiesGraph = () => {
  const [graphData, setGraphData] = useState([]);
  const { data: propertyAnalyticsData } = useGetAllPropertyAnalyticsQuery();
  const { data: soldPropertiesData } = useGetAllSoldPropertiesQuery();
  

  // useEffect(() => {
  //   if (propertyAnalyticsData && soldPropertiesData) {
  //     // Assuming both APIs return data in a monthly format. Adjust the logic based on the actual API response structure.
  //     const mergedData = propertyAnalyticsData.map((monthData, index) => {
  //       const soldData = soldPropertiesData[index]; // Match by index or month
  //       return {
  //         month: monthData.month,
  //         propertiesListed: monthData.propertiesListed,
  //         revenueGenerated: monthData.revenue_generated,
  //         propertiesUnderOffer: monthData.propertiesUnderOffer,
  //         propertiesSoldRentedByMonth: soldData.propertiesSoldRentedByMonth,
  //         // Add other fields as needed
  //       };
  //     });
  //     setGraphData(mergedData);
  //   }
  // }, [propertyAnalyticsData, soldPropertiesData]);
  // useEffect(() => {
  //   if (propertyAnalyticsData && soldPropertiesData) {
  //     // Transforming propertyAnalyticsData to an array if it's an object
  //     const propertyDataArray = Array.isArray(propertyAnalyticsData) 
  //       ? propertyAnalyticsData 
  //       : Object.values(propertyAnalyticsData);
  
  //     // Merging data
  //     const mergedData = propertyDataArray.map((monthData, index) => {
  //       const soldData = soldPropertiesData[index]; // Match by index or month
  //       return {
  //         // ... same as before
  //       };
  //     });
  
  //     setGraphData(mergedData);
  //   }
  // }, [propertyAnalyticsData, soldPropertiesData]);
  useEffect(() => {
    if (propertyAnalyticsData && soldPropertiesData) {
      const mergedData = Object.keys(propertyAnalyticsData).map(month => {
        const monthData = propertyAnalyticsData[month];
        const soldData = soldPropertiesData[month];
  
        return {
          month,
          propertiesListed: monthData ? monthData.propertiesListed : 0,
          revenueGenerated: monthData ? monthData.revenue_generated : 0,
          propertiesUnderOffer: monthData ? monthData.propertiesUnderOffer : 0,
          propertiesSoldRentedByMonth: soldData ? soldData.propertiesSoldRentedByMonth : 0,
          // Add other fields as needed
        };
      });
  
      setGraphData(mergedData);
    }
  }, [propertyAnalyticsData, soldPropertiesData]);
  
  
  console.log(graphData)

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
          <YAxis yAxisId="left" orientation="left" stroke="#00C800" />
          <YAxis yAxisId="right" orientation="right" stroke="#191B2A" />
          <Tooltip />
          <Legend />
          <Bar yAxisId="left" dataKey="propertiesListed" fill="#737791" />
          <Bar yAxisId="right" dataKey="revenueGenerated" fill="#191B2A" />
          <Bar yAxisId="right" dataKey="propertiesUnderOffer" fill="red" />
          <Bar yAxisId="right" dataKey="propertiesSoldRentedByMonth" fill="#00C800" />
        </BarChart>
      </Box>
    </Box>
  );
};

export default PropertiesGraph;
