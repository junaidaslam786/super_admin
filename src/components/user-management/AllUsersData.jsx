import React, { useState, useEffect } from "react";
import CustomTable from "../custom-table/CustomTable";
import { useGetAllUsersExceptSuperAdminQuery } from "../../redux/api/userManagementApi";
import { CircularProgress, Typography, Box } from "@mui/material";
import { Edit, Delete, Visibility } from "@mui/icons-material";

import { useDispatch } from "react-redux";
import { setUsers } from "../../redux/features/userManagementSlice";

import CustomerModal from "./modals/CustomerModal";
import AgentModal from "./modals/AgentModal";
import AdminModal from "./modals/AdminModal";

const AllUserData = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [userType, setUserType] = useState(null);

  const dispatch = useDispatch();

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

  // console.log(users)

  useEffect(() => {
    if (users) {
      dispatch(setUsers(users));
    }
  }, [users, dispatch]);

  // if (isLoading) {
  //     return <YourLoadingComponent />;
  // }

  // if (isError) {
  //     return <YourErrorComponent />;
  // }

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
        // Check if "userType" property exists on the row
        if (row.hasOwnProperty("userType")) {
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
    modalContent = <AdminModal open={modalOpen} onClose={handleModalClose} />;
  } else if (userType === "customer") {
    modalContent = (
      <CustomerModal open={modalOpen} onClose={handleModalClose} />
    );
  } else if (userType === "agent") {
    modalContent = <AgentModal open={modalOpen} onClose={handleModalClose} />;
  }

  return (
    <Box sx={{ width: "90vw", marginTop: "10vh" }}>
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
