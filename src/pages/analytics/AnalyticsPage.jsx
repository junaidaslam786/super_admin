import React from "react";
import AnalyticsLayout from '../../layout/AnalyticsLayout'
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
  return (
    <AnalyticsLayout>
      <ServicesList />
      <ServicesGraph />
      <TokensList />
      <TokensGraph />
      <CustomersList />
      <CustomersGraph />
      <TradersList />
      <TradersGraph />
      <PropertiesList />
      <PropertiesGraph />
    </AnalyticsLayout>
  );
};

export default AnalyticsPage;
