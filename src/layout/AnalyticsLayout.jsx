import React from "react";
import MainLayout from "./MainLayout";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const AnalyticsLayout = ({ children, sectionRefs }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const scrollToRef = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { label: "Tokens", ref: sectionRefs.tokens },
    { label: "Customers", ref: sectionRefs.customers },
    { label: "Traders", ref: sectionRefs.traders },
    { label: "Properties", ref: sectionRefs.properties },
    { label: "Reports", ref: sectionRefs.reports },
  ];

  const NavigationItem = ({ item }) => (
    <Typography
      onClick={() => scrollToRef(item.ref)}
      sx={{
        width: "100%",
        padding:'2vmin',
        borderBottom: "0.1vmin solid #737791",
        color: "#737791",
        fontSize: "2vmin",
        display: "flex",
        paddingLeft: "2vw",
        alignItems: "center",
        "&:hover": {
          color: "#00C800",
          borderLeft: "0.5vmin solid #00C800",
          cursor: "pointer",
        },
      }}
    >
      {item.label}
    </Typography>
  );

  return (
    <MainLayout>
      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          backgroundColor: "#FAFBFC",
          width:'100%'
        }}
      >
        <Box
          sx={{
            width: isMobile ? "100%" : "25%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mb: isMobile ? 2 : 0,
          }}
        >
            <Box
              sx={{
                width: isMobile ? "90%" : "17%",
                position: isMobile ? "static" : "fixed",
                top: isMobile ? "auto" : "10vmin",
                border: "0.1vmin solid #737791",
                backgroundColor: "white",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                borderRadius: "0.2vmin",
                marginLeft:'1vw'
              }}
            >
            {menuItems.map((item, index) => (
              <NavigationItem key={index} item={item} />
            ))}
          </Box>
        </Box>
        <Box sx={{ width: isMobile ? "100%" : "70%", mt: isMobile ? 2 : 4 }}>
          {children}
        </Box>
      </Box>
    </MainLayout>
  );
};

export default AnalyticsLayout;
