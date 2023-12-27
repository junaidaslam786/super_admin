import React from "react";
import {
  Box,
  Typography,
  Link,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Card,
  CardContent,
} from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useLocation } from "react-router-dom";
import PropertyImage from "../../assets/Property.svg"; // Replace with your image import
import AttachFileIcon from "@mui/icons-material/AttachFile";
import { useGetPropertyByIdQuery } from "../../redux/api/propertyManagementApi";

const PropertyView = () => {
  const location = useLocation();
  const propertyDetails = location.state?.selectedPropertyId;

  const { data: selectedProperty } = useGetPropertyByIdQuery(propertyDetails, {
    skip: !propertyDetails,
  });
  console.log("selected property", selectedProperty);

  if (!selectedProperty) {
    return (
      <Typography variant="h6" align="center">
        Property details not available
      </Typography>
    );
  }

  const getFileLink = (path) => {
    if (!path) {
      return <Typography variant="subtitle1">No document available</Typography>;
    }
    const fullUrl = new URL(path, process.env.REACT_APP_SERVER_ENDPOINT).href;
    const fileName = path.split("/").pop();

    return (
      <Link href={fullUrl} target="_blank" rel="noopener noreferrer">
        <AttachFileIcon style={{ marginRight: "5px" }} />
        {fileName}
      </Link>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        backgroundColor: "#FAFBFC",
        padding: "2vmin",
      }}
    >
      {/* Property Images Slider */}
      <Card
        sx={{
          maxWidth: "100%",
          width: "100%",
          marginBottom: "2vmin",
          "& > *": {
            maxWidth: "800px", // Limit card content width
          },
          "@media (max-width: 1024px)": {
            width: "500px", // Adjust width for smaller screens
          },
        }}
      >
        <CardContent>
          <Typography variant="h6">Property Images:</Typography>
          <Slider {...settings}>
            {selectedProperty?.productImages.map((image, index) => (
              <Box key={index}>
                <img
                  src={`${process.env.REACT_APP_SERVER_ENDPOINT}/${image.image}`}
                  alt="Property"
                  style={{
                    maxWidth: "100%",
                    height: "50vh",
                    objectFit: "cover",
                    alignItems: "center",
                  }}
                />
              </Box>
            ))}
          </Slider>
        </CardContent>
      </Card>

      {/* Property Details Card */}
      <Card sx={{ marginBottom: "2vmin" }}>
        <CardContent>
          <Box
            sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
          >
            <img
              src={`${process.env.REACT_APP_SERVER_ENDPOINT}/${selectedProperty?.featuredImage}`}
              alt="Property"
              style={{
                width: "10vmin",
                borderRadius: "50%",
                marginRight: "1vmin",
              }}
            />
            <Typography variant="h5">{selectedProperty?.title}</Typography>
          </Box>
          <Divider sx={{ my: 2 }} />
          <Typography variant="subtitle1">
            Price: {selectedProperty?.price}
          </Typography>
          <Typography variant="subtitle1">
            Address: {selectedProperty?.address}
          </Typography>
          <Typography variant="subtitle1">
            City: {selectedProperty?.city}
          </Typography>
          <Typography variant="subtitle1">
            Status: {selectedProperty?.status}
          </Typography>
          <Typography variant="subtitle1">
            API Code: {selectedProperty?.apiCode}
          </Typography>
        </CardContent>
      </Card>

      {/* Documents Section */}
      <Card sx={{ marginBottom: "2vmin" }}>
        <CardContent>
          <Typography variant="h6">Documents:</Typography>
          {selectedProperty?.productDocuments.map((doc, index) => (
            <Box key={index}>{getFileLink(doc.file)}</Box>
          ))}
        </CardContent>
      </Card>

      {/* Associated Users Section */}
      <Card>
        <CardContent>
          <Typography variant="h6">Associated Users:</Typography>
          <TableContainer component={Paper}>
            <Table aria-label="property users table">
              <TableHead>
                <TableRow>
                  <TableCell>First Name</TableCell>
                  <TableCell>Last Name</TableCell>
                  <TableCell>Email</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Array.isArray(propertyDetails?.productAllocations) ? (
                  propertyDetails.productAllocations.map((allocation) => (
                    <TableRow key={allocation.id}>
                      <TableCell>{allocation.user.firstName}</TableCell>
                      <TableCell>{allocation.user.lastName}</TableCell>
                      <TableCell>{allocation.user.email}</TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={3}>No data available</TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
      {/* Add more sections as needed to cover all fields */}
    </Box>
  );
};

export default PropertyView;
