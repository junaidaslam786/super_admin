import React, { useEffect, useState } from "react";
import { Breadcrumbs, Link } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import MiniVariantDrawer from "../components/drawr-menu/MiniVariantDrawer";


const MainLayout = ({ navigationItems, children }) => {
  const [sidebarWidth, setSidebarWidth] = useState(0);
  const location = useLocation();
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

  const generateBreadcrumbs = (path) => {
    const parts = path.split("/").filter(Boolean);
    let breadcrumbPath = "";

    return parts.map((part, index) => {
      breadcrumbPath += `/${part}`;
      return (
        <Link
          key={index}
          color="inherit"
          to={breadcrumbPath}
          style={{
            fontFamily: "Roboto",
            color: "white",
            textDecoration: "none",
          }}
        >
          {part.charAt(0).toUpperCase() + part.slice(1)}
        </Link>
      );
    });
  };

  useEffect(() => {
    // Update the width of the sidebar based on screen size or open state
    const updateSidebarWidth = () => {
      const sidebar = document.getElementById("sidebar");
      if (sidebar) {
        setSidebarWidth(sidebar.offsetWidth);
      }
    };

    // Call the function on mount and whenever the screen size changes
    updateSidebarWidth();
    window.addEventListener("resize", updateSidebarWidth);

    return () => {
      window.removeEventListener("resize", updateSidebarWidth);
    };
  }, [isLargeScreen]);

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <MiniVariantDrawer id="sidebar" navigationItems={navigationItems} />
      <main
        style={{
          flexGrow: 1,
          paddingTop: "70px",
          marginLeft: sidebarWidth,
        }}
      >
        <Breadcrumbs
          aria-label="breadcrumb"
          separator=" / "
          sx={{
            color: "white",
            backgroundColor: "#171B2A",
            height: isLargeScreen ? "6vmin" : "5vmin",
            fontSize: isLargeScreen ? "1.5vmin" : "1.2vmin",
            textAlign: "center",
            padding: "1.5vmin 0",
            paddingLeft: isLargeScreen ? "2vw" : "5vw",
          }}
        >
          {generateBreadcrumbs(location.pathname)}
        </Breadcrumbs>
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
