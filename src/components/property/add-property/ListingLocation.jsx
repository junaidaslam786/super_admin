import React, { useState, useRef } from "react";
import { TextField, Typography, Grid, Box } from "@mui/material";
import {
  GoogleMap,
  LoadScript,
  StandaloneSearchBox,
  Marker,
} from "@react-google-maps/api";

// Define libraries array outside the component to avoid re-render issues
const libraries = ["places"];

const ListingLocation = ({ updateListingLocation }) => {
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
    const places = searchBoxRef.current?.getPlaces();
    if (places && places.length > 0) {
      const place = places[0];
      const location = place.geometry.location;
      setAddress(place.formatted_address);
      setLatitude(location.lat());
      setLongitude(location.lng());
      setMapCenter({ lat: location.lat(), lng: location.lng() });
      updateListingData();
    }
  };

  const updateListingData = () => {
    const data = {
      address: address,
      city: city,
      postalCode: postalCode,
      region: region,
      latitude: latitude,
      longitude: longitude,
    };
    updateListingLocation(data);
  };

  // Use the Google Maps API to reverse geocode the lat/lng to an address
  const reverseGeocode = async (lat, lng) => {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyCiIUKO-RSjk304mIlR7bq8h4xqbxXrG58&libraries=places,drawing`
      );
      const data = await response.json();
      if (data.results.length > 0) {
        return data.results[0].formatted_address; // This will give you the full address
      } else {
        return "Address not found"; // Fallback in case no results are found
      }
    } catch (error) {
      console.error("Error during reverse geocoding:", error);
      return "Error retrieving address"; // Error message in case the request fails
    }
  };

  const onMarkerDragEnd = async (e) => {
    const newLat = e.latLng.lat();
    const newLng = e.latLng.lng();
    const newAddress = await reverseGeocode(newLat, newLng);
    setAddress(newAddress);
    setLatitude(newLat);
    setLongitude(newLng);
    setMapCenter({ lat: newLat, lng: newLng });
    updateListingData({
      address: newAddress,
      city,
      postalCode,
      region,
      latitude: newLat,
      longitude: newLng,
    });
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
        libraries={libraries}
      >
        <StandaloneSearchBox onLoad={onLoad} onPlacesChanged={onPlacesChanged}>
          <TextField
            label="Address*"
            placeholder="Enter address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
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
            <Marker
              position={{ lat: latitude, lng: longitude }}
              draggable={true}
              onDragEnd={onMarkerDragEnd}
            />
          )}
        </GoogleMap>
      </LoadScript>

      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <TextField
          label="City"
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
            updateListingData();
          }}
          fullWidth
          sx={{ marginBottom: "2vh", marginTop: "5vh" }}
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
        />
      </Box>
    </Box>
  );
};

export default ListingLocation;
