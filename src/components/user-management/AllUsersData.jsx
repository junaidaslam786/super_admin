import React, { useState, useEffect } from "react";
import CustomTable from "../custom-table/CustomTable";
import { useGetAllUsersExceptSuperAdminQuery } from "../../redux/api/userManagementApi";
import { CircularProgress, Typography, Box, Modal } from "@mui/material";
import { Edit, Delete, Visibility } from "@mui/icons-material";

import { selectSelectedUser } from "../../redux/selectors/userSelectors";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setUsers, selectUser } from "../../redux/features/userManagementSlice";

import CustomerDetailsModal from "./modals/CustomerDetailsModal";
import AgentDetailsModal from "./modals/AgentDetailsModal";
import AdminDetailsModal from "./modals/AdminDetailsModal";

const AllUserData = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [userType, setUserType] = useState(null);

  const dispatch = useDispatch();

  const selectedUser = useSelector(selectSelectedUser);
  console.log(selectUser);

  const handleModalOpen = (userType) => {
    setModalOpen(true);
    setUserType(userType);
  };
  const handleModalClose = () => setModalOpen(false);

  const {
    data: users,
    isLoading,
    isError,
  } = useGetAllUsersExceptSuperAdminQuery();

  useEffect(() => {
    if (users) {
      dispatch(setUsers(users));
    }
  }, [users, dispatch]);

  if (isLoading)
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
  if (isError)
    return (
      <Typography variant="h6" color="error" align="center">
        Error Loading Users
      </Typography>
    );

  const actionsConfig = [
    {
      icon: Visibility,
      callback: (row) => {
        if (row.hasOwnProperty("userType")) {
          dispatch(selectUser(row)); // Update the selectedUser in the Redux store
          handleModalOpen(row.userType);
        } else {
          console.warn("Row does not have a 'userType' property.");
        }
      },
    },
    {
      icon: Edit,
      // callback: (row) => history.push(`/editUser/${row.id}`),
    },
    {
      icon: Delete,
      // callback: (row) => console.log("Deleting", row),
    },
  ];

  let modalContent = null;
  if (userType === "admin") {
    modalContent = <AdminDetailsModal userData={selectedUser} open={modalOpen} onClose={handleModalClose} />;
  } else if (userType === "customer") {
    modalContent = (
      <CustomerDetailsModal userData={selectedUser} open={modalOpen} onClose={handleModalClose} />
    );
  } else if (userType === "agent") {
    modalContent = <AgentDetailsModal userData={selectedUser} open={modalOpen} onClose={handleModalClose} />;
  }
  console.log("Selected User:", selectedUser);
  return (
    <Box sx={{ width: "90vw", marginTop: "10vh" }}>
      {/* {selectedUser && (
        <UserDetailModal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          userData={selectedUser}
        />
      )} */}
      {modalContent}

      <CustomTable
        data={users}
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
    </Box>
  );
};

export default AllUserData;
