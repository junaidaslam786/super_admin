import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { selectAllAgents } from "../../redux/selectors/userSelectors"; // Assuming the selectors are in this file
import { CircularProgress, Box } from "@mui/material";
import {
  useGetAllUsersExceptSuperAdminQuery,
  useDeleteUserMutation,
  useUpdateUserMutation,
  useGetUserByIdQuery,
} from "../../redux/api/userManagementApi";
import { setUsers } from "../../redux/features/userManagementSlice";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

// DevExtreme imports
import DataGrid, {
  Paging,
  Pager,
  FilterRow,
  Column,
  Editing,
} from "devextreme-react/data-grid";
import { toast } from "react-toastify";

const TradersData = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const traders = useSelector(selectAllAgents);
  const [deleteUser] = useDeleteUserMutation();
  const [updateUser] = useUpdateUserMutation();
  const [selectedUserId, setSelectedUserId] = useState();
  const { data: users, refetch } = useGetAllUsersExceptSuperAdminQuery();

  const { data: selectedUser } = useGetUserByIdQuery(selectedUserId, {
    skip: !selectedUserId,
  });

  useEffect(() => {
    if (users) {
      dispatch(setUsers(users));
    }
  }, [users, dispatch]);

  useEffect(() => {
    if (selectedUser) {
      console.log("Selected user data:", selectedUser);
      navigate("/trader"); // Navigate or take other actions based on the fetched data
    }
  }, [selectedUser, navigate]);

  if (!traders)
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
        marginLeft: "10vw",
      }}
    >
      <DataGrid
        dataSource={traders ? JSON.parse(JSON.stringify(traders)) : []}
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
        <Column
          caption="Actions"
          width={200}
          cellRender={(cellData) => (
            <div>
              <button>Block</button>
              {/* <button onClick={() => handleBlock(cellData.data)}>Block</button> */}
              {/* <button onClick={() => handleDeactivate(cellData.data)}> */}
              <button>Deactivate</button>
            </div>
          )}
        />
        <Column
          width={50}
          cellRender={(data) => (
            <VisibilityIcon
              style={{ cursor: "pointer" }}
              onClick={() => {
                setSelectedUserId(data.data.id);
                // console.log("Selected user data:", selectedUser);
                // navigate("/trader"); // Navigate or take other actions based on the fetched data
              }}
            />
          )}
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

export default TradersData;
