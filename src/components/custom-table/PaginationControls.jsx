import React from "react";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";

const PaginationControls = ({ currentPage, totalPages, onNext, onPrevious }) => {
  return (
    <Pagination
      count={totalPages}
      page={currentPage}
      onChange={(event, page) => {
        if (page > currentPage) {
          onNext();
        } else {
          onPrevious();
        }
      }}
      renderItem={(item) => <PaginationItem {...item} />}
    />
  );
};

export default PaginationControls;
