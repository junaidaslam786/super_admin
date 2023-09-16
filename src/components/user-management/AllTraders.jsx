import React, { useState } from "react";
import CustomTable from "../custom-table/CustomTable";
import { useSelector } from "react-redux";
import { selectSelectedUser } from "../../redux/selectors/userSelectors";
import {  selectAllAgents } from "../../redux/selectors/userSelectors";  // Assuming the selectors are in this file
import { CircularProgress, Typography, Box } from "@mui/material";
import { Edit, Delete, Visibility } from "@mui/icons-material";
import AgentModal from "./modals/AgentModal";
import { useDispatch } from "react-redux";
import { selectUser } from "../../redux/features/userManagementSlice";
import AgentDetailsModal from "./modals/AgentDetailsModal";

const TradersData = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentModal, setCurrentModal] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const dispatch = useDispatch();
  const selectedUser = useSelector(selectSelectedUser);

  const handleModalOpen = (modalType) => {
    setCurrentModal(modalType);
    setModalOpen(true);
  };
  const handleModalClose = () => setModalOpen(false);

  // Handler to update the page
  const handlePageChange = (newPage) => {
    console.log(newPage);
    setCurrentPage(newPage);
  };

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
      callback: (row) => {
        handleModalOpen('view')
        dispatch(selectUser(row));
      }
    },
    {
      icon: Edit,
      callback: (row) => {
        handleModalOpen('edit')
        dispatch(selectUser(row));
      }
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
        onPageChange={handlePageChange}
        totalPage={Math.ceil(customers.length / itemsPerPage)}
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
       {currentModal === 'edit' && <AgentModal open={modalOpen} onClose={handleModalClose} userData={selectedUser} />}
       {currentModal === 'view' && <AgentDetailsModal open={modalOpen} onClose={handleModalClose} userData={selectedUser} />}
    </Box>
  );
};

export default TradersData;
