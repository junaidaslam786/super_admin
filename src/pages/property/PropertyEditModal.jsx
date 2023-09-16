import React from "react";
import { Box, Typography, Modal, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import PropertyDescription from "../../components/property/add-property/PropertyDesciption";
import FeaturedImage from "../../components/property/add-property/FeaturedImage";
import UploadVRTour from "../../components/property/add-property/UploadVRTour";
import ListingLocation from "../../components/property/add-property/ListingLocation";
import AddMoreImages from "../../components/property/add-property/AddMoreImages";
import AddDocuments from "../../components/property/add-property/AddDocuments";

const PropertyEditModal = ({ open, onClose, userData }) => {
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
        maxWidth="800px"
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
          <Typography variant="p" sx={{ fontWeight: "600", fontSize: "4vmin" }}>
            Edit Property
          </Typography>
        </Box>
        <Box height="80vh" sx={{ overflowY: "auto" }}>
          <PropertyDescription />
          <FeaturedImage />
          <UploadVRTour />
          <ListingLocation />
          <AddMoreImages />
          <AddDocuments />
          <Box sx={{marginTop:'5vmin', marginBottom:'5vmin'}}>
            <Button
              variant="outlined"
              sx={{
                border: "0.1vmin solid #00C800",
                color: "#00C800",
                padding: "1vmin 1vw",
                marginRight: "2vw",
                fontSize: "1.5vmin",
                "&:hover": {
                  border: "0.1vmin solid #00C800",
                  color: "white",
                  backgroundColor: "#00C800",
                },
              }}
            >
              Save Changes
            </Button>
            <Button
              variant="outlined"
              sx={{
                border: "0.1vmin solid red",
                color: "red",
                padding: "1vmin 1vw",
                fontSize: "1.5vmin",
                "&:hover": {
                  border: "0.1vmin solid red",
                  color: "white",
                  backgroundColor: "red",
                },
              }}
            >
              Discard Changes
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default PropertyEditModal;
