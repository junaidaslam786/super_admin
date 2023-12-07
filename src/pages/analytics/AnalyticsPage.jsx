
import React, { useRef } from "react";
import { Grid, Box } from "@mui/material";
import AnalyticsLayout from '../../layout/AnalyticsLayout';
import TokensList from "../../components/analytics/lists/TokensList";
import ServicesList from "../../components/analytics/lists/ServicesList";
import CustomersList from "../../components/analytics/lists/CustomersList";
import TradersList from "../../components/analytics/lists/TradersList";
import PropertiesList from "../../components/analytics/lists/PropertiesList";
import ServicesGraph from "../../components/analytics/graphs/ServicesGraph";
import TokensGraph from "../../components/analytics/graphs/TokensGraph";
import CustomersGraph from "../../components/analytics/graphs/CustomersGraph";
import TradersGraph from "../../components/analytics/graphs/TradersGraph";
import PropertiesGraph from "../../components/analytics/graphs/PropertiesGraph";

const AnalyticsPage = () => {
  const sectionRefs = {
    // services: useRef(null),
    tokens: useRef(null),
    customers: useRef(null),
    traders: useRef(null),
    properties: useRef(null),
  };

  return (
    <AnalyticsLayout sectionRefs={sectionRefs}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          {/* Services Section */}
          {/* <Box ref={sectionRefs.services}>
            <ServicesList />
            <ServicesGraph />
          </Box> */}

          {/* Tokens Section */}
          <Box ref={sectionRefs.tokens}>
            <TokensList />
            <TokensGraph />
          </Box>

          {/* Customers Section */}
          <Box ref={sectionRefs.customers}>
            <CustomersList />
            <CustomersGraph />
          </Box>

          {/* Traders Section */}
          <Box ref={sectionRefs.traders}>
            <TradersList />
            <TradersGraph />
          </Box>

          {/* Properties Section */}
          <Box ref={sectionRefs.properties}>
            <PropertiesList />
            <PropertiesGraph />
          </Box>

          {/* Add more sections as needed */}
        </Grid>
      </Grid>
    </AnalyticsLayout>
  );
};

export default AnalyticsPage;
