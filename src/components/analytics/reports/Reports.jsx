// import React, { useState, useEffect } from "react";
// import {
//   Checkbox,
//   FormControlLabel,
//   FormGroup,
//   Box,
//   Container,
//   Typography,
//   Paper,
//   Button,
// } from "@mui/material";
// import { CSVLink } from "react-csv";
// import {
//   useGetUserDataForReportsQuery,
//   useGetPropertiesDataForReportsQuery,
//   useGetServicesDataForReportsQuery,
// } from "../../../redux/api/analyticsApi";
// import { styled } from '@mui/material/styles';

// const categoryData = {
//   Users: ["Admin", "Agent", "Customer"],
//   Properties: ["Listed", "Sold", "Not Sold"],
//   Services: [
//     "Video Call",
//     "API Subscriptions",
//     "Property Listing",
//     "Reports & Analytics",
//   ],
// };

// const Reports = () => {
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [selectedSubCategories, setSelectedSubCategories] = useState({});

//   // Custom styles
// const StyledPaper = styled(Paper)({
//   padding: '20px',
//   marginBottom: '20px',
//   backgroundColor: '#f5f5f5', // Soft background
// });

// const DownloadButton = styled(Button)({
//   marginTop: '20px',
//   backgroundColor: '#4caf50', // Theme primary color
//   color: 'white',
//   '&:hover': {
//     backgroundColor: '#388e3c', // Darker shade for hover state
//   },
// });

//   // Transform sub-categories to lowercase for API
//   const transformedSubCategories = Object.keys(selectedSubCategories).map(
//     (subCat) => subCat.toLowerCase()
//   );

//   const { data: userData, isFetching: isFetchingUsers } =
//     useGetUserDataForReportsQuery(
//       { userCategories: transformedSubCategories },
//       {
//         skip:
//           selectedCategory !== "Users" || transformedSubCategories.length === 0,
//       }
//     );

//   const { data: propertiesData, isFetching: isFetchingProperties } =
//     useGetPropertiesDataForReportsQuery(
//       { propertyCategories: transformedSubCategories },
//       {
//         skip:
//           selectedCategory !== "Properties" ||
//           transformedSubCategories.length === 0,
//       }
//     );

//   const { data: servicesData, isFetching: isFetchingServices } =
//     useGetServicesDataForReportsQuery(
//       { serviceCategories: transformedSubCategories },
//       {
//         skip:
//           selectedCategory !== "Services" ||
//           transformedSubCategories.length === 0,
//       }
//     );

//   useEffect(() => {
//     const subCategories = categoryData[selectedCategory];
//     if (subCategories) {
//       setSelectedSubCategories(
//         subCategories.reduce((acc, subCat) => ({ ...acc, [subCat]: true }), {})
//       );
//     }
//   }, [selectedCategory]);

//   const generateCSVContent = (data) => {
//     if (!data) return { headers: [], rows: [] };

//     const rows = [].concat(...Object.values(data));
//     const headers =
//       rows.length > 0
//         ? Object.keys(rows[0]).map((key) => ({
//             label: key.charAt(0).toUpperCase() + key.slice(1),
//             key: key,
//           }))
//         : [];

//     return { headers, rows };
//   };

//   const usersCSV = generateCSVContent(userData?.userData);
//   const propertiesCSV = generateCSVContent(propertiesData?.propertyData);
//   const servicesCSV = generateCSVContent(servicesData?.serviceData);

//   const handleMainCategoryChange = (category) => {
//     setSelectedCategory(category);
//     setSelectedSubCategories({});
//   };

//   const handleSubCategoryChange = (subCategory) => {
//     setSelectedSubCategories((prev) => ({
//       ...prev,
//       [subCategory]: !prev[subCategory],
//     }));
//   };

//   const flattenedData =
//     userData?.userData ||
//     propertiesData?.propertyData ||
//     servicesData?.serviceData ||
//     [];
//   const csvHeaders =
//     flattenedData.length > 0
//       ? Object.keys(flattenedData[0]).map((key) => ({
//           label: key.charAt(0).toUpperCase() + key.slice(1),
//           key: key,
//         }))
//       : [];

//   return (
//     <Container maxWidth="lg">
//       <StyledPaper elevation={3} sx={{ p: 3, overflowX: "auto" }}>
//         <Typography gutterBottom variant="h6">
//           Select Category
//         </Typography>
//         <FormGroup>
//           {Object.keys(categoryData).map((mainCategory) => (
//             <FormControlLabel
//               key={mainCategory}
//               control={
//                 <Checkbox
//                   checked={selectedCategory === mainCategory}
//                   onChange={() => handleMainCategoryChange(mainCategory)}
//                 />
//               }
//               label={mainCategory}
//             />
//           ))}
//         </FormGroup>
//         {selectedCategory && (
//           <Box sx={{ my: 2 }}>
//             <Typography variant="subtitle1">Sub-Categories</Typography>
//             <FormGroup>
//               {categoryData[selectedCategory].map((subCategory) => (
//                 <FormControlLabel
//                   key={subCategory}
//                   control={
//                     <Checkbox
//                       checked={!!selectedSubCategories[subCategory]}
//                       onChange={() => handleSubCategoryChange(subCategory)}
//                     />
//                   }
//                   label={subCategory}
//                 />
//               ))}
//             </FormGroup>
//           </Box>
//         )}

//         {selectedCategory === "Users" && (
//           <CSVLink
//             data={usersCSV.rows}
//             headers={usersCSV.headers}
//             filename="user_data_report.csv"
//             className="btn btn-primary"
//             style={{ marginTop: "20px" }}
//           >
//             Download User Report
//           </CSVLink>
//         )}

//         {selectedCategory === "Properties" && (
//           <CSVLink
//             data={propertiesCSV.rows}
//             headers={propertiesCSV.headers}
//             filename="property_data_report.csv"
//             className="btn btn-primary"
//             style={{ marginTop: "20px" }}
//           >
//             Download Property Report
//           </CSVLink>
//         )}

//         {selectedCategory === "Services" && (
//           <CSVLink
//             data={servicesCSV.rows}
//             headers={servicesCSV.headers}
//             filename="service_data_report.csv"
//             className="btn btn-primary"
//             style={{ marginTop: "20px" }}
//           >
//             Download Service Report
//           </CSVLink>
//         )}

//         {isFetchingUsers ||
//           isFetchingProperties ||
//           (isFetchingServices && <Typography>Loading data...</Typography>)}
//       </StyledPaper>
//     </Container>
//   );
// };

// export default Reports;

import React, { useState, useEffect } from "react";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Box,
  Container,
  Typography,
  Paper,
  Button,
  Grid,
} from "@mui/material";
import { CSVLink } from "react-csv";
import {
  useGetUserDataForReportsQuery,
  useGetPropertiesDataForReportsQuery,
  useGetServicesDataForReportsQuery,
} from "../../../redux/api/analyticsApi";

const categoryData = {
  Users: ["Admin", "Agent", "Customer"],
  Properties: ["Listed", "Sold", "Not Sold"],
  Services: [
    "Video Call",
    "API Subscriptions",
    "Property Listing",
    "Reports & Analytics",
  ],
};

const Reports = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubCategories, setSelectedSubCategories] = useState({});

  // Generate CSV data based on the selected category and its data
  const generateCSVContent = (data) => {
    if (!data) return { headers: [], rows: [] };

    const rows = [].concat(...Object.values(data));
    const headers =
      rows.length > 0
        ? Object.keys(rows[0]).map((key) => ({
            label: key.charAt(0).toUpperCase() + key.slice(1),
            key: key,
          }))
        : [];

    return { headers, rows };
  };

  const { data: userData } = useGetUserDataForReportsQuery(
    { userCategories: selectedSubCategories },
    { skip: selectedCategory !== "Users" }
  );
  const { data: propertiesData } = useGetPropertiesDataForReportsQuery(
    { propertyCategories: selectedSubCategories },
    { skip: selectedCategory !== "Properties" }
  );
  const { data: servicesData } = useGetServicesDataForReportsQuery(
    { serviceCategories: selectedSubCategories },
    { skip: selectedCategory !== "Services" }
  );

  const usersCSV = generateCSVContent(userData);
  const propertiesCSV = generateCSVContent(propertiesData);
  const servicesCSV = generateCSVContent(servicesData);

  const handleMainCategoryChange = (category) => {
    setSelectedCategory(category);
    setSelectedSubCategories({});
  };

  const handleSubCategoryChange = (subCategory) => {
    setSelectedSubCategories((prev) => ({
      ...prev,
      [subCategory]: !prev[subCategory],
    }));
  };

  return (
    <Container maxWidth="lg">
      <Paper elevation={3} sx={{ p: 3, overflowX: "auto", mb: 3 }}>
        <Typography gutterBottom variant="h6">
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
                />
              }
              label={mainCategory}
            />
          ))}
        </FormGroup>

        {selectedCategory && (
          <Box sx={{ my: 2 }}>
            <Typography variant="subtitle1">Sub-Categories</Typography>
            <FormGroup>
              {categoryData[selectedCategory].map((subCategory) => (
                <FormControlLabel
                  key={subCategory}
                  control={
                    <Checkbox
                      checked={!!selectedSubCategories[subCategory]}
                      onChange={() => handleSubCategoryChange(subCategory)}
                    />
                  }
                  label={subCategory}
                />
              ))}
            </FormGroup>
          </Box>
        )}

        <Grid container spacing={2} sx={{ mt: 2 }}>
          {selectedCategory === "Users" && (
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                component={CSVLink}
                data={usersCSV.rows}
                headers={usersCSV.headers}
                filename="user_data_report.csv"
              >
                Download User Report
              </Button>
            </Grid>
          )}

          {selectedCategory === "Properties" && (
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                component={CSVLink}
                data={propertiesCSV.rows}
                headers={propertiesCSV.headers}
                filename="property_data_report.csv"
              >
                Download Property Report
              </Button>
            </Grid>
          )}

          {selectedCategory === "Services" && (
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                component={CSVLink}
                data={servicesCSV.rows}
                headers={servicesCSV.headers}
                filename="service_data_report.csv"
              >
                Download Service Report
              </Button>
            </Grid>
          )}
        </Grid>
      </Paper>
    </Container>
  );
};

export default Reports;
