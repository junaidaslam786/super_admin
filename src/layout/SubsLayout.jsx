import React from "react";
import MainLayout from "./MainLayout";
import { Box, Typography } from "@mui/material";
import MenuItem from "../config/MenuItem";
import { NavLink } from "react-router-dom";

import menuItems from "../config/subsNavigation";

const SubsLayout = ({ children }) => {
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
            width: "30%",
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
              overflow:'hidden'
            }}
          >
            {menuItems.map(item => (
              <MenuItem key={item.id} label={item.title} navLink={item.navLink} />
            ))}
          </Box>
        </Box>
        <Box sx={{ width: "70%" }}>{children}</Box>
      </Box>
    </MainLayout>
  );
};

export default SubsLayout;
