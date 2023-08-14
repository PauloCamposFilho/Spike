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
import { CircularProgress } from "@material-ui/core";

export default function WidgetListOfTeams () {
  const { state } = useContext(UserContext);
  const { isLoading } = state.userData.teamsData;
  const playerData = state.userData.playerData;
  const teamsCurrentData = state.userData.teamsData.teams_current;

  console.log("widget", teamsCurrentData)
  console.log("full user data in widget", state)

  return (
    <>
    {!isLoading &&
    <TableContainer>
      <Table style={{ width: "100%" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell colSpan={2} style={{ "width": "110px"}} align="center"><h2>Team</h2></TableCell>
            <TableCell align="center"><h2>ELO</h2></TableCell>
            <TableCell align="center"><h2>Captain</h2></TableCell>
            <TableCell align="center"><h2>Formation</h2></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {teamsCurrentData.map((team, index) => {
              console.log(team)
              return (
                <WidgetTeam
                key={index}
                team={team}
                playerData={playerData}
                />
              )
          })}
        </TableBody>
      </Table>
    </TableContainer>
    }
    {isLoading && <CircularProgress/>}
    </>
  );
}
