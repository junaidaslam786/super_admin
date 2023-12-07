import { Typography, Box, Grid } from "@mui/material";
import React from "react";
import MainLayout from "../../layout/MainLayout";
import DisplayCard from "../../components/dashboard/DisplayCard";
import { useSelector } from "react-redux";
import {
  selectTotalCustomers,
  selectTotalAgents,
  selectTotalAdmins,
} from "../../redux/selectors/userSelectors";
import { selectInvoiceSummary } from "../../redux/selectors/paymentSelector";
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
  const totalAdmins = useSelector(selectTotalAdmins);
  const { totalCount, totalAmount } = useSelector(selectInvoiceSummary);
  console.log(totalCount, totalAmount);
  // const totalInvoicesCount = useSelector(selectTotalInvoiceCount);
  // const totalInvoicesAmount = useSelector(selectTotalInvoiceAmount);
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
      title: "Total Admins",
      count: totalAdmins,
      route: "/all-admins",
      icon: <GroupIcon sx={{ color: "#00C800", fontSize: "5vmin" }} />,
    },
    {
      title: "Total Properties",
      count: totalProperties,
      route: "/property-list",
      icon: <BusinessIcon sx={{ color: "#00C800", fontSize: "5vmin" }} />,
    },
    {
      title: "Total Invoices",
      count: totalCount !== undefined ? totalCount.toString() : "Loading...",
      route: "/invoices",
      icon: <PersonOutlineIcon sx={{ color: "#00C800", fontSize: "5vmin" }} />,
    },
    {
      title: "Total Invoice Amount",
      count:
        totalAmount !== undefined
          ? `AED${totalAmount.toFixed(2)}`
          : "Loading...",
      route: "/invoices",
      icon: <PersonOutlineIcon sx={{ color: "#00C800", fontSize: "5vmin" }} />,
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
          flexDirection: "row",
          justifyContent: "flex-start", // This aligns items to the left
          flexWrap: "wrap", // This will allow items to wrap to the next line
          gap: "16px",
        }}
      >
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          {cardData.map((data, index) => (
            <Grid item xs={9} sm={6} md={4} lg={3} key={index}>
              <DisplayCard
                title={data.title}
                count={data.count.toString() + "+"}
                route={data.route}
                icon={data.icon}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </MainLayout>
  );
};

export default Dashboard;
