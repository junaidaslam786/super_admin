import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  properties: [], 
  selectedProperty: null, // Currently selected user (for view/edit)
  status: "idle", // idle, loading, succeeded, failed
  error: null, // error message
};

// Create the propertyManagementApi slice
const propertyManagementSlice = createSlice({
  name: "propertyManagement",
  initialState,
  reducers: {
    setProperties: (state, action) => {
      state.properties = action.payload;
    },
    selectProperty: (state, action) => {
      state.selectedProperty = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    updateProperty: (state, action) => {
        const updatedProperty = action.payload;
        const propertyIndex = state.properties.findIndex(property => property.id === updatedProperty.id);
        if (propertyIndex !== -1) {
            state.properties[propertyIndex] = updatedProperty;
        }
    },
    deleteProperty: (state, action) => {
        const propertyId = action.payload;
        state.properties = state.properties.filter(property => property.id !== propertyId);
    }
  },
});

// Export the reducer to be combined in the store
export default propertyManagementSlice.reducer;
// Export the actions for dispatching
export const { setProperties, selectProperty, setStatus, setError, updateProperty, deleteProperty } =
  propertyManagementSlice.actions;
