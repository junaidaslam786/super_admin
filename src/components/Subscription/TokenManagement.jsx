import React, { useState, useEffect } from "react";
import { Box, TextField, Typography, Button, Snackbar } from "@mui/material";

import {
  useUpdateConfigMutation,
  useGetConfigQuery,
} from "../../redux/api/tokenManagementApi";

function createData(
  name,
  services,
  tokensBought,
  tokensUsed,
  tokensRemaining,
  removeTokens,
  addTokens
) {
  return {
    name,
    services,
    tokensBought,
    tokensUsed,
    tokensRemaining,
    removeTokens,
    addTokens,
  };
}



const TokenManagement = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [fetchedTokenPrice, setFetchedTokenPrice] = useState("");
  const [inputTokenPrice, setInputTokenPrice] = useState("");
  const [updateConfig, { isLoading: isUpdating, isError: updateError }] =
    useUpdateConfigMutation();

  const { data: configData } = useGetConfigQuery("tokenPrice");
  console.log(configData)
 

  useEffect(() => {
    if (configData) {
      setFetchedTokenPrice(configData.configValue);
      setInputTokenPrice(configData.configValue); 
    }
  }, [configData]);

  
  const handleSave = async () => {
    try {
      console.log("Updating config with:", inputTokenPrice);
      const response = await updateConfig({
        configKey: "tokenPrice",
        configValue: inputTokenPrice,
        stripePriceId: "", // Include if applicable
      }).unwrap();
  
      console.log("Update response:", response);
      setOpenSnackbar(true);
      setFetchedTokenPrice(inputTokenPrice); // Update the displayed price after successful update
    } catch (error) {
      console.error("Error updating config:", error);
      // Display an error message or handle the error appropriately
    }
  };
  

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        padding: "10vmin 0",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          width: "90%",
          height: "40vmin",
          boxShadow: "0px 0px 2px black",
          borderRadius: "1vmin",
          padding: "2vmin",
          backgroundColor: "white",
          transition: "0.3s ease",
          "&:hover": {
            boxShadow: "0px 0px 5px black",
          },
        }}
      >
        <Typography sx={{ fontSize: "3vmin", fontWeight: "600" }}>
          Enter USEE Coin Price:
        </Typography>
        <TextField
          label="Price Per USEE Coin"
          value={inputTokenPrice}
          onChange={(e) => setInputTokenPrice(e.target.value)}
          placeholder=""
          fullWidth
          InputLabelProps={{
            style: {
              color: "#00C800",
            },
          }}
        />
        <Typography sx={{ fontSize: "1vmin", fontWeight: "300" }}>
          {`Current Price: ${fetchedTokenPrice}`}
        </Typography>
        <Button
          sx={{
            width: "12vmin",
            height: "6vmin",
            color: "#00C800",
            borderRadius: "1vmin",
            backgroundColor: "white",
            border: "0.2vmin solid #00C800",
            "&:hover": {
              color: "white",
              backgroundColor: "#00C800",
            },
          }}
          onClick={handleSave}
        >
          Save
        </Button>
      </Box>
     
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message="Price has been set!"
        action={
          <Button color="inherit" size="small" onClick={handleCloseSnackbar}>
            Close
          </Button>
        }
      />
    </Box>
  );
};

export default TokenManagement;
