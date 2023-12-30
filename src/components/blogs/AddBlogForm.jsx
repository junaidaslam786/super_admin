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
  Input,
  Box,
  ThemeProvider,
  createTheme,
} from "@mui/material";

const AddBlogForm = () => {
  const thematic = createTheme({
    palette: {
      primary: {
        main: "#00C800",
        contrastText: "#fff",
      },
    },
  });
  const [addCmsPage, { isLoading }] = useAddCmsPageMutation();
  const [description, setDescription] = useState("");
  const [blogData, setBlogData] = useState({
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
    setBlogData({ ...blogData, [name]: files ? files[0] : value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    Object.keys(blogData).forEach((key) => formData.append(key, blogData[key]));
    formData.append("description", description);

    try {
      await addCmsPage(formData).unwrap();
      // Handle success and reset form
      setDescription("");
      setBlogData({
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
      <CardHeader title="Add Blog" />
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
                value={blogData.title}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Category</InputLabel>
                <Select
                  name="category"
                  value={blogData.category}
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
                  value={blogData.subcategory}
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
                  value={blogData.categoryType}
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
                  value={blogData.status}
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
                      value={blogData.image?.name || ""}
                      readOnly
                      variant="outlined"
                      placeholder="Select an image"
                    />
                  </Box>
                  <ThemeProvider theme={thematic}>
                    <Button
                      variant="contained"
                      component="label"
                      sx={{ ml: 2 }}
                    >
                      Choose File
                      <input
                        type="file"
                        hidden
                        name="image"
                        onChange={handleChange}
                      />
                    </Button>
                  </ThemeProvider>
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
                      value={blogData.file?.name || ""}
                      readOnly
                      variant="outlined"
                      placeholder="Select a file"
                    />
                  </Box>
                  <ThemeProvider theme={thematic}>
                    <Button
                      variant="contained"
                      component="label"
                      sx={{ ml: 2 }}
                    >
                      Choose File
                      <input
                        type="file"
                        hidden
                        name="file"
                        onChange={handleChange}
                      />
                    </Button>
                  </ThemeProvider>
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
              <ThemeProvider theme={thematic}>
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
              </ThemeProvider>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
};

export default AddBlogForm;
