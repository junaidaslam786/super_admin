import React, { useState } from "react";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Box,
  Container,
  Typography,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { saveAs } from "file-saver"; // Remember to install file-saver

const categoryData = {
  Users: ["Admin", "Trader", "Customer"],
  Properties: ["Listed", "Sold", "Not Sold"],
  Services: [
    "Video Call",
    "API Subscriptions",
    "Property Listing",
    'Reports & Analytics'
  ],
};

const mockExcelData = [
  { column1: "Bsss", column2: "Ek", column3: "Representation" },
  { column1: "Backend", column2: "Nai", column3: "Kol" },
];

function Reports() {
  const theme = useTheme();
  const isXSmall = useMediaQuery(theme.breakpoints.down("xs"));
  const isSmall = useMediaQuery(theme.breakpoints.between("xs", "sm"));
  const isMedium = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubCategories, setSelectedSubCategories] = useState({});

  const handleMainCategoryChange = (category) => {
    setSelectedCategory(category);
    setSelectedSubCategories({});
  };

  const handleSubCategoryChange = (subCategory) => {
    setSelectedSubCategories((prevSelectedSubCategories) => {
      const newSubCategories = { ...prevSelectedSubCategories };
      if (newSubCategories[subCategory]) {
        delete newSubCategories[subCategory];
      } else {
        newSubCategories[subCategory] = true;
      }
      return newSubCategories;
    });
  };

  const handleSubmit = () => {
    // Simulate generating and downloading an Excel file
    const fileName = `${selectedCategory}-${Object.keys(
      selectedSubCategories
    ).join("-")}.xlsx`;
    const fileData = new Blob(
      [
        /* data representing the Excel file */
      ],
      {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      }
    );
    saveAs(fileData, fileName);
  };

  const customColor = "#00C800";

  return (
    <Container
      maxWidth={isXSmall ? "xs" : isSmall ? "sm" : "lg"}
      sx={{ paddingTop: "10vmin", paddingBottom: "10vmin" }}
    >
      <Paper
        elevation={3}
        sx={{ p: isXSmall ? 1 : isSmall ? 2 : 3, overflowX: "auto" }}
      >
        <Typography
          gutterBottom
          sx={{ fontSize: "4vmin", fontWeight: "600", color: "#191B2A" }}
        >
          Select Category
        </Typography>
        <FormGroup>
          {Object.keys(categoryData).map((mainCategory) => (
            <FormControlLabel
              key={mainCategory}
              control={
                <Checkbox
                  checked={selectedCategory === mainCategory}
                  onChange={() => handleMainCategoryChange(mainCategory)}
                  sx={{
                    color: customColor,
                    "&.Mui-checked": { color: customColor },
                  }}
                />
              }
              label={mainCategory}
            />
          ))}
        </FormGroup>
        {selectedCategory && (
          <Box sx={{ my: 2 }}>
            <Typography
              sx={{ fontSize: "3.5vmin", fontWeight: "600", color: "#191B2A" }}
            >
              Sub-Categories
            </Typography>
            <FormGroup>
              {categoryData[selectedCategory].map((subCategory) => (
                <FormControlLabel
                  key={subCategory}
                  control={
                    <Checkbox
                      checked={!!selectedSubCategories[subCategory]}
                      onChange={() => handleSubCategoryChange(subCategory)}
                      sx={{
                        color: customColor,
                        "&.Mui-checked": { color: customColor },
                      }}
                    />
                  }
                  label={subCategory}
                />
              ))}
            </FormGroup>
          </Box>
        )}
        {/* Mock Excel File Preview */}
        {Object.keys(selectedSubCategories).length > 0 && (
          <>
            <Typography variant="h6" sx={{ mt: 2 }}>
              Excel File Preview
            </Typography>
            <TableContainer component={Paper}>
              <Table size={isSmall ? "small" : "medium"}>
                <TableHead>
                  <TableRow>
                    <TableCell>Column 1</TableCell>
                    <TableCell>Column 2</TableCell>
                    <TableCell>Column 3</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {mockExcelData.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell>{row.column1}</TableCell>
                      <TableCell>{row.column2}</TableCell>
                      <TableCell>{row.column3}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </>
        )}

        <Button
          variant="contained"
          onClick={handleSubmit}
          sx={{
            backgroundColor: customColor,
            "&:hover": { backgroundColor: customColor },
            mt: 2,
          }}
        >
          Download Data
        </Button>
      </Paper>
    </Container>
  );
}
export default Reports