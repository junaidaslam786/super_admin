
import React from "react";
import { Card, CardContent, Typography, Modal, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

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

const CustomerDetailsModal = ({ userData, open, onClose }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="user-details-modal"
      aria-describedby="modal-to-view-user-details"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '80%',
          maxWidth: 600,
          bgcolor: 'background.paper',
          borderRadius: '10px',
          boxShadow: 24,
          p: 4,
        }}
      >
        <StyledCard>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              First Name: {userData?.firstName}
            </Typography>
            <Typography variant="h6" gutterBottom>
              Last Name: {userData?.lastName}
            </Typography>
            <Typography variant="h6" gutterBottom>
              Email Address: {userData?.email}
            </Typography>
            <Typography variant="h6" gutterBottom>
              Phone no#: {userData?.phoneNumber}
            </Typography>
          </CardContent>
        </StyledCard>
      </Box>
    </Modal>
  );
};

export default CustomerDetailsModal;
