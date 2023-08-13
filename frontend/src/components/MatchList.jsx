import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import MatchListItem from "./MatchListItem";

export default function MatchList(props) {
  const { title, homeTeamId, matches } = props;
  console.log("matches", matches);
  console.log("homeTeamId", homeTeamId);

  return (
    <TableContainer component={Paper} style={{ "margin-top": "30px" }}>
      <Table style={{ width: "80%" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell colSpan={6} align="center"><h2>{title}</h2></TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2} style={{ "width": "110px" }} align="left"><h4>Home</h4></TableCell>
            <TableCell colSpan={2} style={{ "width": "110px" }} align="left"><h4>Away</h4></TableCell>
            <TableCell align="left"><h4>Result</h4></TableCell>
            <TableCell align="left"><h4>Play Area</h4></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {matches.map((match, index) => {
            let homeTeam, awayTeam, result
            console.log("hometeams", homeTeamId)
            if (homeTeamId === match.winner_team_id) {
              homeTeam = match.winner_team;
              awayTeam = match.other_team;
              result = 'W'
            } else {
              console.log(match.winner_team_id)
              homeTeam = match.other_team;
              awayTeam = match.winner_team;
              result = 'L'
            }
            return (
              <MatchListItem
                id={match.id}
                homeTeam={homeTeam}
                awayTeam={awayTeam}
                result={result}              
                playArea={match.play_area}
              />
            )
            })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}