import React from "react";
import MainLayout from "./MainLayout";
import { Box, Typography } from "@mui/material";

const AnalyticsLayout = ({ children, sectionRefs }) => {
  const scrollToRef = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <MainLayout>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: "#FAFBFC",
        }}
      >
        <Box
          sx={{
            width: "25%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "20%",
              position: "fixed",
              top: "20vmin",
              border: "0.2vmin solid #171B2A",
              backgroundColor: "white",
              display: "flex",
              flexDirection: "column",
              borderRadius:'0.4vmin',
              overflow:'hidden',
            }}
          >
            <Typography
              onClick={() => scrollToRef(sectionRefs.services)}
              sx={{
                width: "100%",
                height: "8vmin",
                borderBottom: "0.2vmin solid #171B2A",
                color:'#737791',
                fontSize:'3vmin',
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
                '&:hover' : {
                    color:'#00C800',
                    borderLeft:'0.5vmin solid #00C800',
                    cursor:'pointer'
                }
              }}
            >
                Services
            </Typography>
            <Typography
              onClick={() => scrollToRef(sectionRefs.tokens)}
              sx={{
                width: "100%",
                height: "8vmin",
                borderBottom: "0.2vmin solid #171B2A",
                color:'#737791',
                fontSize:'3vmin',
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
                '&:hover' : {
                    color:'#00C800',
                    borderLeft:'0.5vmin solid #00C800',
                    cursor:'pointer'
                }
              }}
            >
                Tokens
            </Typography>
            <Typography
              onClick={() => scrollToRef(sectionRefs.customers)}
              sx={{
                width: "100%",
                height: "8vmin",
                borderBottom: "0.2vmin solid #171B2A",
                color:'#737791',
                fontSize:'3vmin',
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
                '&:hover' : {
                    color:'#00C800',
                    borderLeft:'0.5vmin solid #00C800',
                    cursor:'pointer'
                }
              }}
            >
                Customers
            </Typography>
            <Typography
              onClick={() => scrollToRef(sectionRefs.traders)}
              sx={{
                width: "100%",
                height: "8vmin",
                borderBottom: "0.2vmin solid #171B2A",
                color:'#737791',
                fontSize:'3vmin',
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
                '&:hover' : {
                    color:'#00C800',
                    borderLeft:'0.5vmin solid #00C800',
                    cursor:'pointer'
                }
              }}
            >
                Traders
            </Typography>
            <Typography
              onClick={() => scrollToRef(sectionRefs.properties)}
              sx={{
                width: "100%",
                height: "8vmin",
                color:'#737791',
                fontSize:'3vmin',
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
                '&:hover' : {
                    color:'#00C800',
                    borderLeft:'0.5vmin solid #00C800',
                    cursor:'pointer'
                }
              }}
            >
                Properties
            </Typography>
          </Box>
        </Box>
        <Box sx={{ width: "70%" }}>{children}</Box>
      </Box>
    </MainLayout>
  );
};

export default AnalyticsLayout;
