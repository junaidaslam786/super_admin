import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Logo from "../../assets/omg.png";
import { useNavigate } from "react-router-dom";


const Services = ({name, id}) => {
  const navigate = useNavigate();

  const handleDetailsClick = () => {
    navigate(`/subscription-details/${id}`);
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        alignItems: "center",
        backgroundColor: "#FAFBFC",
        paddingTop: "10vmin",
        paddingBottom:'5vmin'
      }}
    >
        <Box sx={{ width: "80%", marginBottom: "3vmin" }}>
          <Typography
            variant="p"
            sx={{
              fontSize: "4vmin",
              fontWeight: "600",
              fontFamily: "Helvetica, sans-serif",
            }}
          >
            {name}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            width: "80%",
            height: "20vmin",
            boxShadow: "0px 0px 2px black",
            borderRadius: "0.4vmin",
            backgroundColor: "white",
            transition: "0.3s ease",
            "&:hover": {
              boxShadow: "0px 0px 5px black",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "15vmin",
              height: "8vmin",
              boxShadow: "0px 0px 2px #00C800",
              borderRadius: "1vmin",
              backgroundColor: "white",
              transition: "0.3s ease",
              "&:hover": {
                boxShadow: "0px 0px 5px #00C800",
              },
            }}
          >
            <Typography
              sx={{ fontSize: "2.5vmin", color: "#00C800", fontWeight: "600" }}
            >
              222
            </Typography>
            <Typography>Active</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "15vmin",
              height: "8vmin",
              boxShadow: "0px 0px 2px #00C800",
              borderRadius: "1vmin",
              backgroundColor: "white",
              transition: "0.3s ease",
              "&:hover": {
                boxShadow: "0px 0px 5px #00C800",
              },
            }}
          >
            <Typography
              sx={{ fontSize: "2.5vmin", color: "#00C800", fontWeight: "600" }}
            >
              123
            </Typography>
            <Typography>Renewals</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "15vmin",
              height: "8vmin",
              boxShadow: "0px 0px 2px #00C800",
              borderRadius: "1vmin",
              backgroundColor: "white",
              transition: "0.3s ease",
              "&:hover": {
                boxShadow: "0px 0px 5px #00C800",
              },
            }}
          >
            <Typography
              sx={{ fontSize: "2.5vmin", color: "#00C800", fontWeight: "600" }}
            >
              234
            </Typography>
            <Typography>Expired</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "15vmin",
              height: "8vmin",
              boxShadow: "0px 0px 2px #00C800",
              borderRadius: "1vmin",
              backgroundColor: "white",
              transition: "0.3s ease",
              "&:hover": {
                boxShadow: "0px 0px 5px #00C800",
              },
            }}
          >
            <Typography
              sx={{ fontSize: "2.5vmin", color: "#00C800", fontWeight: "600" }}
            >
              670
            </Typography>
            <Typography>Not Using</Typography>
          </Box>
          <Button
            sx={{
              width: "15vmin",
              height: "8vmin",
              color: "#00C800",
              boxShadow: "0px 0px 2px #00C800",
              borderRadius: "1vmin",
              backgroundColor: "white",
              transition: "0.3s ease",
              "&:hover": {
                boxShadow: "0px 0px 5px #00C800",
                color:'white',
                backgroundColor:'#00C800'
              },
            }}
            onClick={handleDetailsClick}
          >
            Details
          </Button>
        </Box>
      </Box>
  );
};

export default Services;
