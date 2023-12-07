import { createSelector } from '@reduxjs/toolkit';

// Assuming this selector gets the entire fetchCustomerInvoices response
const selectFetchCustomerInvoicesResult = state => state.paymentsApi.queries['fetchCustomerInvoices(undefined)']?.data;


// Create a selector to calculate the total count and amount
export const selectInvoiceSummary = createSelector(
  [selectFetchCustomerInvoicesResult],
  (invoicesData) => {
    if (!invoicesData?.invoices) return { totalCount: 0, totalAmount: 0 };

    const totalCount = invoicesData.invoices.length;
    const totalAmount = invoicesData.invoices.reduce((sum, invoice) => sum + invoice.amount_paid, 0);
    console.log('totalCount', totalCount);

    return { totalCount, totalAmount };
  }
);

// export const payment = (state) => state.paymentsApi.queries.fetchCustomerInvoices?.data?.invoices || [];    