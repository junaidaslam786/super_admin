import React, { useEffect } from "react";
import {
  useGetAllUsersExceptSuperAdminQuery,
  useDeleteUserMutation,
  useUpdateUserMutation,
} from "../../redux/api/userManagementApi";
import { Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { setUsers } from "../../redux/features/userManagementSlice";

// DevExtreme imports
import DataGrid, {
  Paging,
  Pager,
  FilterRow,
  Column,
  Editing,
} from "devextreme-react/data-grid";
import { toast } from "react-toastify";

const AllUsers = () => {
  const dispatch = useDispatch();

  const {
    data: users,
    refetch,
  } = useGetAllUsersExceptSuperAdminQuery();
  const [deleteUser] = useDeleteUserMutation();
  const [updateUser] = useUpdateUserMutation();

  useEffect(() => {
    if (users) {
      dispatch(setUsers(users));
    }
  }, [users, dispatch]);

  return (
    <Box sx={{ width: "96vw" }}>
      <DataGrid
        dataSource={users ? JSON.parse(JSON.stringify(users)) : []}
        showBorders={true}
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
        <Column dataField="email" caption="Email" />
        <Column dataField="userType" caption="User Type" />
        <Column dataField="status" caption="Status" />

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

export default AllUsers;
