import React from "react";
import { Box, Button } from "@mui/material";
import DataGrid, {
  Paging,
  Pager,
  FilterRow,
  Column,
  
} from "devextreme-react/data-grid";
import {  useParams } from "react-router-dom";
import { useGetAllCummunityPostsQuery } from '../../redux/api/communityApi';


const ListAllCommunityPosts = () => {
    const { id } = useParams(); // Assuming URL param name is id
  const { data: posts, isLoading, isError } = useGetAllCummunityPostsQuery(id);
  console.log('posts', posts );

  return (
    <Box width="100%" sx={{ marginTop: "10vmin", marginLeft: "10vw" }}>
      <DataGrid
        dataSource={
          posts
            ? JSON.parse(JSON.stringify(posts))
            : []
        }
        showBorders={true}
        onRowRemoving={async (e) => {
        //   await handleDeleteCommunity(e.data.id);
        }}
        onRowUpdating={async (e) => {
          // Implement the edit logic (navigation to AddCommunity component for editing)
        }}
      >
        <Column dataField="title" caption="Title" />
        <Column dataField="addedby" caption="Added By" />
        <Column dataField="status" caption="Status" />
        <Column dataField="addedon" caption="Added On" />
        <Column
          caption="Actions"
          cellRender={(data) => {
            const community = data.data;
            return (
              <>
                <Button
                  variant="contained"
                  color="primary"
                //   onClick={() => handleEditCommunity(community)}
                >
                  Edit
                </Button>
                <Button
                  variant="contained"
                  color={
                    community.status === "published" ? "secondary" : "primary"
                  }
                //   onClick={() => handlePublishToggle(community)}
                >
                  {community.status === "published" ? "Unpublish" : "Publish"}
                </Button>
                
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

        
      </DataGrid>
    </Box>
  )

}

export default ListAllCommunityPosts;