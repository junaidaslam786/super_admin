import React, { useState, useEffect, useRef } from "react";
import {
  TextField,
  Typography,
  Grid,
  Box,
  Select,
  InputLabel,
  MenuItem,
  FormControl,
  Card,
  CardMedia,
} from "@mui/material";
import {
  GoogleMap,
  LoadScript,
  StandaloneSearchBox,
  Marker,
} from "@react-google-maps/api";

const ListingLocation = ({ updateListingLocation }) => {
  // State management for address, city, postal code, and region
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [region, setRegion] = useState("");
  const [mapCenter, setMapCenter] = useState({ lat: 51.505, lng: -0.09 });
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const searchBoxRef = useRef();
  const onLoad = (ref) => {
    searchBoxRef.current = ref;
  };

  const onPlacesChanged = () => {
    const place = searchBoxRef.current.getPlaces()[0];
    const location = place.geometry.location;
    setAddress(place.formatted_address);
    setLatitude(location.lat());
    setLongitude(location.lng());
    setMapCenter({ lat: location.lat(), lng: location.lng() });
    updateListingData();
  };

  const updateListingData = () => {
    const data = {
      address: searchBoxRef.current?.getPlaces()[0]?.formatted_address,
      city: city,
      postalCode: postalCode,
      region: region,
      latitude: latitude,
      longitude: longitude,
    };
    updateListingLocation(data);
  };

  return (
    <Box
      sx={{
        backgroundColor: "white",
        padding: "3vh",
        width: "100%",
        marginTop: "5vmin",
        boxShadow: "0px 0px 1px black",
      }}
    >
      <Grid item sx={{ marginBottom: "2vmin" }}>
        <Typography
          variant="h6"
          fontWeight="600"
          letterSpacing="0.5px"
          sx={{ fontSize: "3vmin" }}
        >
          Listing Location
        </Typography>
      </Grid>

      <LoadScript
        googleMapsApiKey="AIzaSyCiIUKO-RSjk304mIlR7bq8h4xqbxXrG58&libraries=places,drawing"
        libraries={["places"]}
      >
        <StandaloneSearchBox onLoad={onLoad} onPlacesChanged={onPlacesChanged}>
          <TextField
            label="Address*"
            placeholder="624 Queens Rd, Gainesville, FL 32607, USA"
            // value={address}
            fullWidth
            sx={{ marginBottom: "2vh" }}
          />
        </StandaloneSearchBox>

        <GoogleMap
          center={mapCenter}
          zoom={13}
          mapContainerStyle={{ width: "100%", height: "400px" }}
        >
          {latitude && longitude && (
            <Marker position={{ lat: latitude, lng: longitude }} />
          )}
        </GoogleMap>
      </LoadScript>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <TextField
          label="City"
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
            updateListingData();
          }}
          fullWidth
          sx={{ marginBottom: "2vh", marginTop: "5vh" }}
          InputLabelProps={{
            style: {
              color: "#00C800",
              marginRight: "2vw",
            },
          }}
          style={{ marginRight: "2vw" }}
        />

        <TextField
          label="Postal Code"
          value={postalCode}
          onChange={(e) => {
            setPostalCode(e.target.value);
            updateListingData();
          }}
          fullWidth
          sx={{ marginBottom: "2vh", marginTop: "5vh" }}
          InputLabelProps={{
            style: {
              color: "#00C800",
              marginRight: "2vw",
            },
          }}
          style={{ marginRight: "2vw" }}
        />

        <TextField
          label="Region"
          value={region}
          onChange={(e) => {
            setRegion(e.target.value);
            updateListingData();
          }}
          fullWidth
          sx={{ marginBottom: "2vh", marginTop: "5vh" }}
          InputLabelProps={{
            style: {
              color: "#00C800",
              marginRight: "2vw",
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default ListingLocation;
