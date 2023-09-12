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
  Card,
  CardMedia,
} from "@mui/material";
import Image from "../../../assets/UserImage.png";

const ListingLocation = () => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        padding: "3vh",
        width: "100%",
        marginTop: "5vmin",
        boxShadow: "0px 1px 4px black",
      }}
    >
      <Grid item sx={{ marginBottom: "2vmin" }}>
        <Typography
          variant="p"
          fontWeight="600"
          letterSpacing="0.5px"
          sx={{ fontSize: "3vmin" }}
        >
          Listing Location
        </Typography>
      </Grid>
      <TextField
        label="Address*"
        placeholder="624 Queens Rd, Gainesville, FL 32607, USA"
        value=""
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
      <Card>
        <CardMedia
          component="img"
          fullWidth
          image={Image}
          alt="Image Description"
          sx={{
            height: "50vmin",
          }}
        />
      </Card>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <TextField
          label="City"
          value=""
          fullWidth
          sx={{ marginBottom: "2vh", marginTop: "5vh" }}
          InputLabelProps={{
            style: {
              color: "#00C800",
              marginRight: "2vw",
            },
          }}
          style={{ marginRight: "2vw" }}
        />
        <TextField
          label="Postal Code"
          value=""
          fullWidth
          sx={{ marginBottom: "2vh", marginTop: "5vh" }}
          InputLabelProps={{
            style: {
              color: "#00C800",
              marginRight: "2vw",
            },
          }}
          style={{ marginRight: "2vw" }}
        />
        <TextField
          label="Region"
          value=""
          fullWidth
          sx={{ marginBottom: "2vh", marginTop: "5vh" }}
          InputLabelProps={{
            style: {
              color: "#00C800",
              marginRight: "2vw",
            },
          }}
        />
      </Box>
      <FormControl fullWidth variant="outlined">
        <InputLabel
          id=""
          sx={{
            color: "#00C800",
            "&.MuiInputLabel-shrink": { color: "#00C800" },
          }}
        >
          Alloted To
        </InputLabel>
        <Select
          labelId=""
          id="demo-simple-select"
          value=""
          // onChange={handleChange}
          label="Choose an Option"
        >
          <MenuItem value={10}>Option 1</MenuItem>
          <MenuItem value={20}>Option 2</MenuItem>
          <MenuItem value={30}>Option 3</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default ListingLocation;
