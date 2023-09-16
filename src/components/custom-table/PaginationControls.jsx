import React from "react";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";

const PaginationControls = ({ currentPage, totalPage, onPageChange }) => {
  return (
    <Pagination
      count={totalPage}
      page={currentPage}
      onChange={(event, page) => {
        onPageChange(page);
      }}
      renderItem={(item) => <PaginationItem {...item} />}
    />
  );
};

export default PaginationControls;
