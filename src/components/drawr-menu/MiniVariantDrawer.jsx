import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import LogoutIcon from "@mui/icons-material/Logout";

import { useTheme, styled} from "@mui/material/styles";
import {
  Box,
  Drawer,
  AppBar,
  Toolbar,
  List,
  Typography,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  CssBaseline,
  createTheme,
  ThemeProvider,
  useMediaQuery
} from "@mui/material";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/features/userSlice";
import { useAppSelector } from "../../redux/store";
import navigationConfig from "../../config/navigation";
import { Link, useNavigate, useLocation } from "react-router-dom";

const drawerWidth = 300;



const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  [theme.breakpoints.down("md")]: {
    width: drawerWidth, // full width on smaller screens
  },
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(24)} + 6px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(10)} + 2px)`,
  },
  [theme.breakpoints.down("md")]: {
    width: 0, // fully hidden on smaller screens
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const MainAppBar = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    // marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const MainDrawer = styled(Drawer)(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const thematic = createTheme({
    components: {
      MuiListItemButton: {
        styleOverrides: {
          root: {
            fill:'#737791',
            "&:hover": {
              backgroundColor: "#00C800",
              color: "#fff",
              fill: '#fff',
            },
          },
        },
      },
    },
  });
  const [open, setOpen] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const userState = useAppSelector((state) => state.userState);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // const handleSearchChange = (e) => {
  //   setSearchQuery(e.target.value);
  // };

  // const handleDrawerToggle = () => {
  //   setMobileOpen(!mobileOpen);
  // };

  // Function to toggle submenu
  const toggleSubmenu = (itemTitle) => {
    if (openSubmenu !== itemTitle) {
      setOpenSubmenu(itemTitle);
    }
  };

  const drawerHeaderContent = (
    <DrawerHeader>
      <img
        src={logo}
        alt="Logo"
        style={{ width: open ? "50%" : "75%", height: "auto", padding: "10px" }}
      />
      <IconButton
        onClick={handleDrawerClose}
        sx={{ marginRight: theme.spacing(1) }}
      >
        <ChevronLeftIcon />
      </IconButton>
    </DrawerHeader>
  );

  const mapPathToTitle = (pathPart) => {
    // Define your mapping here
    const mapping = {
      dashboard: "Dashboard",
      profile: "User Profile",
      // Add more mappings as necessary
    };
    return (
      mapping[pathPart] || pathPart.charAt(0).toUpperCase() + pathPart.slice(1)
    );
  };

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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= theme.breakpoints.values.md) {
        setOpen(false); // Automatically close drawer on small screens
      } else {
        setOpen(true); // Keep it open on larger screens
      }
    };

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, [theme.breakpoints.values.md]);

  useEffect(() => {
    // Logic to determine which submenu should be open based on the current URL
    const currentPath = location.pathname;
    // Example logic to determine which submenu should be open
    const currentOpenSubmenu = navigationConfig.find(
      (item) =>
        item.children &&
        item.children.some((subItem) => subItem.navLink === currentPath)
    )?.title;
    setOpenSubmenu(currentOpenSubmenu);
  }, [location.pathname]);

  const drawerContent = (
    <div>
      {drawerHeaderContent}
      <List>
        {navigationConfig.map((item) => (
          <React.Fragment key={item.title}>
            <ThemeProvider theme={thematic}>
              <ListItem
                disablePadding
                sx={{
                  padding: open ? "0.5vh 0" : "0.5vh 1vw",
                  borderRadius: "1vmin",
                  color: "#737791",
                  display: "block",
                }}
                onClick={() => item.children && toggleSubmenu(item.title)}
              >
                {item.children ? (
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2,
                      borderRadius: "1vmin",
                      width: "100%",
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        width: "4vmin",
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.title}
                      sx={{ display: open ? "block" : "none" }}
                    />
                  </ListItemButton>
                ) : (
                  <Link
                    to={item.navLink}
                    style={{
                      textDecoration: "none",
                      color: "#737791",
                      width: "100%",
                    }}
                  >
                    <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? "initial" : "center",
                        px: 2,
                        borderRadius: "1vmin",
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          width: "4vmin",
                          mr: open ? 3 : "auto",
                          justifyContent: "center",
                        }}
                      >
                        {item.icon}
                      </ListItemIcon>
                      <ListItemText
                        primary={item.title}
                        sx={{ display: open ? "block" : "none" }}
                      />
                    </ListItemButton>
                  </Link>
                )}
              </ListItem>
            </ThemeProvider>
            {/* Conditional rendering of submenu items */}
            {item.children && openSubmenu === item.title && (
              <List component="div" disablePadding>
                {item.children.map((subItem) => (
                  <Link
                    to={subItem.navLink}
                    style={{ textDecoration: "none", color: "#737791" }}
                    key={subItem.title}
                  >
                    <ListItem
                      button
                      sx={{
                        pl: 12,
                        "&:hover": {
                          color: "#00C800", // Text color changes on hover
                        },
                      }}
                    >
                      <ListItemText primary={subItem.title} />
                    </ListItem>
                  </Link>
                ))}
              </List>
            )}
          </React.Fragment>
        ))}
        <ListItem
          onClick={() => {
            dispatch(logout());
            navigate("/login");
          }}
          sx={{
            padding: open ? "0 1vw" : "0 0",
            height: isMobile ? "6vh" : "4vh",
            borderRadius: "1vmin",
            marginTop: "5vh",
            backgroundColor: "#171B2A",
            color: "white",
            "&:hover": { backgroundColor: "#171B2A", opacity: "95%" },
          }}
        >
          <ListItemIcon>
            <LogoutIcon
              sx={{ fill: "white", marginLeft: open ? "0" : "0.5vw" }}
            />
          </ListItemIcon>
          <ListItemText
            primary="Sign Out"
            sx={{ display: open ? "block" : "none" }}
          />
        </ListItem>
      </List>
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <MainAppBar
        open={open}
        sx={{ boxShadow: "0px 0px 1px black", justifyContent: "space-between" }}
      >
        <Toolbar sx={{ backgroundColor: "white" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={open ? handleDrawerClose : handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
              color: "#00C800", // If you want to maintain color styles
            }}
          >
            <MenuIcon sx={{ fontSize: "3vmin" }} />
          </IconButton>

          <Box sx={{ flexGrow: 1 }} />

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              padding: "0",
            }}
          >
            <img
              src={`${process.env.REACT_APP_SERVER_ENDPOINT}/${
                userState?.user?.imageUrl?.imageUrl ||
                userState?.user?.profileImage
              }?${Date.now()}`}
              alt="userImage"
              style={{
                width: isMobile ? "10vmin" : "6vmin",
                height: isMobile ? "10vmin" : "6vmin",
                borderRadius: "50%",
                padding: "10px",
              }}
            />
            <Box sx={{ marginLeft: "1vw", marginRight: "2vw" }}>
              <Typography
                sx={{
                  color: "#171B2A",
                  fontSize: "1.5vmin",
                  fontWeight: "600",
                  fontFamily: "helvetica",
                  marginTop: "1vmin",
                }}
              >
                {userState?.user?.firstName || "Guest"}
              </Typography>
              <Typography
                sx={{
                  color: "#737791",
                  fontSize: "1vmin",
                  fontWeight: "600",
                  fontFamily: "helvetica",
                }}
              >
                Super Admin
              </Typography>
            </Box>
          </Box>
        </Toolbar>
      </MainAppBar>

      <MainDrawer variant="permanent" open={open}>
        {/* {drawerHeaderContent} */}
        {drawerContent}
      </MainDrawer>
    </Box>
  );
}