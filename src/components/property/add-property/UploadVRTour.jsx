import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  TextField,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

const UploadVRTour = ({ updateVrTour }) => {
  const [vrUrl, setVrUrl] = useState("");

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
      <Typography
        variant="p"
        fontWeight="600"
        letterSpacing="0.5px"
        sx={{ fontSize: "3vmin" }}
      >
        Upload VR Tour
      </Typography>
      <Grid item sx={{ marginTop: "3vmin" }}>
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
          onChange={(e) => {
            const file = e.target.files[0];
            if (file) {
              // Process the file if needed (e.g., create an object URL or read its contents)
              updateVrTour({ type: "file", data: file }); // Send the file to the parent
            }
          }}
        />
      </Grid>
      <Typography
        sx={{
          fontSize: "2vmin",
          fontWeight: "400",
          margin: "4vmin 49%",
        }}
      >
        OR
      </Typography>
      <TextField
        label="Input VR url"
        placeholder="Paste here..."
        value=""
        fullWidth
        sx={{ marginBottom: "2vh" }}
        onChange={(e) => {
          const inputValue = e.target.value;
          setVrUrl(inputValue);
          updateVrTour({ type: "url", data: inputValue }); // Send the input value to the parent
        }}
        InputLabelProps={{
          style: {
            color: "#00C800",
            marginRight: "2vw",
          },
        }}
        style={{ marginRight: "2vw" }}
      />
      <FormControlLabel
        control={
          <Checkbox
            sx={{
              color: "#00C800",
              "&.Mui-checked": {
                color: "#00C800",
              },
            }}
          />
        }
        label="Use the images to create a video slideshow instead of virtual tour"
        sx={{
          color: "#737791",
        }}
      />
    </Box>
  );
};

export default UploadVRTour;
