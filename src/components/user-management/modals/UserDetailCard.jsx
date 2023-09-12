import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const UserDetailCard = ({ userData }) => {
  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <Card
      variant="outlined"
      style={{ minWidth: 275, maxWidth: 500, margin: "auto" }}
    >
      <CardContent>
        {userData.userType === "Agent" && (
          <>
            <Typography variant="h6" gutterBottom>
              Company Name: {userData.companyName}
            </Typography>
            <Typography variant="h6" gutterBottom>
              Company Position: {userData.companyPosition}
            </Typography>
            <Typography variant="h6" gutterBottom>
              First Name: {userData.firstName}
            </Typography>
            <Typography variant="h6" gutterBottom>
              Last Name: {userData.lastName}
            </Typography>
            <Typography variant="h6" gutterBottom>
              Email: {userData.email}
            </Typography>
            <Typography variant="h6" gutterBottom>
              Phone Number: {userData.phoneNumber}
            </Typography>
            <Typography variant="h6" gutterBottom>
              Company Registration#: {userData.registrationNumber}
            </Typography>
            <Typography variant="h6" gutterBottom>
              Assigned Role: {userData.assignedRole}
            </Typography>
          </>
        )}
        {userData.userType === "Customer" && (
          <>
            <Typography variant="h6" gutterBottom>
              First Name: {userData.firstName}
            </Typography>
            <Typography variant="h6" gutterBottom>
              Last Name: {userData.lastName}
            </Typography>
            <Typography variant="h6" gutterBottom>
              Email Address: {userData.email}
            </Typography>
            <Typography variant="h6" gutterBottom>
              Phone no#: {userData.phoneNumber}
            </Typography>
          </>
        )}
        {userData.userType === "Superadmin" && (
          <>
            <Typography variant="h6" gutterBottom>
              First Name: {userData.firstName}
            </Typography>
            <Typography variant="h6" gutterBottom>
              Last Name: {userData.lastName}
            </Typography>
            <Typography variant="h6" gutterBottom>
              Email: {userData.email}
            </Typography>
            <Typography variant="h6" gutterBottom>
              Phone Number: {userData.phoneNumber}
            </Typography>
            {userData.profileImage && (
              <img
                src={userData.profileImage}
                alt="Admin Profile"
                style={{ width: "100%", marginTop: 10 }}
              />
            )}
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default UserDetailCard;
