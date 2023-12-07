import React, { useEffect, useState } from "react";
import { CircularProgress, Typography, Box, Button } from "@mui/material";
import DataGrid, {
  Paging,
  Pager,
  FilterRow,
  Column,
  Editing,
} from "devextreme-react/data-grid";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import {
  useListCommunityQuery,
  useUpdateCommunityStatusMutation,
  useDeleteCommunityMutation,
} from "../../redux/api/communityApi";
import { useSelector } from "react-redux";
import { selectUserIdToNameMap } from "../../redux/selectors/userSelectors";

const ListCommunity = () => {
  const [updatedCommunities, setUpdatedCommunities] = useState([]);

  const {
    data: communities,
    isLoading,
    isError,
    refetch,
  } = useListCommunityQuery();

  console.log('communities', communities)

  const [deleteCommunityById] = useDeleteCommunityMutation();
  const [updateCommunityStatus] = useUpdateCommunityStatusMutation();

  const navigate = useNavigate();
  const userIdToNameMap = useSelector(selectUserIdToNameMap);

  const handleEditCommunity = (community) => {
    // Navigate to AddCommunity with community ID (adjust the path as needed)
    navigate(`/add-community/${community.id}`);
  };

  const handleDeleteCommunity = async (id) => {
    try {
      await deleteCommunityById(id).unwrap();
      toast.success("Community successfully deleted!");
      refetch();
    } catch (error) {
      toast.error("Error deleting community.");
      console.error(error);
    }
  };

  const handlePublishToggle = async (community) => {
    const newStatus =
      community.status === "published" ? "unpublished" : "published";
    try {
      const result = await updateCommunityStatus({
        id: community.id,
        status: newStatus,
      }).unwrap();
      if (result.success) {
        toast.success("Community status updated successfully!");
        refetch(); // To refresh the list with updated data
      }
    } catch (error) {
      toast.error("Failed to update community status.");
      console.error("Error updating community status:", error);
    }
  };

  useEffect(() => {
    if (communities) {
      const communitiesWithNames = communities.map((community) => ({
        ...community,
        createdBy: userIdToNameMap[community.createdBy] || community.createdBy,
      }));
      setUpdatedCommunities(communitiesWithNames);
    }
  }, [communities, userIdToNameMap]);

  if (isLoading) {
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
  }

  if (isError) {
    return (
      <Typography variant="h6" color="error" align="center">
        Error Loading Communities
      </Typography>
    );
  }

  return (
    <Box width="100%" sx={{ marginTop: "10vmin", marginLeft: "10vw" }}>
      <DataGrid
        dataSource={
          updatedCommunities
            ? JSON.parse(JSON.stringify(updatedCommunities))
            : []
        }
        showBorders={true}
        onRowRemoving={async (e) => {
          await handleDeleteCommunity(e.data.id);
        }}
        onRowUpdating={async (e) => {
          // Implement the edit logic (navigation to AddCommunity component for editing)
        }}
      >
        <Column dataField="title" caption="Title" />
        <Column dataField="createdBy" caption="Created By" />
        <Column dataField="status" caption="Status" />
        <Column
          caption="Actions"
          cellRender={(data) => {
            const community = data.data;
            return (
              <>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleEditCommunity(community)}
                >
                  Edit
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() =>
                    navigate(`/community-posts/${community.id}`)
                  }
                >
                  View Posts
                </Button>
                <Button
                  variant="contained"
                  color={
                    community.status === "published" ? "secondary" : "primary"
                  }
                  onClick={() => handlePublishToggle(community)}
                >
                  {community.status === "published" ? "Unpublish" : "Publish"}
                </Button>
                {/* Add other action buttons here */}
              </>
            );
          }}
        />

        <Paging defaultPageSize={20} />
        <Pager
          showPageSizeSelector={true}
          allowedPageSizes={[5, 10, 15, 20]}
          showNavigationButtons={true}
        />
        <FilterRow visible={true} />

        {/* <Editing
          mode="popup"
          allowUpdating={true}
          allowDeleting={true} 
        /> */}
      </DataGrid>
    </Box>
  );
};

export default ListCommunity;
