import React, { useEffect, useState } from "react";
import styles from "./AccountDetails.module.css";
import {
  TextField,
  Button,
  Typography,
  Grid,
  Avatar,
  Box,
} from "@mui/material";
import {
  useProfileUpdateMutation,
  useUploadImageMutation,
} from "../../../redux/api/userApi";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../../redux/features/userSlice";
import { useAppSelector } from "../../../redux/store";

import { toast } from "react-toastify";
import { CustomErrorMessage } from "../../../utils/CustomErrorMessage";
import { BorderColor } from "@mui/icons-material";

function AccountDetails() {
  const userState = useAppSelector((state) => state.userState);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const [profileImage, setProfileImage] = useState(null);
  const [selectedImageFile, setSelectedImageFile] = useState(null);

  const [updateProfile, { isLoading, isError, isSuccess }] =
    useProfileUpdateMutation();
  const [uploadImage, { data, error }] = useUploadImageMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedFields = {
      ...(firstName && { firstName }),
      ...(lastName && { lastName }),
      ...(phoneNumber && { phoneNumber }),
      ...(email && { email }),
    };

    try {
      await updateProfile({ id: userState.user.id, userData: updatedFields });

      let updatedUserData = { ...userState.user, ...updatedFields };

      if (selectedImageFile) {
        const uploadResponse = await uploadImage({
          id: userState.user.id,
          imageFile: selectedImageFile,
        });
        if (uploadResponse.data.imageUrl.imageUrl) {
          updatedUserData.profileImage = uploadResponse.data.imageUrl.imageUrl;
        }
      }

      dispatch(setUser(updatedUserData));

      // Update localStorage with the new user data
      localStorage.setItem("userData", JSON.stringify(updatedUserData));
    } catch (error) {
      console.error("Error updating profile or uploading image:", error);
    }
  };

  const handleDiscard = () => {
    setFirstName("");
    setLastName("");
    setPhoneNumber("");
    setEmail("");
    setSelectedImageFile(null);
  };
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (userData) {
      dispatch(setUser(userData));
    }
  }, [dispatch]);

  useEffect(() => {
    if (isSuccess) {
      toast.success("Profile updated successfully!");
      navigate("/dashboard");
    }
    if (isError) {
      toast.error("There was an error updating the profile.");
      const errorMessage = CustomErrorMessage(error); // Extract error message using the utility
      toast.error(errorMessage);
    }
  }, [isSuccess, isError]);

  return (
    <Box
      sx={{
        backgroundColor: "white",
        boxShadow: "0 0 2px rgba(0, 0, 0, 0.5)",
        padding: "3vh",
        width: "100%",
      }}
    >
      <Grid
        container
        spacing={3}
        alignItems="center"
        justifyContent="space-between"
      >
        <Grid item>
          <Typography variant="p" fontWeight="600" letterSpacing="0.5px" sx={{fontSize:'3vmin'}}>
            Account Details
          </Typography>
          <Typography color="#737791" sx={{fontSize:'1.5vmin'}} >
            Edit Profile
          </Typography>
        </Grid>
        <Grid item>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar
              src={profileImage}
              sx={{ width: "10vmin", height: "10vmin", borderRadius: "50%" }}
            />
          </Box>
        </Grid>
      </Grid>
      <Box sx={{ marginTop: "3vh" }}>
        <form onSubmit={handleSubmit}>
          <TextField
            label="First Name"
            placeholder={userState?.user?.firstName}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            fullWidth
            sx={{ marginBottom: "2vh" }}
            InputLabelProps={{
              style:{
                color:'#00C800',
              }
            }}
          />
          <TextField
            label="Last Name"
            placeholder={userState?.user?.lastName}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            fullWidth
            sx={{marginBottom: "2vh"}}
            InputLabelProps={{
              style:{
                color:'#00C800',
              }
            }}
          />
          <TextField
            label="Phone No"
            placeholder={userState?.user?.phoneNumber}
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            fullWidth
            sx={{ marginBottom: "2vh" }}
            InputLabelProps={{
              style:{
                color:'#00C800',
              }
            }}
          />
          <TextField
            label="Email"
            type="email"
            placeholder={userState?.user?.email}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            sx={{ marginBottom: "2vh" }}
            InputLabelProps={{
              style:{
                color:'#00C800',
              }
            }}
          />
          <Grid container spacing={2}>
            <Grid item>
              <Button
                variant="outlined"
                color="primary"
                type="submit"
                disabled={isLoading}
                sx={{
                  border: "0.1vmin solid #00C800",
                  color: "#00C800",
                  fontSize:'1vmin',
                  width:'15vmin',
                  height:'5vmin',
                  '&:hover':{backgroundColor:'#00C800', color:'white', border:'0.1vmin solid #00C800'}
                }}
              >
                Save Changes
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                color="secondary"
                onClick={handleDiscard}
                sx={{
                  border: "0.1vmin solid red",
                  color: "red",
                  fontSize:'1vmin',
                  width:'15vmin',
                  height:'5vmin',
                  '&:hover':{backgroundColor:'red', color:'white', border:'0.1vmin solid red'}
                }}
              >
                Discard
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                color="primary"
                onClick={() => {
                  const fileInput = document.getElementById("hiddenFileInput");
                  fileInput.click();
                }}
                sx={{
                  border: "0.1vmin solid #00C800",
                  color: "#00C800",
                  fontSize:'1vmin',
                  width:'15vmin',
                  height:'5vmin',
                  '&:hover':{backgroundColor:'#00C800', color:'white', border:'0.1vmin solid #00C800'}
                }}
              >
                Choose File
              </Button>
              <input
                type="file"
                id="hiddenFileInput"
                style={{ display: "none" }}
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    setProfileImage(URL.createObjectURL(file));
                    setSelectedImageFile(file);
                  }
                }}
              />
            </Grid>
          </Grid>
        </form>
      </Box>
    </Box>
  );
}

export default AccountDetails;
