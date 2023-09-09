import React from "react";

import { TableBody, TableRow, TableCell, IconButton } from "@mui/material";


const highlightText = (text, highlight) => {
  if (!highlight.trim()) {
    return text;
  }
  const regex = new RegExp(`(${highlight})`, 'i');
  return text.replace(regex, match => `<span style="background-color: yellow">${match}</span>`);
};


const TableBodyComponent = ({ rows, columnsToDisplay, actionsConfig, searchQuery }) => (
  <TableBody>
    {rows.map((row, rowIndex) => (
      <TableRow key={rowIndex}>
        {columnsToDisplay.map((column, colIndex) => (
          <TableCell
            key={colIndex}
            sx={{
              width: "10vw",
              height: "5vh",
              border: "0.1vmin solid #00C800",
              backgroundColor: "#FAFBFC",
            }}
          >
             <span dangerouslySetInnerHTML={{ __html: highlightText(row[column]?.toString() || 'N/A', searchQuery) }}></span>
          </TableCell>
        ))}
        <TableCell
          sx={{
            width: "10vw",
            height: "5vh",
            border: "0.1vmin solid #00C800",
            backgroundColor: "#FAFBFC",
          }}
        >
          {actionsConfig.map((action, actionIndex) => {
            if (!action.condition || action.condition(row)) {
              return (
                <IconButton
                  key={actionIndex}
                  onClick={() => action.callback(row)}
                >
                  <action.icon />
                </IconButton>
              );
            }
            return null;
          })}
        </TableCell>
      </TableRow>
    ))}
  </TableBody>
);

export default TableBodyComponent;
