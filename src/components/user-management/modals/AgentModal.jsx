import React from "react";
import {
  Modal,
  TextField,
  useMediaQuery,
  IconButton,
  Box,
  Button,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import image from "../../../assets/loginimg.png";

const AgentModal = ({open, onClose}) => {
  // const [open, setOpen] = React.useState(true);

  // Define breakpoints using the useMediaQuery hook
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("xs"));
  const isSm = useMediaQuery(theme.breakpoints.between("sm", "md"));

  // const handleClose = () => {
  //   setOpen(false);
  // };

  return (
    <Modal
      open={open}
      onClose={onClose}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "24px",
          width: "80vw",
          maxWidth: "600px",
          backgroundColor: "white",
          position: "relative",
        }}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          marginBottom="16px"
        >
          <p>AgentModal</p>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Box display="flex" flexDirection="column" gap="16px">
          <Box
            display="flex"
            flexDirection={isXs ? "column" : "row"}
            gap="16px"
          >
            <TextField label="First Name" fullWidth variant="outlined" />
            <TextField label="Last Name" fullWidth variant="outlined" />
          </Box>
          <TextField label="Email" fullWidth variant="outlined" />
          <TextField label="Phone" fullWidth variant="outlined" />
          <TextField label="Address" fullWidth variant="outlined" />
          <TextField label="City" fullWidth variant="outlined" />
          <TextField label="State" fullWidth variant="outlined" />
          <TextField label="Country" fullWidth variant="outlined" />
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            marginTop="16px"
          >
            <img
              src={image}
              alt="Profile"
              style={{
                width: isXs ? "50%" : isSm ? "70%" : "100%",
                borderRadius: "50%",
              }}
            />
          </Box>
          <Button
            onClick={onClose}
            variant="contained"
            color="primary"
            style={{ marginTop: "20px" }}
          >
            Close
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default AgentModal;
