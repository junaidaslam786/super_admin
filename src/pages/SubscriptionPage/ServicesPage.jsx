import React, { useState, useEffect } from 'react';
import { Box, TextField, Button } from '@mui/material';
import SubsLayout from '../../layout/SubsLayout';
import Services from '../../components/Subscription/Services';
import { 
  useCreateFeatureMutation, 
  useGetAllFeatureQuery  // <-- Import the query hook
} from '../../redux/api/featureManagementApi';

const ServicesPage = () => {
  const [newService, setNewService] = useState('');

  // Use the mutation hook
  const [createFeature, { isLoading: isCreating }] = useCreateFeatureMutation();

  // Use the query hook with skip option
  const { data: servicesList, isLoading: isFetching, isError, refetch } = useGetAllFeatureQuery();


  useEffect(() => {
    refetch();  // Refetch the query when the component mounts
  }, []);

  const addService = async () => {
    if (newService.trim() !== '') {
      try {
        await createFeature({ name: newService }).unwrap();
        setNewService('');  // Clear the input after adding

        // Refetch the getAllFeature query
        refetch();

      } catch (error) {
        console.error('Failed to add new service:', error);
      }
    }
  };

  if (isFetching) return <div>Loading...</div>;
  if (isError) return <div>Error loading features</div>;


  return (
    <SubsLayout>
      <Box display="flex" flexDirection="row" gap={2} alignItems="center">
        <TextField 
          variant="outlined"
          size="small"
          value={newService}
          onChange={e => setNewService(e.target.value)}
          placeholder="Enter new service"
        />
        <Button variant="contained" color="primary" onClick={addService} disabled={isCreating}>
          Save
        </Button>
      </Box>
      
      {servicesList.map((service, index) => (
        <Services key={index} name={service.name} />
      ))}
    </SubsLayout>
  )
}

export default ServicesPage;
