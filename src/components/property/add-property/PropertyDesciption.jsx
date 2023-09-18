import React, { useState } from "react";
import {
  TextField,
  Typography,
  Grid,
  Box,
  Select,
  InputLabel,
  MenuItem,
  FormControl,
} from "@mui/material";

const PropertyDesciption = ({ updateDescription }) => {
  const [propertyType, setPropertyType] = useState("Commercial");
  const [propertySubType, setPropertySubType] = useState("Office");
  const [propertyCategory, setPropertyCategory] = useState("");
  const [propertyName, setPropertyName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [area, setArea] = useState("");
  const [unit, setUnit] = useState("");

  const gatherAndSendFormData = () => {
    const formData = {
      propertyType,
      propertySubType,
      propertyCategory,
      title: propertyName,
      description,
      price,
      bedrooms,
      area,
      unit,
    };
    updateDescription(formData);
  };

  const handlePropertyTypeChange = (event) => {
    console.log("Selected Property Type:", event.target.value);
    setPropertyType(event.target.value);
    gatherAndSendFormData();
  };

  const handlePropertySubTypeChange = (event) => {
    console.log("Selected Property Sub Type:", event.target.value);
    setPropertySubType(event.target.value);
    gatherAndSendFormData();
  };
  const handleUnitChange = (event) => {
    setUnit(event.target.value);
    gatherAndSendFormData(); // If you want to immediately update the parent component
  };

  return (
    <Box
      sx={{
        backgroundColor: "white",
        padding: "3vh",
        width: "100%",
        boxShadow: "0px 1px 4px black",
      }}
    >
      <Grid item>
        <Typography
          variant="p"
          fontWeight="600"
          letterSpacing="0.5px"
          sx={{ fontSize: "3vmin" }}
        >
          Property Description
        </Typography>
        <Typography color="#737791" sx={{ fontSize: "1.5vmin" }}>
          Add basic property details to attract potential buyers or tenants
        </Typography>
      </Grid>
      <Box sx={{ marginTop: "3vh" }}>
        <form>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <FormControl
              fullWidth
              variant="outlined"
              sx={{ marginRight: "2vw", marginBottom: "2vh" }}
            >
              <InputLabel
                id="property-type-label"
                sx={{
                  color: "#00C800",
                  "&.MuiInputLabel-shrink": { color: "#00C800" },
                }}
              >
                Property Type*
              </InputLabel>
              <Select
                labelId="property-type-label"
                id="property-type-select"
                value={propertyType}
                onChange={handlePropertyTypeChange}
                label="Property Type"
              >
                <MenuItem value="Commercial">Commercial</MenuItem>
                <MenuItem value="Residential">Residential</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth variant="outlined">
              <InputLabel
                id="property-sub-type-label"
                sx={{
                  color: "#00C800",
                  "&.MuiInputLabel-shrink": { color: "#00C800" },
                }}
              >
                Property Sub Type*
              </InputLabel>
              <Select
                labelId="property-sub-type-label"
                id="property-sub-type-select"
                value={propertySubType}
                onChange={handlePropertySubTypeChange}
                label="Property Sub Type"
              >
                {propertyType === "Commercial"
                  ? [
                      <MenuItem value="Office" key="Office">
                        Office
                      </MenuItem>,
                      <MenuItem value="Retail" key="Retail">
                        Retail
                      </MenuItem>,
                      <MenuItem value="Shopping Center" key="Shopping Center">
                        Shopping Center
                      </MenuItem>,
                      <MenuItem value="Shop" key="Shop">
                        Shop
                      </MenuItem>,
                      <MenuItem value="Store" key="Store">
                        Store
                      </MenuItem>,
                      <MenuItem value="Hotel" key="Hotel">
                        Hotel
                      </MenuItem>,
                      <MenuItem value="Club" key="Club">
                        Club
                      </MenuItem>,
                      <MenuItem value="Resturant" key="Resturant">
                        Resturant
                      </MenuItem>,
                      <MenuItem value="Hotel Room" key="Hotel Room">
                        Hotel Room
                      </MenuItem>,
                    ]
                  : [
                      <MenuItem value="Appartments" key="Appartments">
                        Appartments
                      </MenuItem>,
                      <MenuItem value="House" key="House">
                        House
                      </MenuItem>,
                      <MenuItem value="Bungalow" key="Bungalow">
                        Bungalow
                      </MenuItem>,
                      <MenuItem value="Studio" key="Studio">
                        Studio
                      </MenuItem>,
                      <MenuItem value="Room" key="Room">
                        Room
                      </MenuItem>,
                      <MenuItem value="Duplex" key="Duplex">
                        Duplex
                      </MenuItem>,
                      <MenuItem value="Triplex" key="Triplex">
                        Triplex
                      </MenuItem>,
                      <MenuItem value="Cottage" key="Cottage">
                        Cottage
                      </MenuItem>,
                    ]}
              </Select>
            </FormControl>
          </Box>
          <FormControl
            fullWidth
            variant="outlined"
            sx={{ marginBottom: "2vh" }}
          >
            <InputLabel
              id="demo-simple-select-label"
              sx={{
                color: "#00C800",
                "&.MuiInputLabel-shrink": { color: "#00C800" },
              }}
            >
              Property Category*
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // value=""
              // onChange={handleChange}
              label="Property Category"
            >
              <MenuItem value="Rent">Rent</MenuItem>
              <MenuItem value="Sale">Sale</MenuItem>
            </Select>
          </FormControl>
          <TextField
            label="Property Name*"
            placeholder=""
            value={propertyName}
            onChange={(e) => {
              setPropertyName(e.target.value);
              gatherAndSendFormData();
            }}
            fullWidth
            sx={{ marginBottom: "2vh" }}
            InputLabelProps={{
              style: {
                color: "#00C800",
              },
            }}
          />
          <TextField
            label="Description"
            multiline
            rows={10}
            variant="outlined"
            fullWidth
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
              gatherAndSendFormData();
            }}
            placeholder="Enter your description here..."
            sx={{
              marginBottom: "2vh",
            }}
            InputLabelProps={{
              style: {
                color: "#00C800",
              },
            }}
          />
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <TextField
              label="Price"
              placeholder="500000"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
                gatherAndSendFormData();
              }}
              fullWidth
              sx={{ marginBottom: "2vh" }}
              InputLabelProps={{
                style: {
                  color: "#00C800",
                },
              }}
            />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <FormControl
              fullWidth
              variant="outlined"
              sx={{ marginBottom: "2vh", marginRight: "2vw" }}
            >
              <InputLabel
                id="demo-simple-select-label"
                sx={{
                  color: "#00C800",
                  "&.MuiInputLabel-shrink": { color: "#00C800" },
                }}
              >
                No. of Bedrooms
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value=""
                // onChange={handleChange}
                label="No. of Bedrooms"
              >
                <MenuItem value={0}>0</MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>3</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={6}>6</MenuItem>
                <MenuItem value={7}>7</MenuItem>
                <MenuItem value={8}>8</MenuItem>
                <MenuItem value={9}>9</MenuItem>
                <MenuItem value={10}>10</MenuItem>
              </Select>
            </FormControl>
            <TextField
              label="Area*"
              placeholder="7500"
              // value=""
              fullWidth
              sx={{ marginBottom: "2vh", marginRight: "2vw" }}
              InputLabelProps={{
                style: {
                  color: "#00C800",
                },
              }}
            />
            <FormControl
              fullWidth
              variant="outlined"
              sx={{ marginBottom: "2vh" }}
            >
              <InputLabel
                id="demo-simple-select-label"
                sx={{
                  color: "#00C800",
                  "&.MuiInputLabel-shrink": { color: "#00C800" },
                }}
              >
                Unit*
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={unit}
                onChange={handleUnitChange}
                label="Unit"
              >
                <MenuItem value="Square Ft">Square Ft</MenuItem>
                <MenuItem value="Square Mt">Square Mt</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default PropertyDesciption;
