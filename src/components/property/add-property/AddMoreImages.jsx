import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";

const AddMoreImages = () => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        padding: "3vh",
        width: "100%",
        marginTop: "5vmin",
        boxShadow: "0px 0px 1px black",
      }}
    >
      <Grid item>
        <Typography
          variant="p"
          fontWeight="600"
          letterSpacing="0.5px"
          sx={{ fontSize: "3vmin" }}
        >
          Add More Images
        </Typography>
        <Typography color="#737791" sx={{ fontSize: "1.5vmin" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend
          justo eget
        </Typography>
      </Grid>
      <Grid item sx={{ marginTop: "3vmin" }}>
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

export default AddMoreImages;
