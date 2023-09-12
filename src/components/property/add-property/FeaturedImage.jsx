import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";

const FeaturedImage = () => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        padding: "3vh",
        width: "100%",
        marginTop:'5vmin',
        boxShadow: '0px 1px 4px black'
      }}
    >
      <Typography
        variant="p"
        fontWeight="600"
        letterSpacing="0.5px"
        sx={{ fontSize: "3vmin" }}
      >
        Featured Image
      </Typography>
      <Typography color="#737791" sx={{ fontSize: "1.5vmin" }}>
        <ul>
          <li>At least 1 image is required for a valid submission. </li>
          <li>Minimum size is 500x500 px.</li>
          <li>Supports JPG, JPEG and PNG formats.</li>
          <li>Images might take longer to be processed.</li>
        </ul>
      </Typography>
      <Grid item>
        <Button
          variant="outlined"
          color="primary"
          //   onClick={() => {
          //     const fileInput = document.getElementById("hiddenFileInput");
          //     fileInput.click();
          //   }}
          sx={{
            border: "0.1vmin solid #00C800",
            color: "#00C800",
            fontSize: "1vmin",
            width: "15vmin",
            height: "5vmin",
            "&:hover": {
              backgroundColor: "#00C800",
              color: "white",
              border: "0.1vmin solid #00C800",
            },
          }}
        >
          Choose File
        </Button>
        <input
          accept=".JPG .PNG .JPEG"
          type="file"
          id="hiddenFileInput"
          style={{ display: "none" }}
          //   onChange={(e) => {
          //     const file = e.target.files[0];
          //     if (file) {
          //       setProfileImage(URL.createObjectURL(file));
          //       setSelectedImageFile(file);
          //     }
          //   }}
        />
      </Grid>
    </Box>
  );
};

export default FeaturedImage;
