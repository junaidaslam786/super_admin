import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { selectAllAgents } from "../../redux/selectors/userSelectors";
import {
  CircularProgress,
  Box,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  useGetAllUsersExceptSuperAdminQuery,
  useDeleteUserMutation,
  useUpdateUserMutation,
  useGetUserByIdQuery,
  useBlockTradersByIdMutation,
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
  GroupPanel,
  Grouping,
  Export,
  Summary,
  MasterDetail,
  Form,
  Item,
} from "devextreme-react/data-grid";
import { toast } from "react-toastify";

const TradersData = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const traders = useSelector(selectAllAgents);
  const [deleteUser] = useDeleteUserMutation();
  const [updateUser] = useUpdateUserMutation();
  const [selectedUserId, setSelectedUserId] = useState();

  const [blockedUsers, setBlockedUsers] = useState(new Set());

  const { data: users, refetch } = useGetAllUsersExceptSuperAdminQuery();

  const { data: selectedUser } = useGetUserByIdQuery(selectedUserId, {
    skip: !selectedUserId,
  });

  const handleApproveTrader = async (trader) => {
    try {
      await updateUser({ ...trader, active: true }).unwrap();
      toast.success("Trader successfully approved!", "success");
      refetch();
    } catch (error) {
      toast.error("Error approving trader. Please try again.", "error");
      console.error(error);
    }
  };

  const [blockTraderById, { isLoading, isError }] =
    useBlockTradersByIdMutation();

  // const handleBlockTrader = async (traderId) => {
  //   try {
  //     await blockTraderById(traderId).unwrap();
  //     toast.success("Trader successfully blocked!", "success");
  //     refetch();
  //   } catch (error) {
  //     toast.error("Error blocking trader. Please try again.", "error");
  //     console.error(error);
  //   }
  // };

  const handleBlockTrader = async (traderId) => {
    try {
      await blockTraderById(traderId).unwrap();

      setBlockedUsers((prev) => {
        const updated = new Set(prev);
        if (updated.has(traderId)) {
          updated.delete(traderId);
        } else {
          updated.add(traderId);
        }
        return updated;
      });

      toast.success(
        `Trader successfully ${
          blockedUsers.has(traderId) ? "unblocked" : "blocked"
        }!`,
        "success"
      );
      refetch();
    } catch (error) {
      toast.error(
        `Error ${
          blockedUsers.has(traderId) ? "unblocking" : "blocking"
        } trader. Please try again.`,
        "error"
      );
      console.error(error);
    }
  };

  const handleViewClick = (userId) => {
    navigate("/trader", { state: { selectedUserId: userId } });
  };

  useEffect(() => {
    if (users) {
      dispatch(setUsers(users));
    }
  }, [users, dispatch]);

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
        dataSource={traders ? JSON.parse(JSON.stringify(traders)) : []}
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

        <Column dataField="active" caption="Active" />

        <Column
          caption="Actions"
          width={200}
          allowEditing={false}
          cellRender={(cellData) => {
            return (
              <Box>
                {/* <Button onClick={() => handleBlockTrader(cellData.data.id)}>
                  Block
                </Button> */}
                <Button onClick={() => handleBlockTrader(cellData.data.id)}>
                  {blockedUsers.has(cellData.data.id) ? "Unblock" : "Block"}
                </Button>
                <Button
                  onClick={() => handleApproveTrader(cellData.data)}
                  disabled={cellData.data.active}
                >
                  {cellData.data.active ? "Approved" : "Approve"}
                </Button>
              </Box>
            );
          }}
        />

        <Column
          width={50}
          cellRender={(cellData) => (
            <VisibilityIcon
              style={{ cursor: "pointer" }}
              onClick={() => handleViewClick(cellData.data.id)}
            />
          )}
        />

        <Paging defaultPageSize={20} />
        <Pager showPageSizeSelector={true} allowedPageSizes={[5, 10, 15, 20]} />
        <FilterRow visible={true} />
        <GroupPanel visible={true} />
        <Grouping autoExpandAll={false} />
        {/* <Export
          enabled={true}
          fileName="Traders"
          allowExportSelectedData={true}
        /> */}

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
        >
          {/* Specify the form items to exclude the fields you don't want to show */}
          <Form>
            <Item itemType="group" colCount={2} colSpan={2}>
              <Item dataField="firstName" />
              <Item dataField="lastName" />
              <Item dataField="phoneNumber" />
              <Item dataField="cityName" />
              <Item dataField="email" />
              <Item dataField="userType" />
              <Item dataField="active" />
              {/* Ensure you do not have an Item for "actions" or any undefined dataField */}
            </Item>
          </Form>
        </Editing>
      </DataGrid>
    </Box>
  );
};

export default TradersData;
