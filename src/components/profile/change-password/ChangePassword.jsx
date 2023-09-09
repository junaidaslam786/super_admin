import React, { useState, useEffect } from "react";

import { TextField, Button, Typography, Box } from "@mui/material";

import styles from "./ChangePassword.module.css";
import { useChangeSuperAdminPasswordMutation } from "../../../redux/api/authApi";

import { useAppSelector } from "../../../redux/store";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../../redux/features/userSlice";

import { toast } from "react-toastify";
import { CustomErrorMessage } from "../../../utils/CustomErrorMessage";

const ChangePassword = () => {
  const userState = useAppSelector((state) => state.userState);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const [email, setEmail] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const [changePassword, { isSuccess, isError, error }] =
    useChangeSuperAdminPasswordMutation();

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    try {
      const response = await changePassword({
        id: userState.user.id,
        oldPassword,
        newPassword,
        confirmNewPassword,
      });

      if (response.data && response.data.user) {
        dispatch(setUser(response.data.user));
      }
      // Handle success, maybe show a success message or redirect
    } catch (err) {
      // Handle error, maybe show an error message
    }
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Password updated successfully!");
      navigate("/dashboard");
    }
    if (isError) {
      toast.error("There was an error updating the password.");
      const errorMessage = CustomErrorMessage(error); // Extract error message using the utility
      toast.error(errorMessage);
    }
  }, [isSuccess, isError]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        marginTop: "4vh",
        marginBottom: "2vh",
        backgroundColor: "white",
        boxShadow: "0 0 2px rgba(0, 0, 0, 0.5)",
        padding: "3vh",
        width: "100%",
      }}
    >
      <Box sx={{ marginBottom: "3vh" }}>
        <Typography variant="p" letterSpacing="1px" fontWeight='600' sx={{fontSize:'3vmin'}}>
          Change Password
        </Typography>
        <Typography color="#737791" sx={{fontSize:'1.5vmin'}} >
          Create a strong password to safeguard your personal and sensitive
          information
        </Typography>
      </Box>
      <form onSubmit={handlePasswordChange}>
        <TextField
          label="Current password"
          type="password"
          placeholder="Enter current password"
          fullWidth
          sx={{ marginBottom: "2vh" }}
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
          InputLabelProps={{
            style:{
              color:'#00C800',
            }
          }}
        />
        <TextField
          label="New password"
          type="password"
          placeholder="Enter new password"
          fullWidth
          sx={{ marginBottom: "2vh" }}
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          InputLabelProps={{
            style:{
              color:'#00C800',
            }
          }}
        />
        <TextField
          label="Confirm New password"
          type="password"
          placeholder="Confirm password"
          fullWidth
          sx={{ marginBottom: "2vh" }}
          value={confirmNewPassword}
          onChange={(e) => setConfirmNewPassword(e.target.value)}
          InputLabelProps={{
            style:{
              color:'#00C800',
            }
          }}
        />
        <Button
          variant="outlined"
          color="primary"
          type="submit"
          sx={{
            width: "20vmin",
            height: "6vmin",
            color: "#00C800",
            border:'0.1vmin solid #00C800',
            fontSize:'1vmin',
            "&:hover": { backgroundColor: "#00C800", color: "white", border:'0.1vmin solid #00C800' },
          }}
        >
          Update Password
        </Button>
      </form>
    </Box>
  );
};

export default ChangePassword;
