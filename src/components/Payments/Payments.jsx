import React, { useEffect, useState } from "react";
import {
  Box,
  CircularProgress,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import DataGrid, {
  Paging,
  Pager,
  FilterRow,
  Column,
  Editing,
} from "devextreme-react/data-grid";
import { useFetchCustomerInvoicesQuery } from "../../redux/api/paymnetsApi";
import { Link } from "react-router-dom";

const InvoicesLine = () => {
  const [updatedInvoices, setUpdatedInvoices] = useState([]);

  const {
    data: invoices,
    isLoading,
    isError,
  } = useFetchCustomerInvoicesQuery();

  console.log("invoices", invoices);
  // console.log("Url", invoices.invoices.hosted_invoice_url);

  const InvoiceActionCell = ({ data }) => {
    return (
      <>
        <Link
          to={data.hosted_invoice_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="contained" color="primary">
            View Invoice
          </Button>
        </Link>
        <Link to={data.invoice_pdf} target="_blank" rel="noopener noreferrer">
          <IconButton color="primary" aria-label="download">
            <DownloadIcon />
          </IconButton>
        </Link>
      </>
    );
  };

  useEffect(() => {
    if (invoices) {
      const processedInvoices = invoices.invoices.map((invoice) => {
        // Get the quantity from the first line item
        const quantity = invoice.lines.data[0]?.quantity ?? "";

        return {
          ...invoice,
          quantity, // Add this new field to the invoice object
        };
      });

      setUpdatedInvoices(processedInvoices);
    }
  }, [invoices]);

  if (isLoading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  if (isError) {
    return (
      <Typography variant="h6" color="error" align="center">
        Error Loading Invoices
      </Typography>
    );
  }

  return (
    <Box width="75%">
      <DataGrid
        dataSource={
          updatedInvoices ? JSON.parse(JSON.stringify(updatedInvoices)) : []
        }
        showBorders={true}
      >
        <Column dataField="number" caption="Invoice Number" />
        <Column dataField="customer_name" caption="Customer Name" />

        {/* Custom Cell Render for Amount Paid */}
        <Column
          dataField="amount_paid"
          caption="Amount Paid"
          cellRender={(data) => `AED ${data.value}`}
        />

        <Column dataField="quantity" caption="Quantity" />
        <Column caption="Actions" cellRender={InvoiceActionCell} />

        <Paging defaultPageSize={10} />
        <Pager
          showPageSizeSelector={true}
          allowedPageSizes={[5, 10, 20]}
          showNavigationButtons={true}
        />
        <FilterRow visible={true} />
      </DataGrid>
    </Box>
  );
};

export default InvoicesLine;
