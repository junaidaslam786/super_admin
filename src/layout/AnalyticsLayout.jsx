

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
        height: isMobile ? "6vmin" : "8vmin",
        borderBottom: "0.2vmin solid #171B2A",
        color: "#737791",
        fontSize: isMobile ? "2.5vmin" : "3vmin",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
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
        }}
      >
        <Box
          sx={{
            width: isMobile ? "100%" : "25%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            pb: isMobile ? 2 : 0,
          }}
        >
          <Box
            sx={{
              width: isMobile ? "90%" : "20%",
              position: isMobile ? "static" : "fixed",
              top: isMobile ? "auto" : "20vmin",
              border: "0.2vmin solid #171B2A",
              backgroundColor: "white",
              display: "flex",
              flexDirection: "column",
              borderRadius: "0.4vmin",
              overflow: "hidden",
            }}
          >
            {menuItems.map((item, index) => (
              <NavigationItem key={index} item={item} />
            ))}
          </Box>
        </Box>
        <Box sx={{ width: isMobile ? "100%" : "70%", pt: isMobile ? 2 : 0 }}>
          {children}
        </Box>
      </Box>
    </MainLayout>
  );
};

export default AnalyticsLayout;
