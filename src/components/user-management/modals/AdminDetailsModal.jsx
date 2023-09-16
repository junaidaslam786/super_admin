import React from "react";
import { Card, CardContent, Typography, Modal, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { styled } from "@mui/material/styles";
import proImage from "../../../assets/Profile.svg";

const StyledCard = styled(Card)(({ theme }) => ({
  minWidth: 275,
  maxWidth: 500,
  margin: "auto",
  backgroundColor: theme.palette.primary.light,
  color: theme.palette.primary.contrastText,
  borderRadius: "15px",
  boxShadow: theme.shadows[5],
  fontFamily: "'Poppins', sans-serif",
}));

const AdminDetailsModal = ({ userData, open, onClose }) => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="user-details-modal"
      aria-describedby="modal-to-view-user-details"
      sx={{
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
      }}
    >
      <Box
        padding="24px"
        width={isXs ? "90vw" : "80vw"}
        maxWidth="600px"
        bgcolor="background.paper"
        borderRadius={2}
        boxShadow={3}
      >
        <StyledCard
        sx={{
          backgroundColor:'#00C800'
        }}
        >
          <CardContent
          sx={{
            backgroundColor: "#00C800",
          }}
          >
            <Typography
              variant="h5"
              gutterBottom
              style={{paddingBottom: "5px" }}
            >
              Admin Details
            </Typography>
            <hr />
            <Typography variant="h6" gutterBottom>
              <span style={{ fontWeight: "bold", marginRight: "10px" }}>
                First Name:
              </span>{" "}
              {userData?.firstName}
            </Typography>
            <Typography variant="h6" gutterBottom>
              <span style={{ fontWeight: "bold", marginRight: "10px" }}>
                Last Name:
              </span>{" "}
              {userData?.lastName}
            </Typography>
            <Typography variant="h6" gutterBottom>
              <span style={{ fontWeight: "bold", marginRight: "10px" }}>
                Email:
              </span>{" "}
              {userData?.email}
            </Typography>
            <Typography variant="h6" gutterBottom>
              <span style={{ fontWeight: "bold", marginRight: "10px" }}>
                Phone Number:
              </span>{" "}
              {userData?.phoneNumber}
            </Typography>
            {userData?.profileImage && (
              <img
                src={proImage || userData.profileImage}
                alt="Admin Profile"
                style={{
                  width: "60%",
                  display: "block",
                  margin: "20px auto",
                  borderRadius: "10px",
                  boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
                }}
              />
            )}
            <Typography variant="h6" gutterBottom>
              <span style={{ fontWeight: "bold", marginRight: "10px" }}>
                City:
              </span>{" "}
              {userData?.cityName}
            </Typography>
            <Typography variant="h6" gutterBottom>
              <span style={{ fontWeight: "bold", marginRight: "10px" }}>
                Timezone:
              </span>{" "}
              {userData?.timezone}
            </Typography>
            <Typography variant="h6" gutterBottom>
              <span style={{ fontWeight: "bold", marginRight: "10px" }}>
                Status:
              </span>{" "}
              {userData?.status ? "Active" : "Inactive"}
            </Typography>
          </CardContent>
        </StyledCard>
      </Box>
    </Modal>
  );
};

export default AdminDetailsModal;
