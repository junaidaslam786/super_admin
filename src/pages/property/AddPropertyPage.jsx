import React, { useRef } from "react";
import { Grid, Box, Button } from "@mui/material";
import PropertyDesciption from "../../components/property/add-property/PropertyDesciption";
import FeaturedImage from "../../components/property/add-property/FeaturedImage";
import UploadVRTour from "../../components/property/add-property/UploadVRTour";
import ListingLocation from "../../components/property/add-property/ListingLocation";
import AddMoreImages from "../../components/property/add-property/AddMoreImages";
import AddDocuments from "../../components/property/add-property/AddDocuments";
import MainLayout from "../../layout/MainLayout";

const AddPropertyPage = () => {
  const refs = {
    propertyDesciption: useRef(null),
    featuredImage: useRef(null),
    uploadVRTour: useRef(null),
    listingLocation: useRef(null),
    addMoreImages: useRef(null),
    addDocuments: useRef(null),
  };

  const sections = [
    {
      id: "propertyDescription",
      label: "Property Description",
      component: <PropertyDesciption />,
    },
    {
      id: "featuredImage",
      label: "Featured Image",
      component: <FeaturedImage />,
    },
    {
      id: "uploadVRTour",
      label: "Upload VR Tour",
      component: <UploadVRTour />,
    },
    {
      id: "listingLocation",
      label: "Listing Location",
      component: <ListingLocation />,
    },
    {
      id: "addMoreImages",
      label: "Add More Images",
      component: <AddMoreImages />,
    },
    {
      id: "addDocuments",
      label: "Add Documents",
      component: <AddDocuments />,
    },
  ];

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <MainLayout>
      <Grid
        container
        spacing={3}
        sx={{ padding: "4vh 0", backgroundColor: "#FAFBFC" }}
      >
        <Grid item xs={12} md={3} sx={{ width: "25%" }}>
          <Box
            sx={{
              margin: "0 3vw",
              width: { xxl: "15vw", xl: "15vw", md: "15vw", sm: "90vw" },
              backgroundColor: "white",
              boxShadow: "0 0 2px rgba(0, 0, 0, 0.5)",
              height: "fit-content",
            }}
          >
            {sections.map((section) => (
              <Box
                key={section.id}
                onClick={() => scrollToRef(refs[section.id])}
                sx={{
                  fontSize: "2vmin",
                  color: "#737791",
                  padding: "1vw",
                  paddingLeft: "3vw",
                  borderBottom: "0.1vmin solid rgba(0, 0, 0, 0.5)",
                  "&:hover": {
                    borderLeft: "0.5vmin solid #00C800",
                    color: "#00C800",
                    cursor: "pointer",
                  },
                }}
              >
                {section.label}
              </Box>
            ))}
          </Box>
        </Grid>
        <Grid item xs={12} md={9}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              maxWidth: "100%", // Added max width to ensure it doesn't exceed the available space
              overflowX: "hidden", // Hide any horizontal overflow
              backgroundColor: "#FAFBFC",
              paddingRight: "1vw",
            }}
          >
            {sections.map((section) => (
              <Box key={section.id} ref={refs[section.id]}>
                {section.component}
              </Box>
            ))}
          </Box>
        </Grid>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            marginTop: "5vh",
            marginLeft: "25vw",
            marginBottom: "20vmin",
          }}
        >
          <Button
            variant="outlined"
            color="primary"
            sx={{
              border: "0.1vmin solid #00C800",
              color: "#00C800",
              fontSize: "1vmin",
              height: "5vmin",
              width: "8vw",
              marginRight: "2vw",
              "&:hover": {
                backgroundColor: "#00C800",
                color: "white",
                border: "0.1vmin solid #00C800",
              },
            }}
          >
            Save Changes
          </Button>
          <Button
            variant="outlined"
            color="primary"
            sx={{
              border: "0.1vmin solid red",
              color: "red",
              fontSize: "1vmin",
              height: "5vmin",
              width: "8vw",
              "&:hover": {
                backgroundColor: "red",
                color: "white",
                border: "0.1vmin solid red",
              },
            }}
          >
            Discard Changes
          </Button>
        </Box>
      </Grid>
    </MainLayout>
  );
};

export default AddPropertyPage;
