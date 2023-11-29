import React, { useState, useEffect } from "react";
import { Box, Typography, Button, TextField, Snackbar } from "@mui/material";
import {
  useGetFeatureByIdQuery,
  useUpdateTokensForFeatureMutation,
} from "../../redux/api/featureManagementApi";

const SubsConfig = ({ featureName, slotsLabel, featureId, freeLabel }) => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [tokensPerUnit, setTokensPerUnit] = useState("");
  const [slots, setSlots] = useState("");
  const [free, setFree] = useState("");

  const {
    data: featureData,
    isLoading: isFeatureLoading,
    isError: isFeatureError,
  } = useGetFeatureByIdQuery(featureId);
  const [updateTokensForFeature] = useUpdateTokensForFeatureMutation();
  // console.log(featureData.tokensPerUnit);

  const defaultSlotsLabel = "Number of slots";

  const handleSave = () => {
    handleUpdateTokenPerUnit();
    // setOpenSnackbar(true);
  };

  const handleUpdateTokenPerUnit = async () => {
    try {
      await updateTokensForFeature({
        id: featureId,
        data: { tokensPerUnit },
      }).unwrap();

      setOpenSnackbar(true);
      // Additional logic after successful update
    } catch (error) {
      console.error("Error updating token per unit:", error);
      // Handle error
    }
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  useEffect(() => {
    if (featureData && featureData.tokensPerUnit) {
      setTokensPerUnit(featureData.tokensPerUnit);
      setSlots(featureData.totalUnits);
      setFree(featureData.freeUnits);
    } else {
      console.log("Feature data or tokensPerUnit is not available", featureData);
      // Set a default value or handle the absence of tokensPerUnit
    }
  }, [featureData]);

  if (isFeatureLoading) {
    return <Typography>Loading feature data...</Typography>;
  }

  if (isFeatureError) {
    return <Typography>Error loading feature data</Typography>;
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        alignItems: "center",
        paddingTop: "10vmin",
        paddingBottom: "5vmin",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "90%",
          height: "25vmin",
          padding: "3vmin",
          boxShadow: "0px 0px 2px black",
          borderRadius: "0.4vmin",
          backgroundColor: "white",
          transition: "0.3s ease",
          "&:hover": {
            boxShadow: "0px 0px 5px black",
          },
        }}
      >
        <Typography
          sx={{
            fontSize: "4vmin",
            fontWeight: "600",
          }}
        >
          {featureName}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <TextField
            label="Tokens Per Unit"
            type="number"
            value={tokensPerUnit}
            onChange={(e) => setTokensPerUnit(e.target.value)}
            fullWidth
            sx={{
              marginRight: "1vmin",
              color: "#00C800",
            }}
            InputLabelProps={{
              style: {
                color: "#00C800",
              },
            }}
          />
          <TextField
            label={slotsLabel}
            type="number"
            value={slots}
            onChange={(e) => setSlots(e.target.value)}
            fullWidth
            sx={{
              marginRight: "1vmin",
              color: "#00C800",
            }}
            InputLabelProps={{
              style: {
                color: "#00C800",
              },
            }}
          />
          <TextField
            label={freeLabel}
            type="number"
            value={free}
            onChange={(e) => setFree(e.target.value)}
            fullWidth
            sx={{
              marginRight: "1vmin",
              color: "#00C800",
            }}
            InputLabelProps={{
              style: {
                color: "#00C800",
              },
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Button
            onClick={handleSave}
            sx={{
              color: "#00C800",
              border: "0.1vmin solid #00C800",
              width: "10vmin",
              marginRight: "2vmin",
              "&:hover": {
                color: "white",
                backgroundColor: "#00C800",
              },
            }}
          >
            Save
          </Button>
          <Button
            sx={{
              color: "red",
              border: "0.1vmin solid red",
              width: "10vmin",
              "&:hover": {
                color: "white",
                backgroundColor: "red",
              },
            }}
          >
            Discard
          </Button>
        </Box>
      </Box>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message="Configurations are saved successfully"
        action={
          <Button color="inherit" size="small" onClick={handleCloseSnackbar}>
            Close
          </Button>
        }
      />
    </Box>
  );
};

export default SubsConfig;
