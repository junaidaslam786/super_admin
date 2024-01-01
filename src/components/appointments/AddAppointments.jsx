import React from "react";
import {
  TextField,
  Typography,
  Box,
  Select,
  InputLabel,
  MenuItem,
  FormControl,
  Button,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const AddAppointments = () => {
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
      <Box>
        <Typography
          sx={{
            fontSize: "3vmin",
            fontWeight: "600",
            fontFamily: "helvetica",
            marginBottom: "2vh",
          }}
        >
          Add Appointments
        </Typography>
        <FormControl fullWidth variant="outlined" sx={{ marginBottom: "2vh" }}>
          <InputLabel
            id="select-property-label"
            sx={{
              color: "#00C800",
              "&.MuiInputLabel-shrink": { color: "#00C800" },
            }}
          >
            Select Property*
          </InputLabel>
          <Select
            labelId="property-select-label"
            id="property-select"
            label="Select Property"
          >
            <MenuItem value="another">Another</MenuItem>
            <MenuItem value="andAnother">And Another</MenuItem>
          </Select>
        </FormControl>
      </Box>
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
            sx={{ marginBottom:'2vh', marginRight: isTab ? "0" : "2vw", height: isMobile ? "15vmin" : isMobile ? "6vmin" : "4vmin" }}
          >
            Request Now
          </Button>
        </ThemeProvider>
        <TextField
          label="Select Date*"
          placeholder="12/12/2000"
          fullWidth
          sx={{ marginBottom: "2vh", marginRight: isTab ? "0" : "2vw" }}
          InputLabelProps={{
            style: {
              color: "#00C800",
            },
          }}
        />
        <TextField
          label="Choose Time*"
          placeholder="12:12:12"
          fullWidth
          sx={{ marginBottom: "2vh" }}
          InputLabelProps={{
            style: {
              color: "#00C800",
            },
          }}
        />
      </Box>
      <Box
        sx={{
            display: "flex",
            flexDirection: isTab ? "column" : "row",
            width: "100%",
        }}
      >
        <FormControl
          fullWidth
          variant="outlined"
          sx={{ marginBottom: "2vh", marginRight: isTab ? "0" : "2vw" }}
        >
          <InputLabel
            id="customer-name"
            sx={{
              color: "#00C800",
              "&.MuiInputLabel-shrink": { color: "#00C800" },
            }}
          >
            Customer Name
          </InputLabel>
          <Select label="Customer Name">
            <MenuItem value="another">Another</MenuItem>
            <MenuItem value="andAnother">And Another</MenuItem>
          </Select>
        </FormControl>
        <TextField
          label="Customer Email"
          placeholder="customer@gmail.com"
          fullWidth
          sx={{ marginBottom: "2vh" }}
          InputLabelProps={{
            style: {
              color: "#00C800",
            },
          }}
        />
      </Box>
      <Box
        sx={{
            display: "flex",
            flexDirection: isTab ? "column" : "row",
            width: "100%",
        }}
      >
        <TextField
          label="Customer Phone"
          placeholder="+1234567890"
          fullWidth
          sx={{ marginBottom: "2vh", marginRight: isTab ? "0" : "2vw" }}
          InputLabelProps={{
            style: {
              color: "#00C800",
            },
          }}
        />
        <FormControl fullWidth variant="outlined" sx={{ marginBottom: "2vh" }}>
          <InputLabel
            id="assign-to"
            sx={{
              color: "#00C800",
              "&.MuiInputLabel-shrink": { color: "#00C800" },
            }}
          >
            Assign To
          </InputLabel>
          <Select label="Assign To">
            <MenuItem value="another">Another</MenuItem>
            <MenuItem value="andAnother">And Another</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box>
        <ThemeProvider theme={thematic}>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </ThemeProvider>
      </Box>
    </Box>
  );
};

export default AddAppointments;
