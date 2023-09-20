import { Typography, Box } from "@mui/material";
import React from "react";
import MainLayout from "../../layout/MainLayout";
import DisplayCard from "../../components/dashboard/DisplayCard";
import { useSelector } from "react-redux";
import {
  selectTotalCustomers,
  selectTotalAgents,
  selectTotalAdmins,
} from "../../redux/selectors/userSelectors";
import { selectTotalProperties } from "../../redux/selectors/propertySelector";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import BusinessIcon from "@mui/icons-material/Business";
import GroupIcon from "@mui/icons-material/Group";

const Dashboard = () => {
  const totalCustomers = useSelector(selectTotalCustomers);
  const totalAgents = useSelector(selectTotalAgents);
  const totalProperties = useSelector(selectTotalProperties);
  // const totalAdmins = useSelector(selectTotalAdmins);

  const cardData = [
    {
      title: "Total Traders",
      count: totalAgents,
      route: "/all-traders",
      icon: <PersonOutlineIcon sx={{ color: "#00C800", fontSize: "5vmin" }} />,
    },
    {
      title: "Total Customers",
      count: totalCustomers,
      route: "/all-customers",
      icon: <GroupIcon sx={{ color: "#00C800", fontSize: "5vmin" }} />,
    },
    {
      title: "Total Properties",
      count: totalProperties,
      route: "/property-list",
      icon: <BusinessIcon sx={{ color: "#00C800", fontSize: "5vmin" }} />,
    },
    // { title: "Total Admins", count: totalAdmins, route: "/alladmins" }
  ];

  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <MainLayout>
      <Box
        sx={{
          display: "flex",
          flexDirection: isXs ? "column" : "row",
          alignItems: "center",
        }}
      >
        {cardData.map((data, index) => (
          <DisplayCard
            key={index}
            title={data.title}
            count={data.count.toString() + "+"}
            route={data.route}
            icon={data.icon}
          />
        ))}
      </Box>
    </MainLayout>
  );
};

export default Dashboard;
