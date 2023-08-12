
import React, { useState } from "react";
import { Typography } from "@material-ui/core";
import SpikeNavBar from "./AppBar";

import { Link } from "react-router-dom";
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TableCell,
  Paper,
} from "@material-ui/core";
import {
  Stack,
  Button,
  ImageList,
  ImageListItem,
  Menu,
  MenuItem,
  Data,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  Avatar
} from "@mui/material";
import SportsVolleyballIcon from "@mui/icons-material/SportsVolleyball";
import MenuIcon from "@mui/icons-material/Menu";
import { UserContext } from "../contexts/UserContext";

export default function Ranking() {
  const { state } = useContext(UserContext)
  const { teams, playerRankings } = state.userData.rankings;  
  return (
    <div>     
     <SpikeNavBar/>
      <div style={{ padding: "80px", "text-align": "center", "margin-top": "30px" }}>
        <Typography variant="h4" component="h2" color="inherit">
          Latest Rankings
        </Typography>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", marginTop: "50px" }}>

          <Table sx={{ minWidth: 300, maxWidth: 800, display: "inline-table", border: "1px solid lightgrey" }} aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell colSpan={4} align="center"><h2>Players</h2></TableCell>
              </TableRow>
              <TableRow>
                <TableCell></TableCell>
                <TableCell>First name</TableCell>
                <TableCell>Last name</TableCell>
                <TableCell>Elo Rating</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {playerRankings.map((player, index) => {
                return (
                  <TableRow key={index} data-id={player.id}>
                    <TableCell>
                      <Avatar
                        sx={{ width: 60, height: 60 }}
                        alt={`${player.first_name} ${player.last_name}`}
                        // src="https://i.pinimg.com/736x/33/06/b8/3306b8156653fea183b5406151c74ded.jpg"
                        src={player.avatar_picture + `?id=${player.id}`}
                      />
                    </TableCell>
                    <TableCell>{player.first_name}</TableCell>
                    <TableCell>{player.last_name}</TableCell>
                    <TableCell>{player.elo_rating}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>

          <Table sx={{ minWidth: 300, maxWidth: 800, display: "inline-table", border: "1px solid lightgrey" }} aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell colSpan={3} align="center"><h2>Teams</h2></TableCell>
              </TableRow>
              <TableRow>
                <TableCell></TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Elo Rating</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {teams.map((team, index) => {
                return (
                  <TableRow key={index} data-id={team.id}>
                    <TableCell>
                      <Avatar
                        sx={{ width: 60, height: 60 }}
                        alt={`${team.name}`}
                        // src="https://i.pinimg.com/736x/33/06/b8/3306b8156653fea183b5406151c74ded.jpg"
                        src={team.picture + `?id=${team.id}`}
                      />
                    </TableCell>
                    <TableCell>{team.name}</TableCell>
                    <TableCell>{team.elo_rating}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>

        </div>
      </div>
    </div>
  )
}