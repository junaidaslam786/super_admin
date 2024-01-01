import React, { useEffect } from "react";

import { useSelector } from "react-redux";
import { selectAllCustomers } from "../../redux/selectors/userSelectors"; // Assuming the selectors are in this file
import { CircularProgress, Box, useTheme, useMediaQuery } from "@mui/material";
import {
  useGetAllUsersExceptSuperAdminQuery,
  useDeleteUserMutation,
  useUpdateUserMutation,
} from "../../redux/api/userManagementApi";
import { setUsers } from "../../redux/features/userManagementSlice";
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

const CustomerData = () => {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const dispatch = useDispatch();

  const customers = useSelector(selectAllCustomers);
  const [deleteUser] = useDeleteUserMutation();
  const [updateUser] = useUpdateUserMutation();
  const { data: users, refetch } = useGetAllUsersExceptSuperAdminQuery();

  useEffect(() => {
    if (users) {
      dispatch(setUsers(users));
    }
  }, [users, dispatch]);

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
        dataSource={customers ? JSON.parse(JSON.stringify(customers)) : []}
        showBorders={true}
        columnAutoWidth={true}
        wordWrapEnabled={true}
        onRowRemoving={async (e) => {
          try {
            await deleteUser(e.data.id);
            toast.success("User successfully deleted!", "success");
            refetch();
          } catch (error) {
            toast.error("Error deleting user. Please try again.", "error");
          }
        }}
        onRowUpdating={async (e) => {
          try {
            // Merge old and new data
            const updatedData = { ...e.oldData, ...e.newData };

            // Assuming the API expects the full updated data of the user
            await updateUser(updatedData);

            toast.success("User successfully updated!", "success");
            refetch(); // To fetch the latest data
          } catch (error) {
            toast.error("Error updating user. Please try again.", "error");
            console.error(error);
          }
        }}
      >
        <Column dataField="firstName" caption="First Name" />
        <Column dataField="lastName" caption="Last Name" />
        <Column dataField="phoneNumber" caption="Phone Number" />
        <Column dataField="cityName" caption="City Name" />
        <Column dataField="email" caption="Email" />
        <Column dataField="userType" caption="User Type" />
        <Column
          dataField="status"
          caption="Status"
          calculateCellValue={(data) => (data.status ? "active" : "not active")}
          calculateDisplayValue={(data) =>
            data.status ? "active" : "not active"
          }
          cellRender={(cellData) => cellData.value}
        />

        <Paging defaultPageSize={20} />
        <Pager showPageSizeSelector={true} allowedPageSizes={[5, 10, 15, 20]} />
        <FilterRow visible={true} />

        <Editing
          mode="popup"
          allowUpdating={true}
          allowDeleting={true}
          popup={{
            title: "Edit User",
            showTitle: true,
            width: 700,
            height: 525,
          }}
        />
      </DataGrid>
    </Box>
  );
};

export default CustomerData;
