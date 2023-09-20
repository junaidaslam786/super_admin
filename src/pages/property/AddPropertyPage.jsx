import React, { useRef, useState, useEffect } from "react";
import { Grid, Box, Button } from "@mui/material";
import PropertyDesciption from "../../components/property/add-property/PropertyDesciption";
import FeaturedImage from "../../components/property/add-property/FeaturedImage";
import UploadVRTour from "../../components/property/add-property/UploadVRTour";
import ListingLocation from "../../components/property/add-property/ListingLocation";
import AddMoreImages from "../../components/property/add-property/AddMoreImages";
import AddDocuments from "../../components/property/add-property/AddDocuments";
import MainLayout from "../../layout/MainLayout";
import { useAddPropertyMutation } from "../../redux/api/propertyManagementApi";
import { useNavigate } from "react-router-dom";
import { useGetAllPropertiesQuery } from "../../redux/api/propertyManagementApi";
import { setProperties } from "../../redux/features/propertyManagementSlice";
import { useDispatch } from "react-redux";

const AddPropertyPage = () => {
  const [propertyCreate, setPropertyCreated] = useState(false);
  // State for each child component's data
  const [propertyDescription, setPropertyDescription] = useState({});
  const [featuredImage, setFeaturedImage] = useState(null);
  const [vrTour, setVRTour] = useState({});
  const [vrData, setVrData] = useState({ type: null, data: null });

  const [listingLocation, setListingLocation] = useState({});
  //  const [moreImages, setMoreImages] = useState([]);
  //  const [documents, setDocuments] = useState([]);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [addProperty, { isLoading, isError, error, isSuccess }] =
    useAddPropertyMutation({
      onSuccess: () => {
        setPropertyCreated(true);
      },
    });

  const { data: properties, refetch } = useGetAllPropertiesQuery();

  const refs = {
    propertyDescription: useRef(null),
    featuredImage: useRef(null),
    uploadVRTour: useRef(null),
    listingLocation: useRef(null),
    addMoreImages: useRef(null),
    addDocuments: useRef(null),
  };

  const handleVRTourData = (receivedData) => {
    setVrData(receivedData);  // Store the received data in the state
  
    // Differentiate and handle based on the type
    if (receivedData.type === "file") {
      // Handle the received file
      console.log("Received a file:", receivedData.data);
    } else if (receivedData.type === "url") {
      // Handle the received URL
      console.log("Received a URL:", receivedData.data);
    }
  };
  

  const handleSubmit = () => {
    const rawUserState = localStorage.getItem("userState");
    let userId;
    if (rawUserState) {
      const userState = JSON.parse(rawUserState);
      const user = userState.user;
      userId = user.userId; 
    }
    
    const propertyData = {
      userId: userId,
      title: propertyDescription.title, 
      address: listingLocation.address,
      city: listingLocation.city,
      region: listingLocation.region,
      price: propertyDescription.price,
      description: propertyDescription.description,
      image: featuredImage,
      latitude: listingLocation.latitude,
      longitude: listingLocation.longitude,
      // ... (other existing fields)
    };

    // Integrate VR data
    if (vrData.type === "file") {
      propertyData.vrFile = vrData.data;  // Add the file data to the propertyData
      // Note: Depending on your backend, you might need to handle the file data differently, such as converting it to a specific format or uploading separately.
    } else if (vrData.type === "url") {
      propertyData.vrUrl = vrData.data;  // Add the URL to the propertyData
    }

    addProperty(propertyData);
    navigate("/property-list");
};


  useEffect(() => {
    if (propertyCreate) {
      dispatch(setProperties(properties));
      refetch();
      setPropertyCreated(false);
    }
  }, [propertyCreate, refetch, properties]);

  const sections = [
    {
      id: "propertyDescription",
      label: "Property Description",
      component: (
        <PropertyDesciption updateDescription={setPropertyDescription} />
      ),
    },
    {
      id: "featuredImage",
      label: "Featured Image",
      component: <FeaturedImage updateImage={setFeaturedImage} />,
    },
    {
      id: "uploadVRTour",
      label: "Upload VR Tour",
      // component: <UploadVRTour />,
      component: <UploadVRTour updateVrTour={handleVRTourData} />,
    },
    {
      id: "listingLocation",
      label: "Listing Location",
      component: <ListingLocation updateListingLocation={setListingLocation} />,
    },
    {
      id: "addMoreImages",
      label: "Add More Images",
      component: <AddMoreImages />,
      // component: <AddMoreImages updateImages={setMoreImages}/>,
    },
    {
      id: "addDocuments",
      label: "Add Documents",
      component: <AddDocuments />,
      // component: <AddDocuments updateDocuments={setDocuments}/>,
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
            onClick={handleSubmit}
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
