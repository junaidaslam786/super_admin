import { createSelector } from "@reduxjs/toolkit";
import { format, parseISO } from 'date-fns';


// Basic selector to retrieve the entire user list from the userManagement slice
const selectAllUsers = (state) => state.userManagement.users || [];

// Helper function to group users by month and userType
const groupUsersByMonthAndType = (users, userType) => {
  return users.reduce((acc, user) => {
    if (user.userType === userType) {
      const month = format(parseISO(user.createdAt), 'yyyy-MM');
      if (!acc[month]) {
        acc[month] = { total: 0, active: 0 };
      }
      acc[month].total++;
      if (user.active) {
        acc[month].active++;
      }
    }
    return acc;
  }, {});
};

// Selector to group all customers by month
export const selectCustomersGroupedByMonth = createSelector(
  [selectAllUsers],
  (users) => groupUsersByMonthAndType(users, "customer")
);

// Selector to group all agents by month
export const selectAgentsGroupedByMonth = createSelector(
  [selectAllUsers],
  (users) => groupUsersByMonthAndType(users, "agent")
);

// Selector for the graph data for total and active customers by month
export const selectGraphDataForCustomers = createSelector(
  [selectCustomersGroupedByMonth],
  (groupedData) => {
    return Object.entries(groupedData).map(([month, data]) => ({
      month,
      totalCustomers: data.total,
      activeCustomers: data.active
    }));
  }
);

// Selector for the graph data for total and active agents by month
// export const selectGraphDataForAgents = createSelector(
//   [selectAgentsGroupedByMonth],
//   (groupedData) => {
//     return Object.entries(groupedData).map(([month, data]) => ({
//       month,
//       totalAgents: data.total,
//       activeAgents: data.active
//     }));
//   }
// );

// Selector for the graph data for total and active agents by month
export const selectGraphDataForAgents = createSelector(
  [selectAgentsGroupedByMonth],
  (groupedData) => {
    return Object.entries(groupedData).reduce((acc, [month, data]) => {
      acc[month] = {
        totalAgents: data.total,
        activeAgents: data.active
      };
      return acc;
    }, {});
  }
);


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

// Selector to count all active customers
export const selectTotalActiveCustomers = createSelector(
  [selectAllUsers],
  (users) =>
    users.filter(user => user && user.userType === "customer" && user.active).length
);

// Selector to count all active traders/agents
export const selectTotalActiveTraders = createSelector(
  [selectAllUsers],
  (users) =>
    users.filter(user => user && user.userType === "agent" && user.active).length
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
