import { createSelector } from "@reduxjs/toolkit";

export const selectTotalProperties = (state) => state.propertyManagement.properties.length;
