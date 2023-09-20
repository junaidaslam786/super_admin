import React from "react";
import { Container, Box, } from "@mui/material";
import LoginForm from "../../components/login/LoginForm";
import logo from "../../assets/loginimg.png";


const LoginPage = () => {
  return (
    <Container
      component="main"
      maxWidth={false}
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        padding: "2rem",
        "@media (max-width:480px)": {
          flexDirection: "column",
          alignItems: "center",
        },
        '@media (max-width: 768px)': { 
          backgroundImage: `url(${logo})`,
          backgroundSize: 'cover',    // To cover the entire viewport
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',  // To center the background image
          height: '100vh', 
          width: '100vw'    
        } 
      }}
    >
      <Box
        sx={{
          "@media (max-width:768px)": {
            display: "none",
            "@media (min-width:1201px)": {
              width: "45vw",
              height: "90vh",
            },
            "@media (min-width:769px) and (max-width:1200px)": {
              width: "40vw",
              height: "80vh",
            },
            "@media (min-width:481px) and (max-width:768px)": {
              width: "70vw",
              height: "50vh",
            },
            "@media (max-width:480px)": {
              width: "80vw",
              height: "40vh",
            },
            "@media (max-width:360px)": {
              width: "90vw",
              height: "30vh",
            },
          },
        }}
      >
        <img src={logo} alt="mainImage" style={{
          width: "50vw",
          height: "100vh",
          objectFit: "contain",
          borderRadius: "16px",
        }} />
      </Box>
      <LoginForm />
    </Container>
  );
};

export default LoginPage;
