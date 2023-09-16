import React from "react";
import {
  TextField,
  Typography,
  Grid,
  Box,
  Select,
  InputLabel,
  MenuItem,
  FormControl,
} from "@mui/material";

const PropertyDesciption = () => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        padding: "3vh",
        width: "100%",
        boxShadow: '0px 1px 4px black'
      }}
    >
      <Grid item>
        <Typography
          variant="p"
          fontWeight="600"
          letterSpacing="0.5px"
          sx={{ fontSize: "3vmin" }}
        >
          Property Description
        </Typography>
        <Typography color="#737791" sx={{ fontSize: "1.5vmin" }}>
          Add basic property details to attract potential buyers or tenants
        </Typography>
      </Grid>
      <Box sx={{ marginTop: "3vh" }}>
        <form>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <TextField
              label="Property Type*"
              placeholder="Home"
              // value=""
              fullWidth
              sx={{ marginBottom: "2vh" }}
              InputLabelProps={{
                style: {
                  color: "#00C800",
                  marginRight: "2vw",
                },
              }}
              style={{ marginRight: "2vw" }}
            />
            <FormControl fullWidth variant="outlined">
              <InputLabel
                id="demo-simple-select-label"
                sx={{
                  color: "#00C800",
                  "&.MuiInputLabel-shrink": { color: "#00C800" },
                }}
              >
                Property Sub Type*
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value=""
                // onChange={handleChange}
                label="Choose an Option"
              >
                <MenuItem value={10}>Option 1</MenuItem>
                <MenuItem value={20}>Option 2</MenuItem>
                <MenuItem value={30}>Option 3</MenuItem>
              </Select>
            </FormControl>
          </Box>
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
              Property Category*
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // value=""
              // onChange={handleChange}
              label="Property Category"
            >
              <MenuItem value={10}>Option 1</MenuItem>
              <MenuItem value={20}>Option 2</MenuItem>
              <MenuItem value={30}>Option 3</MenuItem>
            </Select>
          </FormControl>
          <TextField
            label="Property Name*"
            placeholder=""
            // value=""
            fullWidth
            sx={{ marginBottom: "2vh" }}
            InputLabelProps={{
              style: {
                color: "#00C800",
              },
            }}
          />
          <TextField
            label="Description"
            multiline
            rows={10}
            variant="outlined"
            fullWidth
            // value=""
            // onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter your description here..."
            sx={{
              marginBottom: "2vh",
            }}
            InputLabelProps={{
              style: {
                color: "#00C800",
              },
            }}
          />
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <TextField
              label="Price Type*"
              placeholder=""
              // value=""
              fullWidth
              sx={{ marginBottom: "2vh", marginRight: "2vw" }}
              InputLabelProps={{
                style: {
                  color: "#00C800",
                },
              }}
            />
            <TextField
              label="Price"
              placeholder="500000"
              // value=""
              fullWidth
              sx={{ marginBottom: "2vh" }}
              InputLabelProps={{
                style: {
                  color: "#00C800",
                },
              }}
            />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
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
                No. of Bedrooms
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value=""
                // onChange={handleChange}
                label="No. of Bedrooms"
              >
                <MenuItem value={10}>Option 1</MenuItem>
                <MenuItem value={20}>Option 2</MenuItem>
                <MenuItem value={30}>Option 3</MenuItem>
              </Select>
            </FormControl>
            <TextField
              label="Area*"
              placeholder="7500"
              // value=""
              fullWidth
              sx={{ marginBottom: "2vh", marginRight: "2vw" }}
              InputLabelProps={{
                style: {
                  color: "#00C800",
                },
              }}
            />
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
                Unit*
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value=""
                // onChange={handleChange}
                label="Unit"
              >
                <MenuItem value={10}>Option 1</MenuItem>
                <MenuItem value={20}>Option 2</MenuItem>
                <MenuItem value={30}>Option 3</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default PropertyDesciption;
