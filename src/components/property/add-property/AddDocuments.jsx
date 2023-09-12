import React from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  TextField
} from "@mui/material";

const AddDocuments = () => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        padding: "3vh",
        width: "100%",
        marginTop: "5vmin",
        marginBottom:'1vmin',
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
          Add Documents
        </Typography>
        <Typography color="#737791" sx={{ fontSize: "1.5vmin" }}>
          (Use PDF, PNG, JPEG, and JPG file format)
        </Typography>
      </Grid>
      <Box sx={{ display: "flex", flexDirection: "row", marginTop:'3vmin' }}>
        <TextField
          label="Document Name"
          value=""
          fullWidth
          sx={{ marginBottom: "2vh", marginRight: "2vw" }}
          InputLabelProps={{
            style: {
              color: "#00C800",
            },
          }}
        />
        <Grid item sx={{width:'100%'}}>
        <Button
          variant="outlined"
          color="primary"
          fullWidth
          //   onClick={() => {
          //     const fileInput = document.getElementById("hiddenFileInput");
          //     fileInput.click();
          //   }}
          sx={{
            border: "0.1vmin solid #00C800",
            color: "#00C800",
            fontSize: "1vmin",
            height: "70%",
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
    </Box>
  );
};

export default AddDocuments;
