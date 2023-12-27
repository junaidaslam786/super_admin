// import React, { useState, useEffect } from "react";
// import {
//   Box,
//   Typography,
//   Button,
//   TextField,
//   Snackbar,
//   useTheme,
//   useMediaQuery,
// } from "@mui/material";
// import {
//   useGetFeatureByIdQuery,
//   useUpdateTokensForFeatureMutation,
// } from "../../redux/api/featureManagementApi";
// import { useQueryClient } from "react-query";

// const SubsConfig = ({ featureName, slotsLabel, featureId, freeLabel }) => {
//   const [openSnackbar, setOpenSnackbar] = useState(false);
//   const [tokensPerUnit, setTokensPerUnit] = useState("");
//   const [slots, setSlots] = useState("");
//   const [free, setFree] = useState("");

//   const queryClient = useQueryClient();
//   const {
//     data: featureData,
//     isLoading: isFeatureLoading,
//     isError: isFeatureError,
//   } = useGetFeatureByIdQuery(featureId);
//   const [updateTokensForFeature] = useUpdateTokensForFeatureMutation();

//   const theme = useTheme();
//   const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
//   const isMedium = useMediaQuery(theme.breakpoints.between("sm", "md"));
//   const isLarge = useMediaQuery(theme.breakpoints.up("md"));

//   useEffect(() => {
//     if (featureData && featureData.tokensPerUnit) {
//       setTokensPerUnit(featureData.tokensPerUnit);
//       setSlots(featureData.totalUnits);
//       setFree(featureData.freeUnits);
//     }
//   }, [featureData]);

//   // Adjusting styles based on breakpoints
//   const boxStyles = {
//     display: "flex",
//     flexDirection: "column",
//     width: "100%",
//     alignItems: "center",
//     paddingTop: isSmall ? "5vmin" : isMedium ? "7vmin" : "10vmin",
//     paddingBottom: isSmall ? "2.5vmin" : isMedium ? "3.5vmin" : "5vmin",
//   };

//   const innerBoxStyles = {
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "space-between",
//     width: isSmall ? "95%" : isMedium ? "90%" : "85%",
//     height: isSmall ? "30vmin" : isMedium ? "28vmin" : "25vmin",
//     padding: "3vmin",
//     boxShadow: "0px 0px 2px black",
//     borderRadius: "0.4vmin",
//     backgroundColor: "white",
//     transition: "0.3s ease",
//     "&:hover": {
//       boxShadow: "0px 0px 5px black",
//     },
//   };

//   const typographyStyles = {
//     fontSize: isSmall ? "3vmin" : isMedium ? "3.5vmin" : "4vmin",
//     fontWeight: "600",
//   };

//   const buttonStyles = {
//     color: "#00C800",
//     border: "0.1vmin solid #00C800",
//     width: isSmall ? "20vmin" : isMedium ? "15vmin" : "10vmin",
//     marginRight: "2vmin",
//     "&:hover": {
//       color: "white",
//       backgroundColor: "#00C800",
//     },
//   };

//   if (isFeatureLoading) {
//     return <Typography>Loading feature data...</Typography>;
//   }

//   if (isFeatureError) {
//     return <Typography>Error loading feature data</Typography>;
//   }

//   const handleSave = async () => {
//     try {
//       await updateTokensForFeature({
//         id: featureId,
//         data: { tokensPerUnit, totalUnits: slots, freeUnits: free },
//       }).unwrap();

//       queryClient.invalidateQueries(["getFeatureById", featureId]);
//       setOpenSnackbar(true);
//     } catch (error) {
//       console.error("Error updating token per unit:", error);
//     }
//   };

//   const handleCloseSnackbar = (event, reason) => {
//     if (reason === "clickaway") {
//       return;
//     }
//     setOpenSnackbar(false);
//   };

//   if (isFeatureLoading) {
//     return <Typography>Loading feature data...</Typography>;
//   }

//   if (isFeatureError) {
//     return <Typography>Error loading feature data</Typography>;
//   }

//   return (
//     <Box sx={boxStyles}>
//       <Box sx={innerBoxStyles}>
//         <Typography sx={typographyStyles}>{featureName}</Typography>
//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: "row",
//             alignItems: "center",
//             justifyContent: "space-between",
//           }}
//         >
//           <TextField
//             label="Tokens Per Unit"
//             type="number"
//             value={tokensPerUnit}
//             onChange={(e) => setTokensPerUnit(e.target.value)}
//             fullWidth
//             sx={{
//               marginRight: isSmall ? "0.5vmin" : isMedium ? "1vmin" : "1.5vmin",
//               color: "#00C800",
//             }}
//             InputLabelProps={{
//               style: {
//                 color: "#00C800",
//               },
//             }}
//           />
//           <TextField
//             label={slotsLabel}
//             type="number"
//             value={slots}
//             onChange={(e) => setSlots(e.target.value)}
//             fullWidth
//             sx={{
//               marginRight: isSmall ? "0.5vmin" : isMedium ? "1vmin" : "1.5vmin",
//               color: "#00C800",
//             }}
//             InputLabelProps={{
//               style: {
//                 color: "#00C800",
//               },
//             }}
//           />
//           <TextField
//             label={freeLabel}
//             type="number"
//             value={free}
//             onChange={(e) => setFree(e.target.value)}
//             fullWidth
//             sx={{
//               marginRight: isSmall ? "0.5vmin" : isMedium ? "1vmin" : "1.5vmin",
//               color: "#00C800",
//             }}
//             InputLabelProps={{
//               style: {
//                 color: "#00C800",
//               },
//             }}
//           />
//         </Box>
//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: "row",
//             alignItems: "center",
//           }}
//         >
//           <Button onClick={handleSave} sx={buttonStyles}>
//             Save
//           </Button>
//           <Button
//             sx={{
//               color: "red",
//               border: "0.1vmin solid red",
//               width: isSmall ? "20vmin" : isMedium ? "15vmin" : "10vmin",
//               "&:hover": {
//                 color: "white",
//                 backgroundColor: "red",
//               },
//             }}
//           >
//             Discard
//           </Button>
//         </Box>
//       </Box>
//       <Snackbar
//         open={openSnackbar}
//         autoHideDuration={6000}
//         onClose={handleCloseSnackbar}
//         message="Configurations are saved successfully"
//         action={
//           <Button color="inherit" size="small" onClick={handleCloseSnackbar}>
//             Close
//           </Button>
//         }
//       />
//     </Box>
//   );
// };

// export default SubsConfig;
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
} from "@mui/material";
import {
  useGetFeatureByIdQuery,
  useUpdateTokensForFeatureMutation,
} from "../../redux/api/featureManagementApi";
import { useQueryClient } from "react-query";

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
      sx={{ maxWidth: "100%", margin: theme.spacing(2), overflow: "hidden" }}
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
            <Button
              onClick={handleSave}
              variant="contained"
              color="primary"
              fullWidth
            >
              Save
            </Button>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Button variant="outlined" color="secondary" fullWidth>
              Discard
            </Button>
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
