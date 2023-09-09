import React from 'react';
import { TableHead, TableRow, TableCell } from '@mui/material';

const TableHeader = ({ headers, onHeaderClick }) => (
  <TableHead>
    <TableRow>
      {headers.map((header, index) => (
        <TableCell
          key={index}
          sx={{backgroundColor:'#171B2A', color:'white', border: '0.1vmin solid #00C800', width:'10vw', height:'4vh'}}
          onClick={() => onHeaderClick(header)}
        >
          {header ? header.toUpperCase() : ''}
        </TableCell>
      ))}
      <TableCell sx={{backgroundColor:'#171B2A', color:'white' }}>Actions</TableCell>
    </TableRow>
  </TableHead>
);

export default TableHeader;
