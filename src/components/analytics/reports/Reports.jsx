// import React, { useState, useEffect } from "react";
// import {
//   Checkbox,
//   FormControlLabel,
//   FormGroup,
//   Box,
//   Container,
//   Typography,
//   Paper,
// } from "@mui/material";
// import { CSVLink } from "react-csv";
// import { useGetUserDataForReportsQuery } from "../../../redux/api/analyticsApi";

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

//   // Transform sub-categories to lowercase for API
//   const transformedSubCategories = Object.keys(selectedSubCategories).map(
//     (subCat) => subCat.toLowerCase()
//   );

//   const { data: userData, isFetching } = useGetUserDataForReportsQuery(
//     {
//       userCategories: transformedSubCategories,
//     },
//     {
//       skip: !selectedCategory || transformedSubCategories.length === 0,
//     }
//   );

//   useEffect(() => {
//     if (selectedCategory === "Users") {
//       setSelectedSubCategories({
//         Admin: true,
//         Agent: true,
//         Customer: true,
//       });
//     }
//   }, [selectedCategory]);

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

//   // Headers for CSV file
//   const flattenedUserData = userData ? [].concat(...Object.values(userData.userData)) : [];
//   const generateCSVHeaders = () => {
//     return flattenedUserData.length > 0
//       ? Object.keys(flattenedUserData[0]).map(key => ({
//           label: key.charAt(0).toUpperCase() + key.slice(1),
//           key: key
//         }))
//       : [];
//   };
//   const csvHeaders = generateCSVHeaders();

//   return (
//     <Container maxWidth="lg">
//       <Paper elevation={3} sx={{ p: 3, overflowX: "auto" }}>
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

//         <CSVLink
//           data={flattenedUserData}
//           headers={csvHeaders}
//           filename="user_data_report.csv"
//           className="btn btn-primary"
//           style={{ marginTop: "20px" }}
//         >
//           Download Report
//         </CSVLink>
//         {isFetching && <Typography>Loading data...</Typography>}
//       </Paper>
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

  // Transform sub-categories to lowercase for API
  const transformedSubCategories = Object.keys(selectedSubCategories).map(
    (subCat) => subCat.toLowerCase()
  );

  const { data: userData, isFetching: isFetchingUsers } =
    useGetUserDataForReportsQuery(
      { userCategories: transformedSubCategories },
      {
        skip:
          selectedCategory !== "Users" || transformedSubCategories.length === 0,
      }
    );

  const { data: propertiesData, isFetching: isFetchingProperties } =
    useGetPropertiesDataForReportsQuery(
      { propertyCategories: transformedSubCategories },
      {
        skip:
          selectedCategory !== "Properties" ||
          transformedSubCategories.length === 0,
      }
    );

  const { data: servicesData, isFetching: isFetchingServices } =
    useGetServicesDataForReportsQuery(
      { serviceCategories: transformedSubCategories },
      {
        skip:
          selectedCategory !== "Services" ||
          transformedSubCategories.length === 0,
      }
    );

  useEffect(() => {
    const subCategories = categoryData[selectedCategory];
    if (subCategories) {
      setSelectedSubCategories(
        subCategories.reduce((acc, subCat) => ({ ...acc, [subCat]: true }), {})
      );
    }
  }, [selectedCategory]);

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

  const usersCSV = generateCSVContent(userData?.userData);
  const propertiesCSV = generateCSVContent(propertiesData?.propertyData);
  const servicesCSV = generateCSVContent(servicesData?.serviceData);

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

  const flattenedData =
    userData?.userData ||
    propertiesData?.propertyData ||
    servicesData?.serviceData ||
    [];
  const csvHeaders =
    flattenedData.length > 0
      ? Object.keys(flattenedData[0]).map((key) => ({
          label: key.charAt(0).toUpperCase() + key.slice(1),
          key: key,
        }))
      : [];

  return (
    <Container maxWidth="lg">
      <Paper elevation={3} sx={{ p: 3, overflowX: "auto" }}>
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

        {selectedCategory === "Users" && (
          <CSVLink
            data={usersCSV.rows}
            headers={usersCSV.headers}
            filename="user_data_report.csv"
            className="btn btn-primary"
            style={{ marginTop: "20px" }}
          >
            Download User Report
          </CSVLink>
        )}

        {selectedCategory === "Properties" && (
          <CSVLink
            data={propertiesCSV.rows}
            headers={propertiesCSV.headers}
            filename="property_data_report.csv"
            className="btn btn-primary"
            style={{ marginTop: "20px" }}
          >
            Download Property Report
          </CSVLink>
        )}

        {selectedCategory === "Services" && (
          <CSVLink
            data={servicesCSV.rows}
            headers={servicesCSV.headers}
            filename="service_data_report.csv"
            className="btn btn-primary"
            style={{ marginTop: "20px" }}
          >
            Download Service Report
          </CSVLink>
        )}

        {isFetchingUsers ||
          isFetchingProperties ||
          (isFetchingServices && <Typography>Loading data...</Typography>)}
      </Paper>
    </Container>
  );
};

export default Reports;
