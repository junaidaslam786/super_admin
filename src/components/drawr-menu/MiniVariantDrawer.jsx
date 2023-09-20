import React from "react";
import logo from "../../assets/logo.png";
import LogoutIcon from "@mui/icons-material/Logout";
import { useTheme } from "@mui/material/styles";
import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Badge from "@mui/material/Badge";
import InputBase from "@mui/material/InputBase";

import { useDispatch } from "react-redux";
import { logout } from "../../redux/features/userSlice";

import { useAppSelector } from "../../redux/store";

import navigationConfig from "../../config/navigation";
import { Link, useNavigate } from "react-router-dom";

const drawerWidth = 260;
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
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

  const userState = useAppSelector((state) => state.userState);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [openSubmenuId, setOpenSubmenuId] = React.useState(null);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const toggleSubmenu = (itemId) => {
    if (openSubmenuId === itemId) {
      setOpenSubmenuId(null); // If the clicked submenu is already open, close it.
    } else {
      setOpenSubmenuId(itemId); // Otherwise, open the clicked submenu and close any other open submenu.
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        sx={{ boxShadow: "0px 0px 1px black" }}
      >
        <Toolbar sx={{ backgroundColor: "white", height: "8vmin" }}>
          <IconButton
            color="#00C800"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon sx={{ color: "#00C800", fontSize: "3vmin" }} />
          </IconButton>

          <Typography
            variant="p"
            noWrap
            component="div"
            sx={{
              display: { xs: "none", sm: "block", color: "#171B2A" },
              fontSize: "3vmin",
              fontWeight: "600",
              marginLeft: "1vw",
            }}
          >
            Dashboard
          </Typography>
          <Search sx={{ backgroundColor: "#FAFBFC", left: "15vw" }}>
            <SearchIconWrapper>
              <SearchIcon
                sx={{
                  color: "#00C800",
                  fontSize: "2.5vmin",
                  marginLeft: "0.5vw",
                }}
              />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              sx={{
                color: "#171B2A",
                width: "20vw",
                paddingLeft: "2vw",
                height: "4vmin",
                borderRadius: "1vmin",
                fontSize: "1.5vmin",
                fontWeight: "600",
              }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="#00C800"
              sx={{ marginRight: "2vw" }}
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon
                  sx={{ fontSize: "2.5vmin", fill: "#00C800" }}
                />
              </Badge>
            </IconButton>
            <img
              src={`${process.env.REACT_APP_SERVER_ENDPOINT}/${
                userState?.user?.imageUrl?.imageUrl
                  ? userState?.user?.imageUrl?.imageUrl
                  : userState?.user?.profileImage
              }?${Date.now()}`}
              alt="userImage"
              style={{ width: "6vmin", height: "6vmin" }}
            />
            <Box sx={{ marginLeft: "1vw", marginRight: "2vw" }}>
              <Typography
                sx={{
                  color: "#171B2A",
                  fontSize: "1.5vmin",
                  fontWeight: "600",
                  fontFamily: "helvetica",
                  margin: "0",
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
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader sx={{ height: "8vmin" }}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon sx={{ color: "#00C800", fontSize: "3vmin" }} />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "3vmin",
          }}
        >
          <img
            src={logo}
            alt="Logo"
            style={{ width: open ? "5vmin" : '3vmin', height: open ? "5vmin" : '3vmin', marginBottom: "2vh" }}
          />
          {navigationConfig.map((item) => (
            <React.Fragment key={item.id}>
              <ListItem
                sx={{
                  padding: open ? "0.5vh 0" : "0.5vh 1vw",
                  margin: "0 1vw",
                  borderRadius: "1vmin",
                  fill: "#171B2A",
                  color: "#171B2A",
                  display: "block",
                  "&:hover": {
                    backgroundColor: "#00C800",
                    fill: "white",
                    color: "white",
                  },
                }}
              >
                {/* Check if the menu item has a navLink and doesn't have a submenu */}
                {item.navLink && !item.children ? (
                  <Link to={item.navLink} style={{ textDecoration: "none" }}>
                    <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? "initial" : "center",
                        px: 2,
                        borderRadius: "1vmin",
                        "&:hover": {
                          backgroundColor: "#00C800",
                          fill: "white",
                          color: "white",
                        },
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
                      <Typography
                        sx={{
                          display: open ? "block" : "none",
                          color: "black",
                        }}
                      >
                        {item.title}
                      </Typography>
                    </ListItemButton>
                  </Link>
                ) : (
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2,
                      "&:hover": {
                        backgroundColor: "#00C800",
                        borderRadius: "2vmin",
                      },
                    }}
                    onClick={() => toggleSubmenu(item.id)}
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
                      sx={{
                        opacity: open ? 1 : 0,
                      }}
                    />
                  </ListItemButton>
                )}
              </ListItem>
              {item.type === "collapse" &&
                item.id === openSubmenuId &&
                item.children.map((child) => (
                  <ListItem
                    key={child.id}
                    disablePadding
                    sx={{ display: "block", marginLeft: 2 }}
                  >
                    <Link
                      to={child.navLink}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <ListItemButton
                        sx={{
                          minHeight: 48,
                          justifyContent: open ? "initial" : "center",
                          px: 2.5,
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: open ? 3 : "auto",
                            justifyContent: "center",
                          }}
                        >
                          {child.icon}
                        </ListItemIcon>
                        <ListItemText
                          primary={child.title}
                          sx={{ opacity: open ? 1 : 0 }}
                        />
                      </ListItemButton>
                    </Link>
                  </ListItem>
                ))}
            </React.Fragment>
          ))}
          <ListItemButton
          onClick={() => {
            dispatch(logout());
            navigate("/login")
          }}
            sx={{
              padding: open ? "0 1vw" : "0 0",
              height: "4vmin",
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
          </ListItemButton>
        </List>
      </Drawer>
    </Box>
  );
}
