import {
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Button,
  Typography,
  Box,
} from "@mui/material";
import React, { useState, useEffect } from "react";

const TimeZone = () => {
  const [selectedTimeZone, setSelectedTimeZone] = useState("");
  const [updated, setUpdated] = useState(false);

  // List of common IANA timezones
  const timeZones = [
    "UTC",
    "Europe/London",
    "Europe/Paris",
    "Europe/Berlin",
    "Europe/Moscow",
    "Asia/Kolkata",
    "Asia/Tokyo",
    "Asia/Shanghai",
    "America/New_York",
    "America/Chicago",
    "America/Denver",
    "America/Los_Angeles",
    "America/Sao_Paulo",
    "Africa/Cairo",
    "Africa/Johannesburg",
    "Australia/Sydney",
    "America/Toronto",
    "America/Mexico_City",
    "America/Bogota",
    "America/Buenos_Aires",
    "America/Santiago",
    "Asia/Seoul",
    "Asia/Singapore",
    "Asia/Hong_Kong",
    "Asia/Manila",
    "Asia/Bangkok",
    "Asia/Jakarta",
    "Asia/Dubai",
    "Asia/Karachi",
    "Europe/Rome",
    "Europe/Madrid",
    "Europe/Amsterdam",
    "Europe/Copenhagen",
    "Europe/Istanbul",
    "Pacific/Auckland",
    "America/Caracas",
    "Asia/Taipei",
  ];

  // Retrieve selected timezone from localStorage on component mount
  useEffect(() => {
    const savedTimeZone = localStorage.getItem("selectedTimeZone");
    if (savedTimeZone) {
      setSelectedTimeZone(savedTimeZone);
    }
  }, []);

  // Update selected timezone in state and localStorage
  const handleUpdate = () => {
    localStorage.setItem("selectedTimeZone", selectedTimeZone);
    setUpdated(true);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        marginTop: "4vh",
        backgroundColor: "white",
        boxShadow: "0 0 2px rgba(0, 0, 0, 0.5)",
        padding: "3vh",
        width: "100%",
      }}
    >
      <Box sx={{ marginBottom: "3vh" }}>
        <Typography variant="p" letterSpacing="1px" fontWeight='600' sx={{fontSize:'3vmin'}}>
          Update your timezone
        </Typography>
        <Typography color="#737791" sx={{fontSize:'1.5vmin'}}>
          Select & update your timezone for seamless collaboration and timely
          responses
        </Typography>
      </Box>
      <FormControl fullWidth variant="outlined" sx={{ marginBottom: "3vh"}} >
        <InputLabel sx={{color:'#00C800'}}>Time Zone</InputLabel>
        <Select
          value={selectedTimeZone}
          onChange={(e) => setSelectedTimeZone(e.target.value)}
          label="Time Zone"
        >
          {timeZones.map((tz, index) => (
            <MenuItem key={index} value={tz}>
              {tz}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button
        variant="outlined"
        color="primary"
        sx={{
          width: "20vmin",
          height: "6vmin",
          color: "#00C800",
          borderColor: "#00C800",
          fontSize:'1vmin',
          "&:hover": { backgroundColor: "#00C800", color: "white", borderColor:'#00C800' },
        }}
        onClick={handleUpdate}
      >
        Update
      </Button>
      {updated && <Typography>Your timezone updated successfully!</Typography>}
    </Box>
  );
};

export default TimeZone;
