import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import PlayerListItem from "./PlayerListItem";

export default function PlayerList (props) {
  const { title, players, captainId } = props;

  console.log("players", players)

  return (
    <TableContainer component={Paper} style={ { "margin-top": "30px" } }>
      <Table style={{ width: "80%" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell colSpan={5} align="center"><h2>{title}</h2></TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={3} style={{ "width": "110px"}} align="left"><h4>Player</h4></TableCell>
            <TableCell align="left"><h4>ELO</h4></TableCell>
            <TableCell align="left"><h4>Captain</h4></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {players.map((player, index) => {
              return (
                <PlayerListItem
                id={player.id}
                picture={player.avatar_picture + `?id=${player.id}`}
                firstName={player.first_name}
                lastName={player.last_name}
                elo={player.elo_rating}
                isCaptain={player.id === captainId ? true : false}
                />
              )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
