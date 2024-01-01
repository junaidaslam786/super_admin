import React, { useState } from "react";
import { DatePicker, TimePicker } from "@mui/lab";
import {
  TextField,
  Typography,
  Box,
  FormControl,
  Button,
  createTheme,
  ThemeProvider,
  Autocomplete,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useAddAppointmentsMutation } from "../../redux/api/appointmentsApi";
import { useGetAllUsersExceptSuperAdminQuery } from "../../redux/api/userManagementApi";
import { useGetAllPropertiesQuery } from "../../redux/api/propertyManagementApi";

const AddAppointments = () => {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [selectedAgent, setSelectedAgent] = useState(null);

  const { data: properties, isLoading: propertiesLoading } =
    useGetAllPropertiesQuery();
  const { data: users, isLoading: customersLoading } =
    useGetAllUsersExceptSuperAdminQuery();

  const [addAppointment, { isLoading: addAppointmentLoading }] =
    useAddAppointmentsMutation();

  const handleSubmit = () => {
    const appointmentData = {
      propertyId: selectedProperty?.id,
      date: selectedDate,
      time: selectedTime,
      customerId: selectedCustomer?.id,
      customerEmail: selectedCustomer?.email,
      customerPhone: selectedCustomer?.phone,
      agentId: selectedAgent?.id,
      // ...other data as needed
    };
    addAppointment(appointmentData);
  };

  const theme = useTheme();
  const isTab = useMediaQuery(theme.breakpoints.down("md"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const thematic = createTheme({
    palette: {
      primary: {
        main: "#00C800",
        contrastText: "#fff",
      },
    },
  });
  return (
    <Box
      sx={{
        backgroundColor: "white",
        padding: "3vh",
        width: "90%",
        margin: "5vmin",
        boxShadow: "0px 0px 1px black",
      }}
    >
      <Typography variant="h6" sx={{ marginBottom: "2vh" }}>
        Add Appointments
      </Typography>

      {/* Select Property */}
      <FormControl fullWidth sx={{ marginBottom: "2vh" }}>
        <Autocomplete
          options={properties || []}
          getOptionLabel={(option) => option.name}
          onChange={(event, newValue) => setSelectedProperty(newValue)}
          renderInput={(params) => (
            <TextField {...params} label="Select Property" />
          )}
        />
      </FormControl>

      {/* Date and Time Selection */}
      <Box
        sx={{
          display: "flex",
          flexDirection: isTab ? "column" : "row",
          width: "100%",
        }}
      >
        <ThemeProvider theme={thematic}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              marginBottom: "2vh",
              marginRight: isTab ? "0" : "2vw",
              height: isMobile ? "15vmin" : "6vmin",
            }}
          >
            Request Now
          </Button>
        </ThemeProvider>
        <DatePicker
          label="Select Date"
          value={selectedDate}
          onChange={setSelectedDate}
          renderInput={(params) => (
            <TextField
              {...params}
              sx={{ marginBottom: "2vh", marginRight: isTab ? "0" : "2vw" }}
            />
          )}
        />
        <TimePicker
          label="Choose Time"
          value={selectedTime}
          onChange={setSelectedTime}
          renderInput={(params) => (
            <TextField {...params} sx={{ marginBottom: "2vh" }} />
          )}
        />
      </Box>

      {/* Select Customer */}
      <Box
        sx={{
          display: "flex",
          flexDirection: isTab ? "column" : "row",
          width: "100%",
        }}
      >
        <FormControl
          fullWidth
          sx={{ marginBottom: "2vh", marginRight: isTab ? "0" : "2vw" }}
        >
          <Autocomplete
            options={
              users?.filter((user) => user.userType !== "superadmin") || []
            }
            getOptionLabel={(option) => option.name}
            onChange={(event, newValue) => setSelectedCustomer(newValue)}
            renderInput={(params) => (
              <TextField {...params} label="Customer Name" />
            )}
          />
        </FormControl>
        <TextField
          label="Customer Email"
          value={selectedCustomer?.email || ""}
          fullWidth
          sx={{ marginBottom: "2vh" }}
          disabled
        />
      </Box>

      {/* Customer Phone and Assign To */}
      <Box
        sx={{
          display: "flex",
          flexDirection: isTab ? "column" : "row",
          width: "100%",
        }}
      >
        <TextField
          label="Customer Phone"
          value={selectedCustomer?.phone || ""}
          fullWidth
          sx={{ marginBottom: "2vh", marginRight: isTab ? "0" : "2vw" }}
          disabled
        />
        <FormControl fullWidth sx={{ marginBottom: "2vh" }}>
          <Autocomplete
            options={users?.filter((user) => user.userType === "agent") || []}
            getOptionLabel={(option) => option.name}
            onChange={(event, newValue) => setSelectedAgent(newValue)}
            renderInput={(params) => (
              <TextField {...params} label="Assign To" />
            )}
          />
        </FormControl>
      </Box>

      {/* Submit Button */}
      <Box>
        <ThemeProvider theme={thematic}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </ThemeProvider>
      </Box>
    </Box>
  );

  
};

export default AddAppointments;
