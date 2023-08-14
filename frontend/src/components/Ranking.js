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
import RankingPlayerItem from "./RankingPlayerItem";
import RankingPlayer from "./RankingPlayer";

export default function Ranking() {
  const { state } = useContext(UserContext)
  const { teams, playerRankings } = state.userData.rankings;
  const playerArray = playerRankings.map((player, index) => {
    return (
      <RankingPlayerItem player={player} key={index} />
    );
  })
  return (
    <div>
      <SpikeNavBar />
      <div style={{ padding: "80px", "text-align": "center", "margin-top": "30px" }}>
        <Typography variant="h4" component="h2" color="inherit">
          Latest Rankings
        </Typography>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", marginTop: "50px" }}>

          <RankingPlayer children={playerArray} />            
          

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