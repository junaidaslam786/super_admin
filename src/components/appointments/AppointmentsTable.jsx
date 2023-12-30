import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Typography,
  Avatar,
  Button,
  createTheme,
  ThemeProvider,
  Dialog,
  DialogTitle,
  DialogContent,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import moment from "moment";
import DetailModal from "./DetailModal";
import { useGetPropertyByIdQuery } from "../../redux/api/propertyManagementApi";

const AppointmentsTable = ({ appointmentsData }) => {
  const thematic = createTheme({
    palette: {
      primary: {
        main: "#00C800",
        contrastText: "#fff",
      },
    },
  });

  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [selectedProductId, setSelectedProductId] = useState(null);

  const { data: propertyData } = useGetPropertyByIdQuery(selectedProductId, {
    skip: !selectedProductId, // Skip the query if no product ID is set
  });

  useEffect(() => {
    if (selectedAppointment?.products?.length > 0) {
      // Assuming the first product's ID is what you need
      setSelectedProductId(selectedAppointment.products[0].id);
    }
  }, [selectedAppointment]);

  const handleViewClick = (appointment) => {
    setSelectedAppointment(appointment);
  };

  const handleCloseModal = () => {
    setSelectedAppointment(null);
    setSelectedProductId(null);
  };

  if (!appointmentsData || appointmentsData.totalItems === 0) {
    return <Typography>No Appointments Found</Typography>;
  }

  return (
    <Box sx={{ width: "100%", overflowX: "auto" }}>
      <TableContainer
        component={Paper}
        sx={{ maxWidth: "100%", margin: "auto", mt: 4, mb: 4 }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="appointments table">
          <TableHead>
            <TableRow>
              {/* Define columns */}
              <TableCell>Customer</TableCell>
              <TableCell>Agent</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Time Slot</TableCell>
              <TableCell>Status</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {appointmentsData.data.map((appointment) => (
              <TableRow key={appointment.id}>
                <TableCell component="th" scope="row">
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Avatar src={appointment.customerUser.profileImage} />
                    {`${appointment.customerUser.firstName} ${appointment.customerUser.lastName}`}
                  </Box>
                </TableCell>
                <TableCell>
                  {`${appointment.allotedAgentUser.firstName} ${appointment.allotedAgentUser.lastName}`}
                </TableCell>
                <TableCell>
                  {moment(appointment.appointmentDate).format("LL")}
                </TableCell>
                <TableCell>{appointment.agentTimeSlot.textShow}</TableCell>
                <TableCell>{appointment.status}</TableCell>
                <TableCell align="right">
                  <ThemeProvider theme={thematic}>
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={() => handleViewClick(appointment)}
                    >
                      View
                    </Button>
                  </ThemeProvider>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Modal */}
      <DetailModal
        selectedAppointment={selectedAppointment}
        propertyData={propertyData}
        onClose={handleCloseModal}
      />
    </Box>
  );
};

export default AppointmentsTable;
