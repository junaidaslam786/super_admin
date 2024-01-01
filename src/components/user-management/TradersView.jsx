import React from "react";
import {
  Box,
  Typography,
  Link,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Card,
  CardContent,
} from "@mui/material";
import { useLocation } from "react-router-dom";
import Zangi from "../../assets/Profile.svg";
import Partner from "../../assets/Profile.svg";
import {
  useGetAgentUserQuery,
  useGetAllTradersUsersListQuery,
} from "../../redux/api/userManagementApi";
import AttachFileIcon from "@mui/icons-material/AttachFile";

const TradersView = () => {
  const location = useLocation();
  const selectedUserId = location.state?.selectedUserId;

  const { data: selectedUser } = useGetAgentUserQuery(selectedUserId, {
    skip: !selectedUserId,
  });
  console.log("selected user", selectedUser);
  const { data: tradersUsers } = useGetAllTradersUsersListQuery(selectedUserId);

  const getFileLink = (path) => {
    if (!path) {
      return <Typography variant="subtitle1">No document available</Typography>;
    }

    const fullUrl = new URL(path, process.env.REACT_APP_SERVER_ENDPOINT).href;
    const fileName = path.split("/").pop();

    return (
      <Link href={fullUrl} target="_blank" rel="noopener noreferrer">
        <AttachFileIcon style={{ marginRight: 8 }} />
        {fileName}
      </Link>
    );
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        backgroundColor: "#FAFBFC",
        padding: "2vmin",
      }}
    >
      <Card sx={{ marginBottom: "2vmin" }}>
        <CardContent>
          <Box
            sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
          >
            <img
              src={`${process.env.REACT_APP_SERVER_ENDPOINT}/${selectedUser?.user.profileImage}`}
              alt="Profile"
              style={{
                width: "10vmin",
                borderRadius: "50%",
                marginRight: "1vmin",
              }}
            />
            <Typography variant="h5">
              {selectedUser?.user.firstName} {selectedUser?.user.lastName}
            </Typography>
          </Box>
          <Divider sx={{ my: 2 }} />
          <Typography variant="subtitle1">
            Phone: {selectedUser?.user.phoneNumber}
          </Typography>
          <Typography variant="subtitle1">
            Email: {selectedUser?.user.email}
          </Typography>
          <Typography variant="subtitle1">
            City Name: {selectedUser?.user.cityName}
          </Typography>
          <Typography variant="subtitle1">
            TimeZone: {selectedUser?.user.timezone}
          </Typography>
          <Typography variant="subtitle1">
            Company Name: {selectedUser?.companyName}
          </Typography>
          <Typography variant="subtitle1">
            Company Position: {selectedUser?.companyPosition}
          </Typography>
          <Typography variant="subtitle1">
            Mortgage Advisor Email: {selectedUser?.mortgageAdvisorEmail}
          </Typography>
          <Typography variant="subtitle1">
            Job Title: {selectedUser?.jobTitle}
          </Typography>
          <Typography variant="subtitle1">
            License Number: {selectedUser?.licenseNo}
          </Typography>
          <Typography variant="subtitle1">
            Status: {selectedUser?.user.active ? "Active" : "Inactive"}
          </Typography>
          <Typography variant="subtitle1">
            Created At: {selectedUser?.createdAt}
          </Typography>
          <Typography variant="subtitle1">
            Updated At: {selectedUser?.updatedAt}
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ marginBottom: "2vmin" }}>
        <CardContent>
          <Typography variant="h6">Documents:</Typography>
          {getFileLink(selectedUser?.documentUrl)}
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <Typography variant="h6">Associated Users:</Typography>
          <TableContainer component={Paper}>
            <Table aria-label="traders users table">
              <TableHead>
                <TableRow>
                  <TableCell>First Name</TableCell>
                  <TableCell>Last Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>User Type</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Array.isArray(tradersUsers?.data) ? (
                  tradersUsers.data.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell>{user.firstName}</TableCell>
                      <TableCell>{user.lastName}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>{user.agent.agentType}</TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={4}>No data available</TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <Typography variant="h6" sx={{ marginTop: "2vmin" }}>
            Properties:
          </Typography>
          <TableContainer component={Paper}>
            <Table aria-label="traders products table">
              <TableHead>
                <TableRow>
                  <TableCell>Title</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Array.isArray(selectedUser?.user.products) ? (
                  selectedUser.user.products.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell>{product.title}</TableCell>
                      <TableCell>{product.description}</TableCell>
                      <TableCell>{product.status}</TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={3}>No data available</TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </Box>
  );
};

export default TradersView;
