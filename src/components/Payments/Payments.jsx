import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";

const Payments = () => {
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
            Payment Details
          </Typography>
          <Typography
            sx={{
              fontSize: "2vmin",
              color: "#737791",
            }}
          >
            Add payment details here
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
              label="Full Name"
              fullWidth
              sx={{ marginBottom: "2vh", marginRight: "2vw" }}
              InputLabelProps={{
                style: {
                  color: "#00C800",
                },
              }}
            />
            <TextField
              label="email"
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
            <TextField
              label="Phone No#"
              fullWidth
              sx={{ marginBottom: "2vh", marginRight: "2vw" }}
              InputLabelProps={{
                style: {
                  color: "#00C800",
                },
              }}
            />
            <TextField
              label="Amount (in dollars)"
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
                Send Request
              </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Payments;
