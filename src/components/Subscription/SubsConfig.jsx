import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  Snackbar,
  Card,
  Grid,
  CardContent,
  useTheme,
  useMediaQuery,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import {
  useGetFeatureByIdQuery,
  useUpdateTokensForFeatureMutation,
} from "../../redux/api/featureManagementApi";
import { useQueryClient } from "react-query";

const mango = createTheme({
  palette: {
    primary: {
      main: "#00C800",
      contrastText: "#fff",
    },
  },
});

const SubsConfig = ({ featureName, slotsLabel, featureId, freeLabel }) => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [tokensPerUnit, setTokensPerUnit] = useState("");
  const [slots, setSlots] = useState("");
  const [free, setFree] = useState("");

  const queryClient = useQueryClient();
  const {
    data: featureData,
    isLoading: isFeatureLoading,
    isError: isFeatureError,
  } = useGetFeatureByIdQuery(featureId);
  const [updateTokensForFeature] = useUpdateTokensForFeatureMutation();

  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isLarge = useMediaQuery(theme.breakpoints.up("md"));
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    if (featureData && featureData.tokensPerUnit) {
      setTokensPerUnit(featureData.tokensPerUnit);
      setSlots(featureData.totalUnits);
      setFree(featureData.freeUnits);
    }
  }, [featureData]);

  const handleSave = async () => {
    try {
      await updateTokensForFeature({
        id: featureId,
        data: { tokensPerUnit, totalUnits: slots, freeUnits: free },
      }).unwrap();

      queryClient.invalidateQueries(["getFeatureById", featureId]);
      setOpenSnackbar(true);
    } catch (error) {
      console.error("Error updating token per unit:", error);
    }
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  if (isFeatureLoading) {
    return <Typography>Loading feature data...</Typography>;
  }

  if (isFeatureError) {
    return <Typography>Error loading feature data</Typography>;
  }

  return (
    <Card
      sx={{ maxWidth: "100%", margin: theme.spacing(2), overflow: "hidden", }}
    >
      <CardContent>
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          <Grid item xs={12}>
            <Typography variant="h6" align="center">
              {featureName}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Tokens Per Unit"
              type="number"
              value={tokensPerUnit}
              onChange={(e) => setTokensPerUnit(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label={slotsLabel}
              type="number"
              value={slots}
              onChange={(e) => setSlots(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label={freeLabel}
              type="number"
              value={free}
              onChange={(e) => setFree(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <ThemeProvider theme={mango}>
              <Button
                onClick={handleSave}
                variant="contained"
                color="primary"
                fullWidth
              >
                Save
              </Button>
            </ThemeProvider>
          </Grid>
          <Grid item xs={6} sm={3}>
            <ThemeProvider theme={mango}>
              <Button variant="outlined" color="primary" fullWidth>
                Discard
              </Button>
            </ThemeProvider>
          </Grid>
        </Grid>
      </CardContent>
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
    </Card>
  );
};

export default SubsConfig;
