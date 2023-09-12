import React from "react";
import { Modal, Box } from "@mui/material";

import UserDetailCard from "./UserDetailCard";

const UserDetailModal = ({ userData, open, onClose }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="user-detail-modal"
      aria-describedby="modal-to-view-user-details"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '80%',
          maxWidth: 500,
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
        }}
      >
        <UserDetailCard userData={userData} />
      </Box>
    </Modal>
  );
};

export default UserDetailModal