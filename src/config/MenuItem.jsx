import React from 'react';
import { Typography } from "@mui/material";
import { NavLink } from 'react-router-dom';

const MenuItem = ({ label, navLink }) => {
  return (
    <NavLink to={navLink}>
      <Typography
        sx={{
          width: "100%",
          height: "8vmin",
          borderBottom: "0.2vmin solid #171B2A",
          color:'#737791',
          fontSize:'3vmin',
          display:'flex',
          alignItems:'center',
          justifyContent:'center',
          '&:hover' : {
              color:'#00C800',
              borderLeft:'0.5vmin solid #00C800',
              cursor:'pointer'
          }
        }}
      >
        {label}
      </Typography>
    </NavLink>
  );
}

export default MenuItem;
