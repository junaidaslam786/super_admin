import React, { useState } from "react";
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
import { useRegisterUnifiedUserMutation } from "../../redux/api/authApi";

const CreateUser = () => {
  const [registerUnifiedUser, { isLoading, isError, isSuccess, data }] =
    useRegisterUnifiedUserMutation();

  // Local state for form fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userType, setUserType] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      userType,
    };
    await registerUnifiedUser(formData);
  };
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
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: "flex", flexDirection: "row", marginTop: "3vh" }}>
          <TextField
            label="First Name"
            placeholder="John"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
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
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            sx={{ marginBottom: "2vh" }}
            InputLabelProps={{
              style: {
                color: "#00C800",
              },
            }}
          />
          <TextField
            label="Confirm Password"
            placeholder="Confirm Password..."
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
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
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
            label="Choose an Option"
          >
            <MenuItem value="admin">Admin</MenuItem>
            <MenuItem value="agent">Trader</MenuItem>
            <MenuItem value="customer">Customer</MenuItem>
          </Select>
        </FormControl>
        <Box sx={{ marginTop: "4vh", display: "flex", flexDirection: "row" }}>
          <Button
            variant="outlined"
            color="primary"
            onClick={handleSubmit}
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
      </form>
      {isLoading && <div>Loading...</div>}
      {isSuccess && <div>User registered successfully!</div>}
      {isError && <div>Error registering user.</div>}
    </Box>
  );
};

export default CreateUser;
