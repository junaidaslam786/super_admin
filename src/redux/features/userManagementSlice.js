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
        updateUser: (state, action) => {
            const updatedUser = action.payload;
            const userIndex = state.users.findIndex(user => user.id === updatedUser.id);
            if (userIndex !== -1) {
                state.users[userIndex] = updatedUser;
            }
        },
        deleteUser: (state, action) => {
            const userId = action.payload;
            state.users = state.users.filter(user => user.id !== userId);
        },
    }
});

// Export the reducer to be combined in the store
export default userManagementSlice.reducer;
// Export the actions for dispatching
export const { setUsers, selectUser, setStatus, setError, updateUser, deleteUser } = userManagementSlice.actions;

