import React, { useState, useEffect } from "react";
import { Box, Card, CardHeader, CardContent, FormControl, InputLabel, Select, MenuItem, TextField, Button, CircularProgress } from "@mui/material";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useAddCommunityMutation, useUpdateCommunityMutation } from '../../redux/api/communityApi'; // Adjust this import as needed

const AddCommunity = () => {
  const [addCommunity, { isLoading: addCommunityPostLoading }] = useAddCommunityMutation();
  const [updateCommunity, { isLoading: updateCommunityPostLoading }] = useUpdateCommunityMutation();

  const [category, setCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');
  const [categoryType, setCategoryType] = useState('');
  const [status, setStatus] = useState('published');
  const [title, setTitle] = useState('');
  const [communityId, setCommunityId] = useState(null); // Add state for community ID
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    if (params.communityId) {
      setCommunityId(params.communityId);
      // Fetch community details and populate form (if necessary)
    }
  }, [params.communityId]);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       await addCommunity({ title, category, subCategory, categoryType, status }).unwrap();
//       // Redirect or show success message
//     } catch (err) {
//       // Handle error
//     }
//   };
const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (communityId) {
        // Update community logic
        await updateCommunity({ id: communityId, title, category, subCategory, categoryType, status }).unwrap();
        navigate("/list-community"); // Redirect after updating
      } else {
        // Add new community logic
        await addCommunity({ title, category, subCategory, categoryType, status }).unwrap();
        navigate("/list-community"); // Redirect after adding
      }
    } catch (err) {
      // Handle error
    }
  };

  return (
    <Card>
      <CardHeader title="Add Community" />
      <CardContent>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <FormControl fullWidth margin="normal">
            <InputLabel id="category-label">Category</InputLabel>
            <Select labelId="category-label" label="Category" value={category} onChange={(e) => setCategory(e.target.value)}>
              {/* Map your categories here */}
              <MenuItem value="1">Property</MenuItem>
              {/* <MenuItem value="2">Category 2</MenuItem> */}
            </Select>
          </FormControl>

          <FormControl fullWidth margin="normal">
            <InputLabel id="subCategory-label">Sub Category</InputLabel>
            <Select labelId="subCategory-label" label="Sub Category" value={subCategory} onChange={(e) => setSubCategory(e.target.value)}>
              {/* Map your sub categories here */}
              <MenuItem value="1">Commercial</MenuItem>
              <MenuItem value="2">Residential</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth margin="normal">
            <InputLabel id="categoryType-label">Category Type</InputLabel>
            <Select labelId="categoryType-label" label="Category Type" value={categoryType} onChange={(e) => setCategoryType(e.target.value)}>
              {/* Map your category types here */}
              <MenuItem value="sale">Sale</MenuItem>
              <MenuItem value="rent">Rent</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth margin="normal">
            <InputLabel id="status-label">Status</InputLabel>
            <Select labelId="status-label" label="Status" value={status} onChange={(e) => setStatus(e.target.value)}>
              <MenuItem value="published">Published</MenuItem>
              <MenuItem value="unpublished">Unpublished</MenuItem>
            </Select>
          </FormControl>

          <TextField margin="normal" required fullWidth label="Title" value={title} onChange={(e) => setTitle(e.target.value)} />

          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
            <Button type="submit" variant="contained" disabled={addCommunityPostLoading}>
              {addCommunityPostLoading ? <CircularProgress size={24} /> : "Submit"}
            </Button>
            <Button variant="outlined" component={Link} to="/admin/dashboard">Cancel</Button>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default AddCommunity;
