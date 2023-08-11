import React, { useContext, useState } from "react";

import { Typography } from "@material-ui/core";
import { Stack, Avatar } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import SpikeNavBar from "./AppBar";
import { UserContext } from "../contexts/userContext";
function createData(name, value) {
  return { name, value };
}

const rows = [
  createData("Full name", "Player Full Name"),
  createData("Description", "Repudiandae quis et. Vel dolorem corporis. Aperiam earum animi."),
  createData("elo_rating", 2011),
  createData("Create at", "2023-08-11T02:10:14.175z"),
  createData("Updated at", "2023-08-11T02:10:14.175z"),
];
export default function Profile() {
  const { state } = useContext(UserContext);
  const { playerData, matchesData } = state.userData;

  return (
    <div style={{display:"flex",justifyContent:"center"}}>
      <SpikeNavBar/>
      <div style={{ padding: "80px"}}>
        <Typography variant="h4" component="h2" color="inherit" paddingbottom="10px">
          Player Profiles
        </Typography>
        <div
          style={{
            direction: "row",
            display: "flex",
            height: "800px",
            paddingTop: "40px"
          }}
        >
          {/* use border: "1px solid red" for the frame of <div> or different element */}
          <div
            style={{
              margin:"30px"
            }}
          >
            <Stack direction="row" spacing={2}>
              <Avatar
                sx={{ width: 200, height: 200 }}
                alt="Remy Sharp"
                // src="https://i.pinimg.com/736x/33/06/b8/3306b8156653fea183b5406151c74ded.jpg"
                src={playerData.avatar_picture}
              />
            </Stack>
          </div>
          <div>
            <TableContainer component={Paper}>
              <Table style={{ width: "650px" }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>First Name</TableCell>
                    <TableCell>Last Name</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow key="name" sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                    <TableCell component="th" scope="row">
                      {playerData.first_name}
                    </TableCell>
                    <TableCell align="left">{playerData.last_name}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>

            <TableContainer component={Paper} style={ {"margin-top": "30px"} }>
              <Table style={{ width: "650px" }} aria-label="simple table">
                  <TableHead>
                  <TableRow key="elo" sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                    <TableCell component="th" scope="row" ><h3>Current Elo Rating: {playerData.elo_rating}</h3></TableCell>
                  </TableRow>
                  </TableHead>
                </Table>
            </TableContainer>

            <TableContainer component={Paper} style={ {"margin-top": "30px"} }>
              <Table style={{ width: "650px" }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell colSpan={2} align="center">Description</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow key="bio" sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                        <TableCell component="th" scope="row">
                          {playerData.description}
                        </TableCell>
                      </TableRow>
                  </TableBody>
                </Table>
            </TableContainer>

            <TableContainer component={Paper} style={ { "margin-top": "30px" } }>
              <Table style={{ width: "650px" }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell colSpan={4} align="center"><h2>Recent Matches</h2></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={{ "width": "110px"}} align="left"><h4>Team</h4></TableCell>
                    <TableCell><h4></h4></TableCell>
                    <TableCell style={{ "width": "110px"}} align="left"><h4>Team</h4></TableCell>
                    <TableCell align="left"><h4>Location</h4></TableCell>
                    <TableCell align="left"><h4>Date</h4></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                    {matchesData.map((item, index) => {
                      return (
                        <TableRow key={item.id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                          <TableCell align="left">{item.winner_team_name}</TableCell>
                          <TableCell><strong>defeats</strong></TableCell>
                          <TableCell align="left">{item.other_team_name}</TableCell>
                          <TableCell align="left">{item.play_area_name}</TableCell>
                          <TableCell align="left">{item.created_at}</TableCell>
                        </TableRow>
                      )
                    })}
                    {state.matchesData}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
