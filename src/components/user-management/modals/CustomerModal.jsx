import React from "react";
import { Box, Typography, TextField, Modal } from "@mui/material";
import image from "../../../assets/UserImage.png";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const CustomerModal = ({ open, onClose }) => {

  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('xs'));
  const isSm = useMediaQuery(theme.breakpoints.between('xs', 'sm'));
  const isMd = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  let modalWidth = '50vw';
  let modalHeight = 'auto';

  if (isXs) {
    modalWidth = '90vw';
    modalHeight = '90vh';
  } else if (isSm) {
    modalWidth = '80vw';
  } else if (isMd) {
    modalWidth = '70vw';
  }

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="customer-modal-title"
      aria-describedby="customer-modal-description"
    >
      <Box
        display="flex"
        flexDirection="row"
        p={2}
        m="auto"
        top="10%"
        left="10%"
        transform="translate(-50%, -50%)"
        position="absolute"
        overflow={"auto"}
        // width={isXs ? '90vw' : '50vw'}
        // height={isXs ? '90vh' : 'auto'}
        width={modalWidth}
        height={modalHeight}
        bgcolor="background.paper"
      >
        <Box position="absolute" right={16} top={16}>
          <IconButton onClick={onClose} size="large">
            <CloseIcon />
          </IconButton>
        </Box>
        <Box display="flex" flexDirection="column" ml={15} mt={10}>
          <Typography
            variant="h4"
            fontWeight="600"
            fontFamily="Arial, Helvetica, sans-serif"
          >
            Customer
          </Typography>
          <Box mt={5}>
            <Typography variant="subtitle1">First Name</Typography>
            <TextField
              variant="outlined"
              fullWidth
              size="medium"
              InputProps={{
                style: {
                  width: "50vmin",
                  height: "6vmin",
                  padding: "1vmin 2vmin",
                  borderRadius: "1vmin",
                  borderColor: "#00C800",
                },
              }}
            />
          </Box>
          <Box mt={5}>
            <Typography variant="subtitle1">Phone Number</Typography>
            <TextField
              variant="outlined"
              fullWidth
              size="medium"
              InputProps={{
                style: {
                  width: "50vmin",
                  height: "6vmin",
                  padding: "1vmin 2vmin",
                  borderRadius: "1vmin",
                  borderColor: "#00C800",
                },
              }}
            />
          </Box>
        </Box>
        <Box display="flex" flexDirection="column" ml={15} mt={10}>
          <Typography
            variant="h4"
            fontWeight="600"
            fontFamily="Arial, Helvetica, sans-serif"
          >
            View
          </Typography>
          <Box mt={5}>
            <Typography variant="subtitle1">Last Name</Typography>
            <TextField
              variant="outlined"
              fullWidth
              size="medium"
              InputProps={{
                style: {
                  width: "50vmin",
                  height: "6vmin",
                  padding: "1vmin 2vmin",
                  borderRadius: "1vmin",
                  borderColor: "#00C800",
                },
              }}
            />
          </Box>
          <Box mt={5}>
            <Typography variant="subtitle1">City</Typography>
            <TextField
              variant="outlined"
              fullWidth
              size="medium"
              InputProps={{
                style: {
                  width: "50vmin",
                  height: "6vmin",
                  padding: "1vmin 2vmin",
                  borderRadius: "1vmin",
                  borderColor: "#00C800",
                },
              }}
            />
          </Box>
        </Box>
        <Box display="flex" flexDirection="column" ml={15} mt={10}>
          <Typography
            variant="h4"
            fontWeight="600"
            fontFamily="Arial, Helvetica, sans-serif"
          >
            Profile Image
          </Typography>
          <Box mt={5}>
            <img
              src={image}
              alt="image"
              style={{ width: "30vmin", height: "30vmin" }}
            />
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default CustomerModal;
