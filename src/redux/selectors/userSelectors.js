import { createSelector } from "@reduxjs/toolkit";

// Basic selector to retrieve the entire user list from the userManagement slice
const selectAllUsers = (state) => state.userManagement.users || [];

// Selector to retrieve all users of type "customer"
export const selectAllCustomers = createSelector([selectAllUsers], (users) =>
  users.filter((user) => user && user.userType === "customer")
);

// Selector to retrieve all users of type "agent"
export const selectAllAgents = createSelector([selectAllUsers], (users) =>
  users.filter((user) => user && user.userType === "agent")
);

// Selector to retrieve all users of type "admin"
export const selectAllAdmins = createSelector([selectAllUsers], (users) =>
  users.filter((user) => user && user.userType === "admin")
);

// Selector to get the count of all customers
export const selectTotalCustomers = createSelector(
  [selectAllCustomers],
  (customers) => customers.length
);

// Selector to get the count of all agents/traders
export const selectTotalAgents = createSelector(
  [selectAllAgents],
  (agents) => agents.length
);

// Selector to get the count of all admins
export const selectTotalAdmins = createSelector(
  [selectAllAdmins],
  (admins) => admins.length
);

// Selector to map user IDs to their names
// Selector to map user IDs to their names, including the superadmin
export const selectUserIdToNameMap = createSelector(
  [selectAllUsers, (state) => state.userState.user],
  (users, superadmin) => {
    // Combine all users with the superadmin
    const allUsersCombined = [...users, superadmin];

    return allUsersCombined.reduce((acc, user) => {
      if (user && user.id) {
        acc[user.id] = user.firstName;
      }
      return acc;
    }, {});
  }
);

// Selector to retrieve the selected user from the userManagement slice
export const selectSelectedUser = (state) => state.userManagement.selectedUser;
