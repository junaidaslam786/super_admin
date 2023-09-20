import React, { useEffect, useState } from "react";
import {
  useDeletePropertyMutation,
  useGetAllPropertiesQuery,
  useUpdatePropertyMutation,
} from "../../redux/api/propertyManagementApi";
import { userManagementApi } from "../../redux/api/userManagementApi";
import { CircularProgress, Typography, Box } from "@mui/material";
import { setProperties } from "../../redux/features/propertyManagementSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
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
  // const [updatedProperties, setUpdatedProperties] = useState([]);
  const [updatedProperties, setUpdatedProperties] = useState([]);

  const dispatch = useDispatch();

  const {
    data: properties,
    isLoading,
    isError,
    refetch,
  } = useGetAllPropertiesQuery();
  const [deleteProperty] = useDeletePropertyMutation();
  const [updateProperty] = useUpdatePropertyMutation();

  const userIdToNameMap = useSelector(selectUserIdToNameMap);
  // const dispatch = useDispatch();
  // const { data: properties } = useGetAllPropertiesQuery();

  //   useEffect(() => {
  //     if (properties) {
  //         const fetchUserNamesAndUpdateProperties = async () => {
  //             const userFetchPromises = properties.map(async property => {
  //                 if (userCache[property.createdBy]) {
  //                     // If user details are in the cache, use them
  //                     return userCache[property.createdBy];
  //                 } else {
  //                     // If not in cache, make an API call
  //                     const userResponse = await dispatch(
  //                         userManagementApi.endpoints.getUserById.initiate(property.createdBy)
  //                     );
  //                     const user = userResponse?.data;
  //                     if (user) {
  //                         // Store user details in the cache
  //                         userCache[property.createdBy] = user;
  //                     }
  //                     return user;
  //                 }
  //             });

  //             const userResponses = await Promise.all(userFetchPromises);

  //             const propertiesWithNames = properties.map((property, index) => {
  //                 const user = userResponses[index];
  //                 return {
  //                     ...property,
  //                     createdBy: user?.firstName || property.createdBy
  //                 };
  //             });

  //             setUpdatedProperties(propertiesWithNames);
  //         };

  //         fetchUserNamesAndUpdateProperties();
  //     }
  // }, [properties, dispatch]);

  useEffect(() => {
    if (properties) {
      const propertiesWithNames = properties.map((property) => ({
        ...property,
        createdBy: userIdToNameMap[property.createdBy] || property.createdBy,
      }));

      setUpdatedProperties(propertiesWithNames);
    }
  }, [properties, userIdToNameMap]);

  // useEffect(() => {
  //   if (properties) {
  //     // Append new properties to the existing list
  //     dispatch(setProperties(properties));
  //   }
  // }, [properties, dispatch]);

  // useEffect(() => {
  //   const fetchUserNamesAndUpdateProperties = async () => {
  //     const propertiesWithNames = [];
  //     if (Array.isArray(properties)) {
  //       for (let property of properties) {
  //         const userResponse =
  //           await userManagementApi.endpoints.getUserById.initiate(
  //             property.createdBy
  //           );
  //         const propertyCopy = { ...property };
  //         propertyCopy.createdBy =
  //           userResponse?.data?.firstName || propertyCopy.createdBy;
  //         propertiesWithNames.push(propertyCopy);
  //       }
  //     }
  //     setUpdatedProperties(propertiesWithNames);
  //   };
  //   fetchUserNamesAndUpdateProperties();
  // }, [properties]);

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
        marginLeft: "10vw",
      }}
    >
      <DataGrid
        dataSource={
          updatedProperties ? JSON.parse(JSON.stringify(updatedProperties)) : []
        }
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
