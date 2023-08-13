import React, { useContext } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { UserContext } from "../contexts/UserContext";
import WidgetTeam from "./WidgetTeam";

export default function WidgetListOfTeams () {
  const { state } = useContext(UserContext);
  const playerData = state.userData.playerData;
  const teamsCurrentData = state.userData.teamsData.teams_current;
  console.log(playerData)
  console.log(teamsCurrentData)

  return (
    <TableContainer component={Paper} style={ { "margin-top": "30px" } }>
      <Table style={{ width: "80%" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell colSpan={5} align="center"><h2>Teams</h2></TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2} style={{ "width": "110px"}} align="left"><h4>Team</h4></TableCell>
            <TableCell align="left"><h4>ELO</h4></TableCell>
            <TableCell align="left"><h4>Captain</h4></TableCell>
            <TableCell align="left"><h4>Formation</h4></TableCell>
          </TableRow>
        </TableHead>
          {teamsCurrentData.map((team, index) => {
              console.log(team)
              return (
                <WidgetTeam 
                team={team}
                playerData={playerData}
                />
              )
          })}
        <TableBody>
        
        </TableBody>
      </Table>
    </TableContainer>
  );
}
