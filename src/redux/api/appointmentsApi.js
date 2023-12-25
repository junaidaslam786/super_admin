import { createApi } from "@reduxjs/toolkit/query/react";
import customFetchBase from "./customFetchBase";

export const appointmentsApi = createApi({
  reducerPath: "appointmentsApi",
  baseQuery: customFetchBase,
  tagTypes: ["AppointmentsApi"],
  endpoints: (builder) => ({
    listAppointments: builder.query({
      query: () => {
        const token = localStorage.getItem("token");
        return {
          url: "/superadmin/appointment/list",
          method: "GET",
          credentials: "include",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        };
      },
      providesTags: ["AppointmentsApi"],
    }),
  }),
});

const {
  useListAppointmentsQuery,
} = appointmentsApi;

export { useListAppointmentsQuery };
