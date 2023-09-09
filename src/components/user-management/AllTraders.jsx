import React, { useState } from "react";
import CustomTable from "../custom-table/CustomTable";
import { useSelector } from "react-redux";
import {  selectAllAgents } from "../../redux/selectors/userSelectors";  // Assuming the selectors are in this file
import { CircularProgress, Typography, Box } from "@mui/material";
import { Edit, Delete, Visibility } from "@mui/icons-material";
import AgentModal from "./modals/AgentModal";

const TradersData = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  const customers = useSelector(selectAllAgents);

  if (!customers)
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <CircularProgress />
      </Box>
    );

  const actionsConfig = [
    {
      icon: Visibility,
      callback: (row) => handleModalOpen(),
    },
    {
      icon: Edit,
      // callback: (row) => history.push(`/editCustomer/${row.id}`),
    },
    {
      icon: Delete,
      // callback: (row) => console.log("Deleting", row),
    },
  ];



return (
    <Box sx={{ width: "90vw", marginTop: "10vh" }}>
      
      
      <CustomTable
        data={customers}
        columnsToDisplay={[
          "firstName",
          "lastName",
          "phoneNumber",
          "email",
          "userType",
          "status",
        ]}
        actionsConfig={actionsConfig}
      />
       <AgentModal open={modalOpen} onClose={handleModalClose} />
    </Box>
  );
};

export default TradersData;
