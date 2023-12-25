import React from 'react';
import { useGetAllCmsPagesQuery, useUpdateCmsPageMutation, useDeleteCmsPageMutation } from '../../redux/api/cmsApi';
import CmsPagesList from './CmsPagesList';
// Assume you have functions for deleting and updating
// import { deleteCmsPage, updateCmsPage } from 'path-to-your-update-delete-functions';

const CmsPageContainer = () => {
  const { data: cmsPages, isLoading, error } = useGetAllCmsPagesQuery('blogs');

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error occurred: {error.message}</p>;

  const handleDelete = (pageId) => {
    // Call delete function
    useDeleteCmsPageMutation(pageId);
  };

  const handleUpdate = (pageId) => {
    // Call update function or redirect to update page
    useUpdateCmsPageMutation(pageId);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <CmsPagesList
          cmsPages={cmsPages || []}
          onDelete={handleDelete}
          onUpdate={handleUpdate}
        />
      </Grid>
    </Grid>
  );
};

export default CmsPageContainer;
