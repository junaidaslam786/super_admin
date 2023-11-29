import React, { useState, useEffect } from 'react';
import { Box, TextField, Button } from '@mui/material';
import SubsLayout from '../../layout/SubsLayout';
import Services from '../../components/Subscription/Services';
import { 
  useCreateFeatureMutation, 
  useGetAllFeatureQuery  // <-- Import the query hook
} from '../../redux/api/featureManagementApi';

const ServicesPage = () => {
  const {
    data: servicesList,
    isLoading: isFetching,
    isError
  } = useGetAllFeatureQuery();

  if (isFetching) {
    return <div>Loading...</div>; // Show loading state
  }

  if (isError || !servicesList) {
    return <div>Error loading services</div>; // Show error state or if servicesList is undefined
  }

  return (
    <SubsLayout>
      {servicesList.map((service, index) => (
        <Services key={index} name={service.name} id={service.id} />
      ))}
    </SubsLayout>
  );
};

export default ServicesPage;
