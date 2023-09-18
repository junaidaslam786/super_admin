import React, { useEffect } from "react";
import { useDeletePropertyMutation, useGetAllPropertiesQuery, useUpdatePropertyMutation } from "../../redux/api/propertyManagementApi";
import { CircularProgress, Typography, Box } from "@mui/material";
import { setProperties } from "../../redux/features/propertyManagementSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

// DevExtreme imports
import DataGrid, {
  Paging,
  Pager,
  FilterRow,
  Column,
  Editing,
} from "devextreme-react/data-grid";
import { toast } from "react-toastify";

const PropertyList = () => {
  const dispatch = useDispatch();

  

  const {
    data: properties,
    isLoading,
    isError,
    refetch,
  } = useGetAllPropertiesQuery();
  const [deleteProperty] = useDeletePropertyMutation();
  const [updateProperty] = useUpdatePropertyMutation();



  useEffect(() => {
    if (properties) {
      // Append new properties to the existing list
      dispatch(
        setProperties(properties) 
      );
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

  return (
    <Box sx={{ width: "96vw" }}>
      

      <DataGrid
        dataSource={properties ? JSON.parse(JSON.stringify(properties)) : []}
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
        <Column dataField="description" caption="Description" />
        <Column dataField="address" caption="Address" />
        <Column dataField="price" caption="Price" />
        <Column dataField="status" caption="Status" />

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
