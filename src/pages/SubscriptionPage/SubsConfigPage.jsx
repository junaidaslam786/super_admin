

import React, { useState, useEffect } from 'react';
import SubsLayout from '../../layout/SubsLayout';
import SubsConfig from '../../components/Subscription/SubsConfig';
import { useGetAllFeatureQuery } from '../../redux/api/featureManagementApi'; 

const SubsConfigPage = () => {

  const slotsLabelMapping = {
    'Video Call': 'Number of slots',
    'Property Listing': 'Number of properties',
    'API Subscription': 'Number of API calls',
    'Analytics & Reporting': 'Number of reports'
  };
  const freeLabelMapping = {
    'Video Call': 'Free Slots',
    'Property Listing': 'Free Property listings',
    'API Subscription': 'Free API calls',
    'Analytics & Reporting': 'Free Reports'
  };

  const { data: features, isLoading, isError } = useGetAllFeatureQuery();
  console.log(features);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading features</div>;
  }

  return (
    <SubsLayout>
      {/* List all features here */}
      {features && features.map((feature) => {
        // Get the correct slots label for the current feature
        const slotsLabel = slotsLabelMapping[feature.name] || 'Number of slots';
        const freeLabel = freeLabelMapping[feature.name] || 'Free Slots';

        return (
          <div key={feature.id}>
            {/* Pass the slotsLabel to the SubsConfig component */}
            <SubsConfig featureName={feature.name} featureId={feature.id} slotsLabel={slotsLabel} freeLabel={freeLabel}/>
          </div>
        );
      })}
    </SubsLayout>
  );
};

export default SubsConfigPage;
