// import React, { useEffect, useState } from "react";
// import { Breadcrumbs, Link, useTheme, useMediaQuery } from "@mui/material";
// import { useLocation } from "react-router-dom";
// import MiniVariantDrawer from "../components/drawr-menu/MiniVariantDrawer";


// const MainLayout = ({ navigationItems, children }) => {
//   const [sidebarWidth, setSidebarWidth] = useState(0);
//   const location = useLocation();
//   const theme = useTheme();
//   const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

//   const generateBreadcrumbs = (path) => {
//     const parts = path.split("/").filter(Boolean);
//     let breadcrumbPath = "";

//     return parts.map((part, index) => {
//       breadcrumbPath += `/${part}`;
//       return (
//         <Link
//           key={index}
//           color="inherit"
//           to={breadcrumbPath}
//           style={{
//             fontFamily: "Roboto",
//             color: "white",
//             textDecoration: "none",
//           }}
//         >
//           {part.charAt(0).toUpperCase() + part.slice(1)}
//         </Link>
//       );
//     });
//   };

//   useEffect(() => {
//     // Update the width of the sidebar based on screen size or open state
//     const updateSidebarWidth = () => {
//       const sidebar = document.getElementById("sidebar");
//       if (sidebar) {
//         setSidebarWidth(sidebar.offsetWidth);
//       }
//     };

//     // Call the function on mount and whenever the screen size changes
//     updateSidebarWidth();
//     window.addEventListener("resize", updateSidebarWidth);

//     return () => {
//       window.removeEventListener("resize", updateSidebarWidth);
//     };
//   }, [isLargeScreen]);

  
//   return (
//     <div style={{ display: "flex", justifyContent: "space-between" }}>
//       <MiniVariantDrawer id="sidebar" navigationItems={navigationItems} />
//       <main
//         style={{
//           flexGrow: 1,
//           paddingTop: "70px",
//           marginLeft: sidebarWidth,
//         }}
//       >
//         <Breadcrumbs
//           aria-label="breadcrumb"
//           separator=" / "
//           sx={{
//             color: "white",
//             backgroundColor: "#171B2A",
//             height: "auto",
//             fontSize: { xs: '1.2vmin', sm: '1.4vmin', md: '1.5vmin', lg: '1.7vmin', xl: '2vmin' },
//             textAlign: "center",
//             padding: "1.5vmin 0",
//             paddingLeft: "2vw",
//             // margin: '0 auto', 
//             // maxWidth: '95%' 
//           }}
//         >
//           {generateBreadcrumbs(location.pathname)}
//         </Breadcrumbs>
//         {children}
//       </main>
//     </div>
//   );
// };

// export default MainLayout;

import React, { useEffect, useState } from "react";
import { Breadcrumbs, Link, useTheme, useMediaQuery, } from "@mui/material";
import { useLocation } from "react-router-dom";
import MiniVariantDrawer from "../components/drawr-menu/MiniVariantDrawer";

const MainLayout = ({ navigationItems, children }) => {
  const [sidebarWidth, setSidebarWidth] = useState(0);
  const location = useLocation();
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

  // Function to map path parts to user-friendly titles
  const mapPathToTitle = (pathPart) => {
    // Define your mapping here
    const mapping = {
      "dashboard": "Dashboard",
      "profile": "User Profile",
      // Add more mappings as necessary
    };
    return mapping[pathPart] || pathPart.charAt(0).toUpperCase() + pathPart.slice(1);
  };

  // Function to generate breadcrumbs based on the current path
  const generateBreadcrumbs = (path) => {
    const parts = path.split("/").filter(Boolean);
    let breadcrumbPath = "";

    return parts.map((part, index) => {
      breadcrumbPath += `/${part}`;
      const title = mapPathToTitle(part); // Use the mapping function
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
          {title}
        </Link>
      );
    });
  };

  // Effect to update the sidebar width
  useEffect(() => {
    const updateSidebarWidth = () => {
      const sidebar = document.getElementById("sidebar");
      if (sidebar) {
        setSidebarWidth(sidebar.offsetWidth);
      }
    };

    updateSidebarWidth();
    window.addEventListener("resize", updateSidebarWidth);
    return () => window.removeEventListener("resize", updateSidebarWidth);
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
        {/* <Breadcrumbs
          aria-label="breadcrumb"
          separator=" / "
          sx={{
            color: "white",
            backgroundColor: "#171B2A",
            height: "auto",
            fontSize: { xs: '1.2vmin', sm: '1.4vmin', md: '1.5vmin', lg: '1.7vmin', xl: '2vmin' },
            textAlign: "center",
            padding: "1.5vmin 0",
            paddingLeft: "2vw",
          }}
        >
          {generateBreadcrumbs(location.pathname)}
        </Breadcrumbs> */}
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
