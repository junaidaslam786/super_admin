import React, { useState, useEffect } from "react";
import CustomTable from "../custom-table/CustomTable";
import {
  useGetAllUsersExceptSuperAdminQuery,
  useDeleteUserMutation,
} from "../../redux/api/userManagementApi";
import {
  CircularProgress,
  Typography,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from "@mui/material";
import { Edit, Delete, Visibility } from "@mui/icons-material";

import { selectSelectedUser } from "../../redux/selectors/userSelectors";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setUsers, selectUser } from "../../redux/features/userManagementSlice";

import CustomerDetailsModal from "./modals/CustomerDetailsModal";
import AgentDetailsModal from "./modals/AgentDetailsModal";
import AdminDetailsModal from "./modals/AdminDetailsModal";

import AdminModal from "./modals/AdminModal";
import AgentModal from "./modals/AgentModal";
import CustomerModal from "./modals/CustomerModal";

const AllUserData = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [userType, setUserType] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [action, setAction] = useState(null);
  const [modalMode, setModalMode] = useState(null);

  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [userIdToDelete, setUserIdToDelete] = useState(null);

  const itemsPerPage = 10;

  const dispatch = useDispatch();

  const selectedUser = useSelector(selectSelectedUser);
  const [deleteUser, { isSuccess: deleteSuccess }] = useDeleteUserMutation();

  const DeleteConfirmationModal = ({ open, onConfirm, onCancel }) => (
    <Dialog open={open} onClose={onCancel}>
      <DialogTitle>Confirm Deletion</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure you want to delete this user?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onCancel} color="primary">
          Cancel
        </Button>
        <Button onClick={onConfirm} color="primary">
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );

  const handleDeleteClick = (row) => {
    const userId = row.id; // assuming 'id' is the property name for user ID in the row data
    setUserIdToDelete(userId);
    setDeleteModalOpen(true);
  };

  const handleDeleteConfirm = async () => {
    if (deleteSuccess) {
      refetch();
    }
    try {
      await deleteUser(userIdToDelete);
      setDeleteModalOpen(false);
    } catch (error) {
      console.error("Failed to delete user:", error);
    }
  };

  const handleDeleteCancel = () => {
    setUserIdToDelete(null);
    setDeleteModalOpen(false);
  };

  // Handler to update the page
  const handlePageChange = (newPage) => {
    console.log(newPage);
    setCurrentPage(newPage);
  };

  const handleModalOpen = (userType) => {
    setModalOpen(true);
    setUserType(userType);
  };
  const handleModalClose = () => setModalOpen(false);

  const {
    data: users,
    isLoading,
    isError,
    refetch,
  } = useGetAllUsersExceptSuperAdminQuery();

  useEffect(() => {
    if (users) {
      dispatch(setUsers(users));
    }
  }, [users, dispatch]);

  // Slice the data for current page
  const displayedUsers = users?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

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
          setModalMode("view");
          handleModalOpen(row.userType);
        } else {
          console.warn("Row does not have a 'userType' property.");
        }
      },
    },
    {
      icon: Edit,
      callback: (row) => {
        if (row.hasOwnProperty("userType")) {
          dispatch(selectUser(row)); // Update the selectedUser in the Redux store
          setAction("edit"); // Set the action to 'edit'
          setModalMode("edit");
          // setModalMode("view");
          handleModalOpen(row.userType); // Open the modal
        } else {
          console.warn("Row does not have a 'userType' property.");
        }
      },
    },
    {
      icon: Delete,
      callback: handleDeleteClick,
    },
  ];

  const detailsModalMapping = {
    admin: AdminDetailsModal,
    customer: CustomerDetailsModal,
    agent: AgentDetailsModal,
  };

  const editModalMapping = {
    admin: AdminModal,
    customer: CustomerModal,
    agent: AgentModal,
  };

  let currentMapping;
  if (action === "edit") {
    currentMapping = editModalMapping;
  } else {
    currentMapping = detailsModalMapping;
  }

  let modalContent = null;

  if (modalMode === "view") {
    const viewModalMapping = {
      admin: AdminDetailsModal,
      customer: CustomerDetailsModal,
      agent: AgentDetailsModal,
    };
    const ModalComponent = viewModalMapping[userType];
    if (ModalComponent) {
      modalContent = (
        <ModalComponent
          userData={selectedUser}
          open={modalOpen}
          onClose={handleModalClose}
        />
      );
    }
  } else if (modalMode === "edit") {
    const editModalMapping = {
      admin: AdminModal,
      customer: CustomerModal,
      agent: AgentModal,
    };
    const ModalComponent = editModalMapping[userType];
    if (ModalComponent) {
      modalContent = (
        <ModalComponent
          userData={selectedUser}
          open={modalOpen}
          onClose={handleModalClose}
        />
      );
    }
  }

  return (
    <Box sx={{ width: "90vw", marginTop: "10vh" }}>
      {modalContent}

      <DeleteConfirmationModal
        open={deleteModalOpen}
        onConfirm={handleDeleteConfirm}
        onCancel={handleDeleteCancel}
      />
      <CustomTable
        data={displayedUsers}
        onPageChange={handlePageChange}
        totalPage={Math.ceil(users.length / itemsPerPage)}
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
