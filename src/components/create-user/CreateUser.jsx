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
  Button,
} from "@mui/material";

const CreateUser = () => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        padding: "3vh",
        margin: "5vh 5vw",
        width: "90%",
        boxShadow: "0px 1px 4px black",
      }}
    >
      <Grid item>
        <Typography
          variant="p"
          fontWeight="600"
          letterSpacing="0.5px"
          sx={{ fontSize: "3vmin" }}
        >
          Create New User
        </Typography>
        <Typography color="#737791" sx={{ fontSize: "1.5vmin" }}>
          Please fill all of the following departments
        </Typography>
      </Grid>
      <Box sx={{ display: "flex", flexDirection: "row", marginTop: "3vh" }}>
        <TextField
          label="First Name"
          placeholder="John"
          value=""
          fullWidth
          sx={{ marginBottom: "2vh" }}
          InputLabelProps={{
            style: {
              color: "#00C800",
            },
          }}
          style={{ marginRight: "2vw" }}
        />
        <TextField
          label="Second Name"
          placeholder="Doe"
          value=""
          fullWidth
          sx={{ marginBottom: "2vh" }}
          InputLabelProps={{
            style: {
              color: "#00C800",
            },
          }}
        />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row", marginTop: "2vh" }}>
        <TextField
          label="Email"
          placeholder="JohnDoe@abc.com"
          value=""
          fullWidth
          sx={{ marginBottom: "2vh" }}
          InputLabelProps={{
            style: {
              color: "#00C800",
            },
          }}
          style={{ marginRight: "2vw" }}
        />
        <TextField
          label="Password"
          placeholder="Create a Strong Password..."
          value=""
          fullWidth
          sx={{ marginBottom: "2vh" }}
          InputLabelProps={{
            style: {
              color: "#00C800",
            },
          }}
        />
      </Box>
      <FormControl fullWidth variant="outlined" sx={{ marginTop: "2vh" }}>
        <InputLabel
          id=""
          sx={{
            color: "#00C800",
            "&.MuiInputLabel-shrink": { color: "#00C800" },
          }}
        >
          User Type?
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value=""
          // onChange={handleChange}
          label="Choose an Option"
        >
          <MenuItem value={10}>Admin</MenuItem>
          <MenuItem value={20}>Trader</MenuItem>
          <MenuItem value={30}>Customer</MenuItem>
        </Select>
      </FormControl>
      <Box sx={{marginTop:'4vh', display:'flex', flexDirection:'row'}}>
        <Button
          variant="outlined"
          color="primary"
          sx={{
            border: "0.1vmin solid #00C800",
            color: "#00C800",
            fontSize: "1vmin",
            width: "15vmin",
            height: "5vmin",
            marginRight: "2vw",
            "&:hover": {
              backgroundColor: "#00C800",
              color: "white",
              border: "0.1vmin solid #00C800",
            },
          }}
        >
          Register
        </Button>
        <Button
          variant="outlined"
          color="primary"
          sx={{
            border: "0.1vmin solid red",
            color: "red",
            fontSize: "1vmin",
            width: "15vmin",
            height: "5vmin",
            "&:hover": {
              backgroundColor: "red",
              color: "white",
              border: "0.1vmin solid red",
            },
          }}
        >
          Discard
        </Button>
      </Box>
    </Box>
  );
};

export default CreateUser;
