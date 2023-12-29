// import React, { useEffect, useState } from "react";
// import {
//   Box,
//   Card,
//   CardContent,
//   CircularProgress,
//   Typography,
//   Button,
//   IconButton,
//   Grid,
// } from "@mui/material";
// import DownloadIcon from "@mui/icons-material/Download";
// import DataGrid, {
//   Paging,
//   Pager,
//   FilterRow,
//   Column,
// } from "devextreme-react/data-grid";
// import { useFetchCustomerInvoicesQuery } from "../../redux/api/paymnetsApi";
// import { Link } from "react-router-dom";

// const InvoicesLine = () => {
//   const [updatedInvoices, setUpdatedInvoices] = useState([]);

//   const {
//     data: invoices,
//     isLoading,
//     isError,
//   } = useFetchCustomerInvoicesQuery();

//   const InvoiceActionCell = ({ data }) => {
//     return (
//       <>
//         <Link
//           to={data.hosted_invoice_url}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Button variant="contained" color="primary" sx={{ width: "4" }}>
//             View Invoice
//           </Button>
//         </Link>
//         <Link to={data.invoice_pdf} target="_blank" rel="noopener noreferrer">
//           <IconButton color="primary" aria-label="download">
//             <DownloadIcon />
//           </IconButton>
//         </Link>
//       </>
//     );
//   };

//   useEffect(() => {
//     if (invoices) {
//       const processedInvoices = invoices.invoices.map((invoice) => {
//         const quantity = invoice.lines.data[0]?.quantity ?? "";
//         return { ...invoice, quantity };
//       });
//       setUpdatedInvoices(processedInvoices);
//     }
//   }, [invoices]);

//   if (isLoading) {
//     return (
//       <Box
//         display="flex"
//         justifyContent="center"
//         alignItems="center"
//         height="100vh"
//       >
//         <CircularProgress />
//       </Box>
//     );
//   }

//   if (isError) {
//     return (
//       <Typography variant="h6" color="error" align="center">
//         Error Loading Invoices
//       </Typography>
//     );
//   }

//   return (
//     <Grid container spacing={2} justifyContent="space-between">
//       <Grid item xs={12} md={10} lg={8}>
//         <Card>
//           <CardContent>
//             <DataGrid
//               dataSource={
//                 updatedInvoices
//                   ? JSON.parse(JSON.stringify(updatedInvoices))
//                   : []
//               }
//               showBorders={true}
//               columnAutoWidth={true}
//               wordWrapEnabled={true}
//             >
//               <Column dataField="number" caption="Invoice Number" />
//               <Column dataField="customer_name" caption="Customer Name" />
//               <Column
//                 dataField="amount_paid"
//                 caption="Amount Paid"
//                 cellRender={(data) => `AED ${data.value}`}
//               />
//               <Column dataField="quantity" caption="Quantity" />
//               <Column caption="Actions" cellRender={InvoiceActionCell} />
//               <Paging defaultPageSize={10} />
//               <Pager
//                 showPageSizeSelector={true}
//                 allowedPageSizes={[5, 10, 20]}
//                 showNavigationButtons={true}
//               />
//               <FilterRow visible={true} />
//             </DataGrid>
//           </CardContent>
//         </Card>
//       </Grid>
//     </Grid>
//   );
// };

// export default InvoicesLine;

import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CircularProgress,
  Typography,
  Button,
  IconButton,
  Grid,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Pagination,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import { useFetchCustomerInvoicesQuery } from "../../redux/api/paymnetsApi";
import { Link } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: "#00C800",
      contrastText: "#fff",
    },
  },
});

const InvoicesLine = () => {
  const [updatedInvoices, setUpdatedInvoices] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const {
    data: invoices,
    isLoading,
    isError,
  } = useFetchCustomerInvoicesQuery();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const InvoiceActionCell = ({ data }) => {
    return (
      <>
        <Link
          to={data.hosted_invoice_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <ThemeProvider theme={theme}>
            <Button variant="contained" color="primary" sx="4">
              View Invoice
            </Button>
          </ThemeProvider>
        </Link>
        <Link to={data.invoice_pdf} target="_blank" rel="noopener noreferrer">
          <ThemeProvider theme={theme}>
            <IconButton color="primary" aria-label="download">
              <DownloadIcon />
            </IconButton>
          </ThemeProvider>
        </Link>
      </>
    );
  };

  useEffect(() => {
    if (invoices) {
      const processedInvoices = invoices.invoices.map((invoice) => {
        const quantity = invoice.lines.data[0]?.quantity ?? "";
        return { ...invoice, quantity };
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
    <Grid container spacing={2} justifyContent="space-between">
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Invoice Number</TableCell>
                    <TableCell>Customer Name</TableCell>
                    <TableCell>Amount Paid</TableCell>
                    <TableCell>Quantity</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {updatedInvoices
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((invoice) => (
                      <TableRow key={invoice.id}>
                        <TableCell>{invoice.number}</TableCell>
                        <TableCell>{invoice.customer_name}</TableCell>
                        <TableCell>AED {invoice.amount_paid}</TableCell>
                        <TableCell>{invoice.quantity}</TableCell>
                        <TableCell>
                          <InvoiceActionCell data={invoice} />
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Pagination
              count={Math.ceil(updatedInvoices.length / rowsPerPage)}
              page={page}
              onChange={handleChangePage}
              rowsPerPage={rowsPerPage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
            />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default InvoicesLine;
