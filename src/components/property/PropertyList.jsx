import React, { useEffect, useState } from "react";
import {
  useDeletePropertyMutation,
  useGetAllPropertiesQuery,
  useUpdatePropertyMutation,
  useGetPropertyByIdQuery,
} from "../../redux/api/propertyManagementApi";
// import { useGetUserByIdQuery  } from "../../redux/api/userManagementApi";
import { useNavigate } from "react-router-dom";
import { CircularProgress, Typography, Box,useTheme, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { selectUserIdToNameMap } from "../../redux/selectors/userSelectors";
import "./PropertyList.css";

// DevExtreme imports
import DataGrid, {
  Paging,
  Pager,
  FilterRow,
  Column,
  Editing,
} from "devextreme-react/data-grid";
import { toast } from "react-toastify";

const userCache = {};

const PropertyList = () => {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [updatedProperties, setUpdatedProperties] = useState([]);
  const [selectedPropertyId, setSelectedPropertyId] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    data: properties,
    isLoading,
    isError,
    refetch,
  } = useGetAllPropertiesQuery();
  const [deleteProperty] = useDeletePropertyMutation();
  const [updateProperty] = useUpdatePropertyMutation();
  const { data: selectedProperty } = useGetPropertyByIdQuery(
    selectedPropertyId,
    {
      skip: !selectedPropertyId,
    }
  );

   // Function to fetch user name
  //  const fetchUserName = async (userId) => {
  //   const { data: user } = useGetUserByIdQuery(userId);
  //   return user?.name || "Unknown User";
  // };

  const userIdToNameMap = useSelector(selectUserIdToNameMap);

  const handleViewProperty = (propertyId) => {
    // Navigate to property details page or modal
    navigate("/property-details", {
      state: { selectedPropertyId: propertyId },
    });
  };

  useEffect(() => {
    if (properties) {
      const propertiesWithNames = properties.map((property) => ({
        ...property,
        createdBy: userIdToNameMap[property.createdBy] || property.createdBy,
      }));

      setUpdatedProperties(propertiesWithNames);
    }
  }, [properties, userIdToNameMap]);

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

  return (
    <Box
      width="100%"
      sx={{
        marginTop: "10vmin",
        marginLeft: isMobile ? "0" : "10vw",
        overflowX: isMobile ? "auto" : "hidden", // Enable horizontal scrolling on mobile
        ".dx-datagrid": {
          width: isMobile ? "100vw" : "100%",
          maxWidth: isMobile ? "none" : "100%", // Ensure DataGrid does not exceed viewport width on mobile
          maxHeight: "none",
        },
      }}
    >
      <DataGrid
        dataSource={
          updatedProperties ? JSON.parse(JSON.stringify(updatedProperties)) : []
        }
        columnAutoWidth={true}
        wordWrapEnabled={true}
        showBorders={true}
        onRowRemoving={async (e) => {
          try {
            await deleteProperty(e.data.id);
            toast.success("Property successfully deleted!", "success");
            refetch();
          } catch (error) {
            toast.error("Error deleting property. Please try again.", "error");
          }
        }}
        onRowUpdating={async (e) => {
          try {
            // Merge old and new data
            const updatedData = { ...e.oldData, ...e.newData };

            // Assuming the API expects the full updated data of the user
            await updateProperty(updatedData);

            toast.success("Property successfully updated!", "success");
            refetch(); // To fetch the latest data
          } catch (error) {
            toast.error("Error updating property. Please try again.", "error");
            console.error(error);
          }
        }}
      >
        <Column dataField="title" caption="Title" />
        <Column dataField="createdBy" caption="Created By" />
        <Column dataField="description" caption="Description" />
        <Column dataField="address" caption="Address" />
        <Column dataField="price" caption="Price" />
        <Column dataField="status" caption="Status" />

        <Column
          width={50}
          cellRender={(cellData) => (
            <VisibilityIcon
              style={{ cursor: "pointer" }}
              onClick={() => handleViewProperty(cellData.data.id)}
            />
          )}
        />

        <Paging defaultPageSize={20} />
        <Pager
          showPageSizeSelector={true}
          allowedPageSizes={[5, 10, 15, 20]}
          showNavigationButtons={true}
        />
        <FilterRow visible={true} />

        <Editing
          mode="popup"
          allowUpdating={true}
          allowDeleting={true}
          popup={{
            title: "Edit Property",
            showTitle: true,
            width: 700,
            height: 525,
          }}
        />
      </DataGrid>
    </Box>
  );
};

export default PropertyList;
