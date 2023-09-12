import { createSelector } from "@reduxjs/toolkit";

// Basic selector to retrieve the entire user list from the userManagement slice
const selectAllUsers = (state) => state.userManagement.users || [];

// Selector to retrieve all users of type "customer"
export const selectAllCustomers = createSelector(
  [selectAllUsers],
  (users) => users.filter(user => user && user.userType === "customer")
);

// Selector to retrieve all users of type "agent"
export const selectAllAgents = createSelector(
  [selectAllUsers],
  (users) => users.filter(user => user && user.userType === "agent")
);

// Selector to retrieve all users of type "admin"
export const selectAllAdmins = createSelector(
  [selectAllUsers],
  (users) => users.filter(user => user && user.userType === "admin")
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

// Selector to retrieve the selected user from the userManagement slice
export const selectSelectedUser = (state) => state.userManagement.selectedUser;

