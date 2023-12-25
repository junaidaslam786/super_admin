// import React, { useRef } from "react";
// import { Grid, Box } from "@mui/material";
// import AnalyticsLayout from '../../layout/AnalyticsLayout';
// import TokensList from "../../components/analytics/lists/TokensList";
// import ServicesList from "../../components/analytics/lists/ServicesList";
// import CustomersList from "../../components/analytics/lists/CustomersList";
// import TradersList from "../../components/analytics/lists/TradersList";
// import PropertiesList from "../../components/analytics/lists/PropertiesList";
// import ServicesGraph from "../../components/analytics/graphs/ServicesGraph";
// import TokensGraph from "../../components/analytics/graphs/TokensGraph";
// import CustomersGraph from "../../components/analytics/graphs/CustomersGraph";
// import TradersGraph from "../../components/analytics/graphs/TradersGraph";
// import PropertiesGraph from "../../components/analytics/graphs/PropertiesGraph";
// import Reports from "../../components/analytics/reports/Reports";

// const AnalyticsPage = () => {
//   const sectionRefs = {
//     // services: useRef(null),
//     tokens: useRef(null),
//     customers: useRef(null),
//     traders: useRef(null),
//     properties: useRef(null),
//     reports: useRef(null),
//   };

//   return (
//     <AnalyticsLayout sectionRefs={sectionRefs}>
//       <Grid container spacing={3}>
//         <Grid item xs={12}>
//           {/* Services Section */}
//           {/* <Box ref={sectionRefs.services}>
//             <ServicesList />
//             <ServicesGraph />
//           </Box> */}

//           {/* Tokens Section */}
//           <Box ref={sectionRefs.tokens}>
//             <TokensList />
//             <TokensGraph />
//           </Box>

//           {/* Customers Section */}
//           <Box ref={sectionRefs.customers}>
//             <CustomersList />
//             <CustomersGraph />
//           </Box>

//           {/* Traders Section */}
//           <Box ref={sectionRefs.traders}>
//             <TradersList />
//             <TradersGraph />
//           </Box>

//           {/* Properties Section */}
//           <Box ref={sectionRefs.properties}>
//             <PropertiesList />
//             <PropertiesGraph />
//           </Box>

//           {/* Reports Section */}
//           <Box ref={sectionRefs.reports}>
//             <Reports />
//           </Box>

//           {/* Add more sections as needed */}
//         </Grid>
//       </Grid>
//     </AnalyticsLayout>
//   );
// };

// export default AnalyticsPage;

import React, { useRef } from "react";
import { Grid, Box } from "@mui/material";
import AnalyticsLayout from "../../layout/AnalyticsLayout";
import TokensList from "../../components/analytics/lists/TokensList";
import CustomersList from "../../components/analytics/lists/CustomersList";
import TradersList from "../../components/analytics/lists/TradersList";
import PropertiesList from "../../components/analytics/lists/PropertiesList";
import TokensGraph from "../../components/analytics/graphs/TokensGraph";
import CustomersGraph from "../../components/analytics/graphs/CustomersGraph";
import TradersGraph from "../../components/analytics/graphs/TradersGraph";
import PropertiesGraph from "../../components/analytics/graphs/PropertiesGraph";
import Reports from "../../components/analytics/reports/Reports";

const AnalyticsPage = () => {
  const sectionRefs = {
    tokens: useRef(null),
    customers: useRef(null),
    traders: useRef(null),
    properties: useRef(null),
    reports: useRef(null),
  };

  return (
    <AnalyticsLayout sectionRefs={sectionRefs}>
      <Grid container spacing={3}>
        {/* Tokens Section */}
        <Grid item xs={12} ref={sectionRefs.tokens}>
          <TokensList />
          <TokensGraph />
        </Grid>

        {/* Customers Section */}
        <Grid item xs={12} ref={sectionRefs.customers}>
          <CustomersList />
          <CustomersGraph />
        </Grid>

        {/* Traders Section */}
        <Grid item xs={12} ref={sectionRefs.traders}>
          <TradersList />
          <TradersGraph />
        </Grid>

        {/* Properties Section */}
        <Grid item xs={12} ref={sectionRefs.properties}>
          <PropertiesList />
          <PropertiesGraph />
        </Grid>

        {/* Reports Section */}
        <Grid item xs={12} ref={sectionRefs.reports}>
          <Reports />
        </Grid>

        {/* Add more sections as needed */}
      </Grid>
    </AnalyticsLayout>
  );
};

export default AnalyticsPage;
