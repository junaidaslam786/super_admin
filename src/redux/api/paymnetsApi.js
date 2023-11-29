import { createApi } from "@reduxjs/toolkit/query/react";
import customFetchBase from "./customFetchBase";

export const paymentsApi = createApi({
  reducerPath: "paymentsApi",
  baseQuery: customFetchBase,
  tagTypes: ["Payments"],
  endpoints: (builder) => ({
    fetchCustomerInvoices: builder.query({
      query: () => {
        const token = localStorage.getItem("token");
        return {
          url: "/fetch-customer-invoices",
          method: "GET",
          credentials: "include",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
    }),
    paymentRefund: builder.query({
      query: () => "/payment-refund",
    }),
    paymentRequest: builder.query({
      query: () => "/payment-request",
    }),
  }),
});

const {
  useFetchCustomerInvoicesQuery,
  usePaymentRefundQuery,
  usePaymentRequestQuery,
} = paymentsApi;

export {
  useFetchCustomerInvoicesQuery,
  usePaymentRefundQuery,
  usePaymentRequestQuery,
};
