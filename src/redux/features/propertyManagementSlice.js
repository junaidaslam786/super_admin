import { createSlice } from "@reduxjs/toolkit";

// Initial state for the userManagementApi slice
const initialState = {
  properties: [], // All users (excluding super admins)
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
    // ... You can add more reducers as needed (like editUser, deleteUser, etc.)
  },
});

// Export the reducer to be combined in the store
export default propertyManagementSlice.reducer;
// Export the actions for dispatching
export const { setProperties, selectProperty, setStatus, setError } =
  propertyManagementSlice.actions;
