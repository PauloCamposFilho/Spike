import React, { useState } from "react";
import { Link } from "react-router-dom";
// import Typography from '@material-ui/core/Typography'
// when we try to use the icon tools make sure we install @material-ui/core and @mui/icons-material
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";

import {
  Stack,
  Button,
  ImageList,
  ImageListItem,
  Menu,
  MenuItem,
  Data,
} from "@mui/material";
// when we try to implement the icon in the script we need to import the icon and all the refences can find by this web https://mui.com/material-ui/material-icons/?query=voll
import SportsVolleyballIcon from "@mui/icons-material/SportsVolleyball";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { DataGrid } from "@mui/x-data-grid";
import MenuIcon from "@mui/icons-material/Menu";
import QrCodeIcon from "@mui/icons-material/QrCode";

import NavBar from "./NavBar";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "Team",
    headerName: "Team",
    type: "string",
    width: 90,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

const tablerows = [
  { id: 1, lastName: "Snow", firstName: "Jon", Team: "kitsilano" },
  { id: 2, lastName: "Lannister", firstName: "Cersei", Team: "kitsilano" },
  { id: 3, lastName: "Lannister", firstName: "Jaime", Team: "kitsilano" },
  { id: 4, lastName: "Stark", firstName: "Arya", Team: "kitsilano" },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", Team: "kitsilano" },
  { id: 6, lastName: "Melisandre", firstName: "Andrew", Team: "kitsilano" },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", Team: "kitsilano" },
  { id: 8, lastName: "Frances", firstName: "Rossini", Team: "kitsilano" },
  { id: 9, lastName: "Roxie", firstName: "Harvey", Team: "kitsilano" },
];

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Kistlino Team 1", "NorthVan Team 2", "18:25", "L", "2023/08/09"),
  createData("Kistlino Team 4", "NorthVan Team 1", "25:16", "W", "2023/08/09"),
  createData("Kistlino Team 5", "Richmond Team 1", "19:25", "L", "2023/08/09"),
  createData("Kistlino Team 2", "Coquitlam Team 2", "25:14", "W", "2023/08/09"),
  createData("Kistlino Team 3", "Richmond Team 3", "25:20", "W", "2023/08/09"),
];

export default function Homepage() {
  
  return (
    <div>
      <NavBar />
            {/* the iframe src hasn't put into the right api to render the google map */}
      <div
        style={{
          // border:"2px solid yellow",
          width: "100%",
          height: "500px",
          marginTop: "64px",
          display: "flex",
          flexDirection: "row",
          padding: "40px",
          gap: "80px",
        }}
      >
        <div style={{ border: "1px solid red", width: "100%" }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2602.332284251036!2d-122.94344676087555!3d49.289048300000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548679f393721d0f%3A0x361aacc5ca2c032d!2sVolleyball%20BC!5e0!3m2!1sen!2sca!4v1691617114859!5m2!1sen!2sca"
            style={{ border: 0, height: "100%", width: "100%" }}
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="googlemap-volleyball-court"
          ></iframe>
        </div>

        <div style={{ border: "1px solid green", width: "100%" }}>
          <div style={{ height: 400, width: "100%" }}>
            <DataGrid
              rows={tablerows}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 5 },
                },
              }}
              pageSizeOptions={[5, 10]}
              checkboxSelection
            />
          </div>
        </div>
      </div>
      <div style={{ border: "1px solid yallow", width: "100%" }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell align="right">Oppenent</TableCell>
                <TableCell align="right">Score</TableCell>
                <TableCell align="right">Result</TableCell>
                <TableCell align="right">Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            padding: "16px",
          }}
        >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
            component={Link}
            to="/"
          >
            <QrCodeIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}
