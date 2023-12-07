import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useNavigate } from "react-router-dom";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";


const DisplayCard = ({ title = "Total Traders", count = "500+", route = '/', icon }) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("xs"));
  const isSm = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isLg = useMediaQuery(theme.breakpoints.down('lg'))
  const handleNavigation = () => {
    navigate(route);
  };

  return (
    <Box
      sx={{
        width: isXs || isSm ? "100vw" : "15vw",
        display: "flex",
        flexDirection: "column",
        alignItems: isXs || isSm ? "center" : "initial",
        margin: isLg ? '0' : '0 3vw'
      }}
    >
      <Box
        sx={{
          marginTop: "4vmin",
          width: "26vmin",
          height: "15vmin",
          backgroundColor: "white",
          border: "0px solid",
          borderRadius: "1vmin",
          boxShadow: "0px 0px 5px rgb(0, 0, 0, 0.5)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{
                color: "#00C800",
                fontSize: "2vmin",
                fontFamily: "roboto, sans-serif",
                fontWeight: 500,
                letterSpacing: "1px",
              }}
            >
              {count}
            </Typography>
            <Typography
              sx={{
                fontFamily: "roboto, sans-serif",
                fontSize: "2vmin",
              }}
            >
              {title}
            </Typography>
          </Box>
          {icon}
        </Box>
        <Box
          sx={{
            position: "relative",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Button
            variant="contained"
            onClick={handleNavigation}
            sx={{
              width: "26vmin",
              border: "1px solid #00C800",
              backgroundColor: "#00C800",
              borderRadius: "0 0 1vmin 1vmin",
              height: "3vmin",
              fontFamily: "helvetica",
              color: "white",
              fontSize:'1vmin',
              fontWeight:'500',
              '&:hover': {backgroundColor: '#00C800'}
            }}
          >
            See more
          </Button>
          <ArrowCircleRightIcon
            sx={{
              position: "absolute",
              top: "0.8vmin",
              right: "8vmin",
              transform: "rotateY(-50%)",
              backgroundColor: "white",
              color: "#00C800",
              border: "#00C800",
              borderRadius: "50%",
              fontSize: "1.5vmin",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default DisplayCard;
