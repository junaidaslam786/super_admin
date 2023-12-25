import React from 'react';
import AppointmentsTable from './AppointmentsTable';
import { useListAppointmentsQuery } from '../../redux/api/appointmentsApi'

const ListAppointments = () => {
  const { data: appointmentsData, isLoading, error } = useListAppointmentsQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error occurred: {error.message}</p>;

  return (
    <AppointmentsTable appointmentsData={appointmentsData} />
  );
};

export default ListAppointments;
