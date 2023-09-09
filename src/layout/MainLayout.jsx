import React from "react";
import { Breadcrumbs, Link } from "@mui/material";
import { useLocation } from "react-router-dom";
import MiniVariantDrawer from "../components/drawr-menu/MiniVariantDrawer";

const MainLayout = ({ navigationItems, children }) => {
  const location = useLocation();

  // Generate breadcrumbs based on the current route
  // const generateBreadcrumbs = (path) => {
  //   const parts = path.split("/").filter(Boolean);
  //   return parts.map((part, index) => (
  //     <Link key={index} color="inherit" href={`/${part}`}>
  //       {part.charAt(0).toUpperCase() + part.slice(1)}
  //     </Link>
  //   ));
  // };

  const generateBreadcrumbs = (path) => {
    const parts = path.split("/").filter(Boolean);
    const breadcrumbs = [];

    for (let i = 0; i < parts.length; i++) {
      if (i < parts.length - 1) {
        breadcrumbs.push(`${parts[i]}/${parts[i + 1]}`);
        i++; // Skip the next part since it's already added
      } else {
        breadcrumbs.push(parts[i]);
      }
    }

    return breadcrumbs.map((breadcrumb, index) => (
      <Link key={index} color="inherit" to={`/${breadcrumb}`}>
        {breadcrumb
          .replace(/-/g, " ")
          .split("/")
          .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
          .join(" / ")}
      </Link>
    ));
  };

  return (
    <div style={{ display: "flex" }}>
      <MiniVariantDrawer navigationItems={navigationItems} />
      <main style={{ flexGrow: 1, paddingTop: "64px" }}>
        {/* Breadcrumb section */}
        <Breadcrumbs
          aria-label="breadcrumb"
          style={{ marginBottom: "20px" }}
          sx={{
            color: "white",
            backgroundColor: "#171B2A",
            height: "5vmin",
            fontSize: "1.5vmin",
            textAlign: "center",
            padding: "1vmin 0",
            paddingLeft: "2vw",
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
