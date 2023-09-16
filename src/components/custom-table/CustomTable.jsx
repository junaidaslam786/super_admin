import React, { useState } from "react";
import PropTypes from "prop-types";
import TableHeader from "./TableHeader";
import TableBodyComponent from "./TableBodyComponent";
import PaginationControls from "./PaginationControls";
import { TextField } from "@mui/material";
import {
  Container,
  Grid,
  Table,
  TableContainer,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";

const CustomTable = ({
  data,
  onPageChange,
  totalPage,
  rowsPerPageOptions = [5, 10, 15, 20],
  defaultRowsPerPage = 10,
  columnsToDisplay = [],
  actionsConfig = [],
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(defaultRowsPerPage);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");

  const filteredData = data
    ? data.filter((item) =>
        columnsToDisplay.some(
          (column) =>
            item[column] &&
            item[column]
              .toString()
              .toLowerCase()
              .includes(searchQuery.toLowerCase())
        )
      )
    : [];
  const lastRowIndex = currentPage * rowsPerPage;
  const firstRowIndex = lastRowIndex - rowsPerPage;

  if (sortColumn) {
    filteredData.sort((a, b) => {
      if (a[sortColumn] < b[sortColumn])
        return sortDirection === "asc" ? -1 : 1;
      if (a[sortColumn] > b[sortColumn])
        return sortDirection === "asc" ? 1 : -1;
      return 0;
    });
  }

  const currentUsers = filteredData.slice(firstRowIndex, lastRowIndex);
  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  return (
    <Container maxWidth="lg" sx={{ marginLeft: "10vw" }}>
      <Grid container spacing={3} className="mb-3">
        <Grid
          item
          sm={6}
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: "2vh",
            width: "100%",
          }}
        >
          <Grid container></Grid>
          <FormControl variant="standard" style={{ margin: 8, minWidth: 120 }}>
            <InputLabel>Show</InputLabel>
            <Select
              value={rowsPerPage}
              onChange={(e) => {
                setRowsPerPage(Number(e.target.value));
                setCurrentPage(1);
              }}
            >
              {rowsPerPageOptions.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          entries
          <Grid
            item
            sm={6}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              marginLeft: "40vw",
            }}
          >
            <TextField
              label="Search"
              variant="outlined"
              size="medium"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1); // Reset currentPage when search query changes
              }}
              sx={{
                width: "10vw",
              }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12}>
          <TableContainer
            sx={{
              height: "100%",
              width: "70vw",
              border: "0.1vmin solid #00C800",
            }}
          >
            <Table size="small" aria-label="custom table">
              <TableHeader
                headers={
                  columnsToDisplay.length
                    ? columnsToDisplay
                    : Object.keys(data[0] || {})
                }
                onHeaderClick={(column) => {
                  if (sortColumn === column) {
                    setSortDirection(sortDirection === "asc" ? "desc" : "asc");
                  } else {
                    setSortColumn(column);
                    setSortDirection("asc");
                  }
                }}
              />
              <TableBodyComponent
                rows={currentUsers}
                columnsToDisplay={columnsToDisplay}
                actionsConfig={actionsConfig}
                searchQuery={searchQuery}
              />
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
      <Grid container spacing={3} className="mt-2">
        <Grid item sm={6}>
          Showing {firstRowIndex + 1} to {Math.min(lastRowIndex, data.length)}
          of {data.length} entries
        </Grid>
        <Grid
          item
          sm={6}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <PaginationControls
            key={currentPage}
            currentPage={currentPage}
            onPageChange={onPageChange}
            totalPage={totalPage}
            onNext={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPage))
            }
            onPrevious={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

CustomTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  rowsPerPageOptions: PropTypes.arrayOf(PropTypes.number),
  defaultRowsPerPage: PropTypes.number,
  columnsToDisplay: PropTypes.arrayOf(PropTypes.string),
  actionsConfig: PropTypes.arrayOf(PropTypes.object),
};

export default CustomTable;
