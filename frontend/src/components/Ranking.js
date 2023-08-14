import React, { useContext } from "react";
import SpikeNavBar from "./AppBar";
import {
  Typography,
  TableCell,
} from "@material-ui/core";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  Avatar
} from "@mui/material";
import { UserContext } from "../contexts/UserContext";
import SpikeTable from "./SpikeTable";
import SpikeTableItem from "./SpikeTableItem"

export default function Ranking() {
  const { state } = useContext(UserContext)
  const { teams, playerRankings } = state.userData.rankings;
  const playerArray = playerRankings.map((player, index) => {
    return (
      <SpikeTableItem item={player} key={index} componentLink={`/players/${player.id}`}>
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
      </SpikeTableItem>
    );
  });
  const teamsArray = teams.map((team, index) => {
    return (
      <SpikeTableItem item={team} key={index} componentLink={`/teams/${team.id}`}>
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
      </SpikeTableItem>
    );
  });
  const playerTableHeaders = ["", "First name", "Last name", "Elo Rating"];
  const teamTableHeaders = ["", "Name", "Elo Rating"];
  return (
    <div>
      <SpikeNavBar />
      <div style={{ padding: "80px", "text-align": "center", "margin-top": "30px" }}>
        <Typography variant="h4" component="h2" color="inherit">
          Latest Rankings
        </Typography>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", marginTop: "50px" }}>

          <SpikeTable specialText="Players" headers={playerTableHeaders} children={playerArray} />
          <SpikeTable specialText="Teams" headers={teamTableHeaders} children={teamsArray} />          

        </div>
      </div>
    </div>
  )
}