import React, {useState} from "react";
import { Typography } from "@material-ui/core";
import SpikeNavBar from "./AppBar";
// ###################can use the table method for the Matches #################
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function Matches() {
  return (
    <div>
      <SpikeNavBar/>
      <div style={{padding : "80px"}}>
        <Typography variant="h6" component="h2" color="inherit">
          Matches Table
        </Typography>
      </div>
    </div>
  );
}

