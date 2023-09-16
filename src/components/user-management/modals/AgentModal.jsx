import React from "react";
import {
  Box,
  Typography,
  TextField,
  Modal,
  Select,
  MenuItem,
  Switch,
  Button,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const customTheme = createTheme({
  palette: {
    primary: {
      main: "#00C800", // Your custom primary color
    },
  },
});

const AgentModal = ({ open, onClose, userData }) => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("xs"));
  const isSm = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isMd = useMediaQuery(theme.breakpoints.between("sm", "md"));

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
        display="flex"
        flexDirection="column"
        padding="24px"
        width={isXs ? "90vw" : "80vw"}
        maxWidth="600px"
        bgcolor="background.paper"
        borderRadius={2}
        boxShadow={3}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          marginBottom="16px"
        >
          <Typography variant="h5">Edit Agent</Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>

        {/* Fields for Editing Agent Details */}
        <Box mb={2}>
          <Typography variant="subtitle1">First Name</Typography>
          <TextField
            variant="outlined"
            fullWidth
            defaultValue={userData?.firstName}
          />
        </Box>

        <Box mb={2}>
          <Typography variant="subtitle1">Last Name</Typography>
          <TextField
            variant="outlined"
            fullWidth
            defaultValue={userData?.lastName}
          />
        </Box>

        <Box mb={2}>
          <Typography variant="subtitle1">Phone Number</Typography>
          <TextField
            variant="outlined"
            fullWidth
            defaultValue={userData?.phoneNumber}
          />
        </Box>

        <Box mb={2}>
          <Typography variant="subtitle1">Email</Typography>
          <TextField
            variant="outlined"
            fullWidth
            defaultValue={userData?.email}
          />
        </Box>

        <Box mb={2}>
          <Typography variant="subtitle1">City</Typography>
          <TextField
            variant="outlined"
            fullWidth
            defaultValue={userData?.cityName}
          />
        </Box>

        <Box mb={2}>
          <Typography variant="subtitle1">Timezone</Typography>
          <Select
            fullWidth
            defaultValue={userData?.timezone}
            variant="outlined"
          >
            <MenuItem value="UTC+1">UTC+1</MenuItem>
            <MenuItem value="UTC+2">UTC+2</MenuItem>
            <MenuItem value="UTC+3">UTC+3</MenuItem>
            {/* ... more timezones can be added */}
          </Select>
        </Box>

        <Box mb={2} display="flex" alignItems="center">
          <Typography variant="subtitle1" mr={2}>
            Status (Active)
          </Typography>
          <ThemeProvider theme={customTheme}>
            <Switch defaultChecked={userData?.status} color="primary" />
          </ThemeProvider>
        </Box>

        <Box mb={2}>
          <Typography variant="subtitle1">Profile Image URL</Typography>
          <TextField
            variant="outlined"
            fullWidth
            defaultValue={userData?.profileImage}
          />
        </Box>

        <Box mt={3}>
          <Button variant="contained" sx={{ backgroundColor: "#00C800", "&:hover": {backgroundColor:'#00C800'} }}>
            Save Changes
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default AgentModal;
