import React from "react";
import { Box, Typography, Link, Divider, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import { useLocation } from "react-router-dom";
import Zangi from "../../assets/Profile.svg";
import Cover from "../../assets/doc.webp";
import Partner from "../../assets/Profile.svg";
import { useGetAgentUserQuery, useGetAllTradersUsersListQuery } from "../../redux/api/userManagementApi";
// import { Box, Typography, Link, Divider, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const TradersView = () => {
  const location = useLocation();
  const selectedUserId = location.state?.selectedUserId;
  console.log("Selected user ID:", selectedUserId);

  const { data: selectedUser } = useGetAgentUserQuery(selectedUserId, {
    skip: !selectedUserId,
  });
  console.log("Selected user data:", selectedUser);

  const { data: tradersUsers, isLoading, isError } = useGetAllTradersUsersListQuery(selectedUserId);
  console.log("Traders users:", tradersUsers);

  const orignalDocumentPath = selectedUser?.documentUrl;
  const correctedDocumentPath = orignalDocumentPath?.replace(/\\\\/g, '\\');

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        backgroundColor: "#FAFBFC",
        paddingTop: "2vmin",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
        }}
      >
        <Box
          sx={{
            width: "25%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={Zangi}
            style={{
              width: "60%",
              borderRadius: "50%",
              border: "0.5vmin solid #00C800",
              filter: "drop-shadow(0px 0px 4px black)",
            }}
          />
          <Box
            sx={{
              marginTop: "2vmin",
              padding: "1vh 1vw",
              borderRadius: "1vmin",
              backgroundColor: "rgb(0, 200, 0)",
            }}
          >
            <Typography
              sx={{
                fontSize: "3vmin",
                color: "white",
                fontWeight: "600",
              }}
            >
              {selectedUser?.user.active === true ? "Active" : "Inactive"}
            </Typography>
          </Box>
        </Box>
        <Box sx={{ width: "74%" }}>
          <Box
            sx={{
              width: "100%",
              padding: "2vmin",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <img src={Partner} style={{ marginRight: "1vmin" }} />
            <Typography
              sx={{
                fontSize: "4vmin",
                fontWeight: "500",
                color: "#00C800",
              }}
            >
              Trader
            </Typography>
          </Box>
          <Divider sx={{ backgroundColor: "#00C800" }} />
          <Box
            sx={{
              width: "100%",
              padding: "2vmin",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: "3.5vmin",
                fontWeight: "500",
                color: "#737791",
              }}
            >
              {selectedUser?.user.firstName}
            </Typography>
            <Typography
              sx={{
                fontSize: "3.5vmin",
                fontWeight: "500",
                color: "#737791",
                marginLeft: "1vmin",
              }}
            >
              {selectedUser?.user.lastName}
            </Typography>
          </Box>
          <Divider sx={{ backgroundColor: "#00C800" }} />
          <Box
            sx={{
              width: "100%",
              padding: "2vmin",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: "3.5vmin",
                  fontWeight: "500",
                  color: "#00C800",
                }}
              >
                Phone No:
              </Typography>
              <Typography
                sx={{
                  fontSize: "3vmin",
                  fontWeight: "500",
                  color: "#737791",
                  marginLeft: "1vmin",
                }}
              >
                {selectedUser?.user.phoneNumber}
              </Typography>
            </Box>
            <Typography
              sx={{
                fontSize: "3vmin",
                fontWeight: "500",
                color: "#737791",
                marginLeft: "1vmin",
              }}
            >
              {selectedUser?.user.email}
            </Typography>
          </Box>
          <Divider sx={{ backgroundColor: "#00C800" }} />
          <Box
            sx={{
              width: "100%",
              padding: "2vmin",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: "3.5vmin",
                fontWeight: "500",
                color: "#00C800",
              }}
            >
              Location:
            </Typography>
            <Typography
              sx={{
                fontSize: "3vmin",
                fontWeight: "500",
                color: "#737791",
                marginLeft: "1vmin",
              }}
            >
              {selectedUser?.companyAddress}
            </Typography>
          </Box>
          <Divider sx={{ backgroundColor: "#00C800" }} />
        </Box>
      </Box>
      <Box
        sx={{
          width: "98%",
          margin: "0 1%",
        }}
      >
        <Box
          sx={{
            width: "100%",
            padding: "2vmin",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: "3.5vmin",
              fontWeight: "500",
              color: "#00C800",
            }}
          >
            Company Name:
          </Typography>
          <Typography
            sx={{
              fontSize: "3vmin",
              fontWeight: "500",
              color: "#737791",
              marginLeft: "1vmin",
            }}
          >
            {selectedUser?.companyName}
          </Typography>
        </Box>
        <Divider sx={{ backgroundColor: "#00C800" }} />
        <Box
          sx={{
            width: "100%",
            padding: "2vmin",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: "3.5vmin",
              fontWeight: "500",
              color: "#00C800",
            }}
          >
            Company Address:
          </Typography>
          <Typography
            sx={{
              fontSize: "3vmin",
              fontWeight: "500",
              color: "#737791",
              marginLeft: "1vmin",
            }}
          >
            {selectedUser?.companyAddress}
          </Typography>
        </Box>
        <Divider sx={{ backgroundColor: "#00C800" }} />
        <img
          src={correctedDocumentPath}
          style={{ width: "100%" }}
        />

        <Divider sx={{ backgroundColor: "#00C800" }} />
        <TableContainer component={Paper}>
        <Table aria-label="traders users table">
          <TableHead>
            <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Email</TableCell>
              {/* Add more TableCell components as needed */}
            </TableRow>
          </TableHead>
          <TableBody>
            {tradersUsers?.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.firstName}</TableCell>
                <TableCell>{user.lastName}</TableCell>
                <TableCell>{user.email}</TableCell>
                {/* Add more TableCell components as needed */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </Box>
    </Box>
  );
};

export default TradersView;
