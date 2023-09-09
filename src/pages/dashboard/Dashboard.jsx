import { Typography, Box } from "@mui/material";
import React from "react";
import MainLayout from "../../layout/MainLayout";
import DisplayCard from "../../components/dashboard/DisplayCard";
import { useSelector } from "react-redux";
import { selectTotalCustomers, selectTotalAgents, selectTotalAdmins } from "../../redux/selectors/userSelectors";

const Dashboard = () => {
    const totalCustomers = useSelector(selectTotalCustomers);
    const totalAgents = useSelector(selectTotalAgents);
    // const totalAdmins = useSelector(selectTotalAdmins);

    const cardData = [
        { title: "Total Traders", count: totalAgents, route: "/all-traders" },
        { title: "Total Customers", count: totalCustomers, route: "/all-customers" },
        // { title: "Total Admins", count: totalAdmins, route: "/alladmins" }
    ];

    return (
        <MainLayout>
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                {cardData.map((data, index) => (
                    <DisplayCard key={index} title={data.title} count={data.count.toString() + "+"} route={data.route} />
                ))}
            </Box>
        </MainLayout>
    );
};

export default Dashboard;

