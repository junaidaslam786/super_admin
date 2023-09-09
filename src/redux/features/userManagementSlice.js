import { createSlice } from "@reduxjs/toolkit";

// Initial state for the userManagementApi slice
const initialState = {
    users: [],           // All users (excluding super admins)
    selectedUser: null,  // Currently selected user (for view/edit)
    status: 'idle',      // idle, loading, succeeded, failed
    error: null          // error message
};

// Create the userManagementApi slice
const userManagementSlice = createSlice({
    name: 'userManagement',
    initialState,
    reducers: {
        setUsers: (state, action) => {
            state.users = action.payload;
        },
        selectUser: (state, action) => {
            state.selectedUser = action.payload;
        },
        setStatus: (state, action) => {
            state.status = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        // ... You can add more reducers as needed (like editUser, deleteUser, etc.)
    }
});

// Export the reducer to be combined in the store
export default userManagementSlice.reducer;
// Export the actions for dispatching
export const { setUsers, selectUser, setStatus, setError } = userManagementSlice.actions;

