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
   //  const [vrTour, setVRTour] = useState({});
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

  const {data: properties, refetch} = useGetAllPropertiesQuery();
  


 

  const refs = {
    propertyDesciption: useRef(null),
    featuredImage: useRef(null),
    uploadVRTour: useRef(null),
    listingLocation: useRef(null),
    addMoreImages: useRef(null),
    addDocuments: useRef(null),
  };

  const handleSubmit = () => {
    const rawUserState = localStorage.getItem("userState");
    let userId;
    if (rawUserState) {
      const userState = JSON.parse(rawUserState);
      const user = userState.user;
      userId = user.userId; // Adjust this key as needed
    }
    const propertyData = {
      userId: userId,
      title: propertyDescription.title, // Map propertyName to title
      address: listingLocation.address,
      city: listingLocation.city,
      region: listingLocation.region,
      price: propertyDescription.price,
      description: propertyDescription.description, // If there's a separate description field
      image: featuredImage,
      latitude: listingLocation.latitude, // Add the latitude
      longitude: listingLocation.longitude, // Add the longitude
      // vrTour: vrTour,
      // images: moreImages,
      // docs: documents
    };
    addProperty(propertyData);
    // Use your builder.mutation function or other methods to send propertyData to the backend
    navigate("/property-list");
  };
  
  useEffect(() => {
    if(propertyCreate) {
      dispatch(setProperties(properties))
      refetch();
      setPropertyCreated(false)
    }
  }, [propertyCreate, refetch, properties])
  

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
      component: <UploadVRTour />,
      // component: <UploadVRTour updateVrTour={setVRTour}/>,
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
