import React, { useState } from "react";
import { useAddCmsPageMutation } from "../../redux/api/cmsApi";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {
  Card,
  CardHeader,
  CardContent,
  TextField,
  Button,
  CircularProgress,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Grid,
  Box,
} from "@mui/material";

const AddNewsForm = () => {
  const [addCmsPage, { isLoading }] = useAddCmsPageMutation();
  const [description, setDescription] = useState("");
  const [newsData, setNewsData] = useState({
    title: "",
    category: "",
    subcategory: "",
    categoryType: "",
    status: "",
    image: null,
    file: null,
  });

  const handleChange = (event) => {
    const { name, value, files } = event.target;
    setNewsData({ ...newsData, [name]: files ? files[0] : value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    Object.keys(newsData).forEach((key) => formData.append(key, newsData[key]));
    formData.append("description", description);

    try {
      await addCmsPage(formData).unwrap();
      // Handle success and reset form
      setDescription("");
      setNewsData({
        title: "",
        category: "",
        subcategory: "",
        categoryType: "",
        status: "",
        image: null,
        file: null,
      });
    } catch (error) {
      // Handle error here
    }
  };
  return (
    <Card>
      <CardHeader title="Add News" />
      <CardContent>
        <Box
          component="form"
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          noValidate
          sx={{ mt: 1 }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                name="title"
                label="Title"
                value={newsData.title}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Category</InputLabel>
                <Select
                  name="category"
                  value={newsData.category}
                  onChange={handleChange}
                >
                  <MenuItem value="property">Property</MenuItem>
                  {/* More category options */}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Subcategory</InputLabel>
                <Select
                  name="subcategory"
                  value={newsData.subcategory}
                  onChange={handleChange}
                >
                  <MenuItem value="residential">Residential</MenuItem>
                  <MenuItem value="commercial">Commercial</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Category Type</InputLabel>
                <Select
                  name="categoryType"
                  value={newsData.categoryType}
                  onChange={handleChange}
                >
                  <MenuItem value="sale">Sale</MenuItem>
                  <MenuItem value="rent">Rent</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Status</InputLabel>
                <Select
                  name="status"
                  value={newsData.status}
                  onChange={handleChange}
                >
                  <MenuItem value="active">Active</MenuItem>
                  <MenuItem value="inactive">Inactive</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                {/* <InputLabel htmlFor="image-upload">Image Upload</InputLabel> */}
                <Box display="flex" alignItems="center">
                  <Box flexGrow={1}>
                    <TextField
                      fullWidth
                      type="text"
                      value={newsData.image?.name || ""}
                      readOnly
                      variant="outlined"
                      placeholder="Select an image"
                    />
                  </Box>
                  <Button variant="contained" component="label" sx={{ ml: 2 }}>
                    Choose File
                    <input
                      type="file"
                      hidden
                      name="image"
                      onChange={handleChange}
                    />
                  </Button>
                </Box>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                {/* <InputLabel htmlFor="file-upload">File Upload</InputLabel> */}
                <Box display="flex" alignItems="center">
                  <Box flexGrow={1}>
                    <TextField
                      fullWidth
                      type="text"
                      value={newsData.file?.name || ""}
                      readOnly
                      variant="outlined"
                      placeholder="Select a file"
                    />
                  </Box>
                  <Button variant="contained" component="label" sx={{ ml: 2 }}>
                    Choose File
                    <input
                      type="file"
                      hidden
                      name="file"
                      onChange={handleChange}
                    />
                  </Button>
                </Box>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <ReactQuill
                theme="snow"
                value={description}
                onChange={setDescription}
                style={{ height: "200px" }}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                disabled={isLoading}
                sx={{ mt: 3, mb: 2 }}
              >
                {isLoading ? <CircularProgress size={24} /> : "Submit"}
              </Button>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
};

export default AddNewsForm;
