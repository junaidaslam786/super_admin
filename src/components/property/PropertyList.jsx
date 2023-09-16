import React, { useState, useEffect } from "react";
import CustomTable from "../custom-table/CustomTable";
import { useGetAllPropertiesQuery } from "../../redux/api/propertyManagementApi";
import { CircularProgress, Typography, Box } from "@mui/material";
import { Edit, Delete, Visibility } from "@mui/icons-material";
import { setProperties } from "../../redux/features/propertyManagementSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import PropertyModal from "./add-property/PropertyModal";
import PropertyEditModal from "../../pages/property/PropertyEditModal";

const PropertyList = () => {
  

  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentModal, setCurrentModal] = useState(null);

  // Fetch properties using the current page
  const { data: properties, isLoading, isError } = useGetAllPropertiesQuery(currentPage);

  const handleModalOpen = (modalType) => {
    setCurrentModal(modalType);
    setModalOpen(true);
  };
  const handleModalClose = () => setModalOpen(false);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  }

  useEffect(() => {
    if (properties) {
      dispatch(setProperties(properties));
    }
  }, [properties, dispatch]);

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
        Error Loading Properties
      </Typography>
    );

    const actionsConfig = [
      {
        icon: Visibility,
        callback: (row) => {
          handleModalOpen('view')
          // dispatch(selectUser(row));
        }
      },
      {
        icon: Edit,
        callback: (row) => {
          handleModalOpen('edit')
          // dispatch(selectUser(row));
        }
      },
      {
        icon: Delete,
       
      },
    ];

  return (
    <Box sx={{ width: "90vw", marginTop: "10vh" }}>
      <CustomTable
        data={properties.data}
        onPageChange={handlePageChange}
        totalPage={properties.totalPage}
        columnsToDisplay={[
          "title",
          "user_id",
          "address",
          "price",
          "status",
        ]}
        actionsConfig={actionsConfig}
      />
      {currentModal === 'view' && <PropertyModal open={modalOpen} onClose={handleModalClose} />}
      {currentModal === 'edit' && <PropertyEditModal open={modalOpen} onClose={handleModalClose} />}
    </Box>
  )
}

export default PropertyList