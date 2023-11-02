// import React, { useState } from 'react';
// import SubsLayout from '../../layout/SubsLayout';
// import SubsConfig from '../../components/Subscription/SubsConfig';
// import { useGetAllFeatureQuery } from '../../redux/api/featureManagementApi'; 
// import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";

// const SubsConfigPage = () => {
//   const [selectedFeatures, setSelectedFeatures] = useState([]);
//   const { data: features, isLoading, isError } = useGetAllFeatureQuery();

//   const handleFeatureSelect = (featureName) => {
//     if (!selectedFeatures.includes(featureName)) {
//       setSelectedFeatures(prevFeatures => [...prevFeatures, featureName]);
//     }
//   };

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (isError) {
//     return <div>Error loading features</div>;
//   }

//   return (
//     <SubsLayout>
//       <FormControl variant="outlined" style={{ width: '200px', marginBottom: '20px' }}>
//         <InputLabel>Feature</InputLabel>
//         <Select
//           label="Feature"
//           value=""
//           onChange={(e) => handleFeatureSelect(e.target.value)}
//         >
//           {features.map((feature, index) => (
//             <MenuItem key={feature.id} value={feature.name}>
//               {feature.name}
//             </MenuItem>
//           ))}
//         </Select>
//       </FormControl>
//       {selectedFeatures.map((featureName, index) => (
//         <SubsConfig key={index} featureName={featureName} />
//       ))}
//     </SubsLayout>
//   );
// };

// export default SubsConfigPage;

import React, { useState, useEffect } from 'react';
import SubsLayout from '../../layout/SubsLayout';
import SubsConfig from '../../components/Subscription/SubsConfig';
import { useGetAllFeatureQuery } from '../../redux/api/featureManagementApi'; 
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";

const SubsConfigPage = () => {
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const { data: features, isLoading, isError } = useGetAllFeatureQuery();

  useEffect(() => {
    // Read selected features from localStorage on component mount
    const storedFeatures = localStorage.getItem('selectedFeatures');
    if (storedFeatures) {
      setSelectedFeatures(JSON.parse(storedFeatures));
    }
  }, []);

  const handleFeatureSelect = (featureName) => {
    if (!selectedFeatures.includes(featureName)) {
      const updatedFeatures = [...selectedFeatures, featureName];
      setSelectedFeatures(updatedFeatures);
      // Store the updated list of selected features to localStorage
      localStorage.setItem('selectedFeatures', JSON.stringify(updatedFeatures));
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading features</div>;
  }

  return (
    <SubsLayout>
      <FormControl variant="outlined" style={{ width: '200px', marginBottom: '20px' }}>
        <InputLabel>Feature</InputLabel>
        <Select
          label="Feature"
          value=""
          onChange={(e) => handleFeatureSelect(e.target.value)}
        >
          {features.map((feature, index) => (
            <MenuItem key={feature.id} value={feature.name}>
              {feature.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {selectedFeatures.map((featureName, index) => (
        <SubsConfig key={index} featureName={featureName} />
      ))}
    </SubsLayout>
  );
};

export default SubsConfigPage;
