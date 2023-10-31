import React from "react";
import { Box, Typography, TextField, Button, InputLabel, Select, MenuItem, FormControl } from "@mui/material";

const Subscription = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "86vh",
        backgroundColor: "#FAFBFC",
        padding: "10vmin 0 0 5vmin",
      }}
    >
      <Box
        sx={{
          backgroundColor: "white",
          padding: "4vmin",
          boxShadow: "0px 0px 2px black",
          width: "70%",
          display: "flex",
          flexDirection: "column",
          borderRadius:'0.3vmin'
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: "5vmin",
              fontWeight: "600",
              fontFamily: "Helvetica, sans-serif",
            }}
          >
            Subscriber Details
          </Typography>
          <Typography
            sx={{
              fontSize: "2vmin",
              color: "#737791",
            }}
          >
            Add the details here
          </Typography>
        </Box>
        <Box
        sx={{
            display:'flex',
            flexDirection:'row',
            marginTop:'6vmin'
        }}
        >
            <TextField
              label="Agent Name"
              fullWidth
              sx={{ marginBottom: "2vh", marginRight: "2vw" }}
              InputLabelProps={{
                style: {
                  color: "#00C800",
                },
              }}
            />
            <TextField
              label="Date Joined"
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
            display:'flex',
            flexDirection:'row',
            marginTop:'4vmin'
        }}
        >
            <FormControl
              fullWidth
              variant="outlined"
              sx={{ marginBottom: "2vh", marginRight: "2vw" }}
            >
              <InputLabel
                id="demo-simple-select-label"
                sx={{
                  color: "#00C800",
                  "&.MuiInputLabel-shrink": { color: "#00C800" },
                }}
              >
                Role
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="No. of Bedrooms"
              >
                <MenuItem value={0}>Admin</MenuItem>
                <MenuItem value={1}>Trader</MenuItem>
                <MenuItem value={2}>Customer</MenuItem>
              </Select>
            </FormControl>
            <FormControl
              fullWidth
              variant="outlined"
              sx={{ marginBottom: "2vh" }}
            >
              <InputLabel
                id="demo-simple-select-label"
                sx={{
                  color: "#00C800",
                  "&.MuiInputLabel-shrink": { color: "#00C800" },
                }}
              >
                Subscription Plan
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="No. of Bedrooms"
              >
                <MenuItem value={0}>Free</MenuItem>
                <MenuItem value={1}>Standard</MenuItem>
                <MenuItem value={2}>Premium</MenuItem>
              </Select>
            </FormControl>
        </Box>
        <Box
        sx={{
            marginTop:'4vmin'
        }}
        >
        <Button
                variant="contained"
                type="submit"
                sx={{
                  border: "0.1vmin solid #00C800",
                  color: "white",
                  fontSize: "1.5vmin",
                  backgroundColor:'#00C800',
                  padding:'0',
                  width: "20vmin",
                  height: "7vmin",
                  "&:hover": {
                    backgroundColor: "#00C800",
                    color: "white",
                    border: "0.1vmin solid #00C800",
                  },
                }}
              >
                Add
              </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Subscription;
