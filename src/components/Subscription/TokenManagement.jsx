import React, { useState, useEffect } from "react";
import { Box, TextField, Typography, Button, Snackbar } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  useUpdateConfigMutation,
  useGetConfigQuery,
  useGetAllTokensQuery,
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

const rows = [
  createData(
    "Mama Thakur",
    "Video Call, Api's",
    50,
    40,
    10,
    <Button sx={{ color: "red" }}>Remove Tokens</Button>,
    <Button sx={{ color: "#00C800" }}>Add Tokens</Button>
  ),
  createData(
    "Mama Thakur",
    "Video Call, Api's",
    50,
    40,
    10,
    <Button sx={{ color: "red" }}>Remove Tokens</Button>,
    <Button sx={{ color: "#00C800" }}>Add Tokens</Button>
  ),
  createData(
    "Mama Thakur",
    "Video Call, Api's",
    50,
    40,
    10,
    <Button sx={{ color: "red" }}>Remove Tokens</Button>,
    <Button sx={{ color: "#00C800" }}>Add Tokens</Button>
  ),
  createData(
    "Mama Thakur",
    "Video Call, Api's",
    50,
    40,
    10,
    <Button sx={{ color: "red" }}>Remove Tokens</Button>,
    <Button sx={{ color: "#00C800" }}>Add Tokens</Button>
  ),
  createData(
    "Mama Thakur",
    "Video Call, Api's",
    50,
    40,
    10,
    <Button sx={{ color: "red" }}>Remove Tokens</Button>,
    <Button sx={{ color: "#00C800" }}>Add Tokens</Button>
  ),
  createData(
    "Mama Thakur",
    "Video Call, Api's",
    50,
    40,
    10,
    <Button sx={{ color: "red" }}>Remove Tokens</Button>,
    <Button sx={{ color: "#00C800" }}>Add Tokens</Button>
  ),
];

const TokenManagement = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [fetchedTokenPrice, setFetchedTokenPrice] = useState("");
  const [inputTokenPrice, setInputTokenPrice] = useState("");
  const [updateConfig, { isLoading: isUpdating, isError: updateError }] =
    useUpdateConfigMutation();

  const { data: configData } = useGetConfigQuery("tokenPrice");
  console.log(configData)
  // const {
  //   data: tokensData,
  //   isLoading: isLoadingTokens,
  //   isError: isErrorTokens,
  // } = useGetAllTokensQuery();

  // console.log("Tokens data:", tokensData);

  useEffect(() => {
    if (configData) {
      setFetchedTokenPrice(configData.configValue);
      setInputTokenPrice(configData.configValue); // Initialize input with fetched value
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
          Enter Token Price:
        </Typography>
        <TextField
          label="Price Per Token"
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
      {/* <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
          width: "90%",
          height: "80vmin",
          marginTop: "10vmin",
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
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            boxShadow: "0px 0px 2px black",
            width: "70%",
            height: "8vmin",
            borderRadius: "0.5vmin",
            padding: "1vmin",
            backgroundColor: "white",
            transition: "0.3s ease",
            "&:hover": {
              boxShadow: "0px 0px 5px black",
            },
          }}
        >
          <Typography
            sx={{ fontSize: "2.5vmin", fontWeight: "600", color: "#737791" }}
          >
            Total Tokens:
          </Typography>
          <Typography
            sx={{ fontSize: "2.5vmin", fontWeight: "600", color: "#00C800" }}
          >
            500
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            boxShadow: "0px 0px 2px black",
            width: "70%",
            height: "8vmin",
            borderRadius: "0.5vmin",
            padding: "1vmin",
            backgroundColor: "white",
            transition: "0.3s ease",
            "&:hover": {
              boxShadow: "0px 0px 5px black",
            },
          }}
        >
          <Typography
            sx={{ fontSize: "2.5vmin", fontWeight: "600", color: "#737791" }}
          >
            Tokens Sold:
          </Typography>
          <Typography
            sx={{ fontSize: "2.5vmin", fontWeight: "600", color: "#00C800" }}
          >
            350
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            boxShadow: "0px 0px 2px black",
            width: "70%",
            height: "8vmin",
            borderRadius: "0.5vmin",
            padding: "1vmin",
            backgroundColor: "white",
            transition: "0.3s ease",
            "&:hover": {
              boxShadow: "0px 0px 5px black",
            },
          }}
        >
          <Typography
            sx={{ fontSize: "2.5vmin", fontWeight: "600", color: "#737791" }}
          >
            Tokens Remaining:
          </Typography>
          <Typography
            sx={{ fontSize: "2.5vmin", fontWeight: "600", color: "#00C800" }}
          >
            150
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            boxShadow: "0px 0px 2px black",
            width: "70%",
            height: "8vmin",
            borderRadius: "0.5vmin",
            padding: "1vmin",
            backgroundColor: "white",
            transition: "0.3s ease",
            "&:hover": {
              boxShadow: "0px 0px 5px black",
            },
          }}
        >
          <Typography
            sx={{ fontSize: "2.5vmin", fontWeight: "600", color: "#737791" }}
          >
            Tokens In Use:
          </Typography>
          <Typography
            sx={{ fontSize: "2.5vmin", fontWeight: "600", color: "#00C800" }}
          >
            270
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            boxShadow: "0px 0px 2px black",
            width: "70%",
            height: "8vmin",
            borderRadius: "0.5vmin",
            padding: "1vmin",
            backgroundColor: "white",
            transition: "0.3s ease",
            "&:hover": {
              boxShadow: "0px 0px 5px black",
            },
          }}
        >
          <Typography
            sx={{ fontSize: "2.5vmin", fontWeight: "600", color: "#737791" }}
          >
            Tokens Not In Use:
          </Typography>
          <Typography
            sx={{ fontSize: "2.5vmin", fontWeight: "600", color: "#00C800" }}
          >
            80
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            boxShadow: "0px 0px 2px black",
            width: "70%",
            height: "8vmin",
            borderRadius: "0.5vmin",
            padding: "1vmin",
            backgroundColor: "white",
            transition: "0.3s ease",
            "&:hover": {
              boxShadow: "0px 0px 5px black",
            },
          }}
        >
          <Typography
            sx={{ fontSize: "2.5vmin", fontWeight: "600", color: "#737791" }}
          >
            Revenue Generated:
          </Typography>
          <Typography
            sx={{ fontSize: "2.5vmin", fontWeight: "600", color: "#00C800" }}
          >
            $20000
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          width: "90%",
          marginTop: "10vmin",
          overflow: "hidden",
          borderRadius: "1vmin",
          boxShadow: "0px 0px 2px black",
          transition: "0.4s linear ease",
          "&:hover": {
            boxShadow: "0px 0px 5px black",
          },
        }}
      >
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right">User Name</TableCell>
                <TableCell align="right">Services</TableCell>
                <TableCell align="right">Tokens Bought</TableCell>
                <TableCell align="right">Tokens Used</TableCell>
                <TableCell align="right">Tokens Remaining</TableCell>
                <TableCell align="right">Remove Tokens</TableCell>
                <TableCell align="right">Add Tokens</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.services}</TableCell>
                  <TableCell align="right">{row.tokensBought}</TableCell>
                  <TableCell align="right">{row.tokensUsed}</TableCell>
                  <TableCell align="right">{row.tokensRemaining}</TableCell>
                  <TableCell align="right">{row.removeTokens}</TableCell>
                  <TableCell align="right">{row.addTokens}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box> */}
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
