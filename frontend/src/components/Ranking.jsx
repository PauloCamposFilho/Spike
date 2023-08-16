import React, { useContext, useEffect, useState } from "react";
import SpikeNavBar from "./AppBar";
import { Typography, TableCell, CircularProgress } from "@material-ui/core";
import { Table, TableHead, TableBody, TableRow, Avatar } from "@mui/material";
import { UserContext } from "../contexts/UserContext";
import { fetchRankingData } from "../helpers/fetchRankingData";
import SpikeTable from "./SpikeTable";
import SpikeTableItem from "./SpikeTableItem";
import "../style/Ranking.css";
import { useTheme } from "@emotion/react";

export default function Ranking() {
  const tableStyle = {
    borderCollapse: "collapse",
    width: "100%",
    border: "1px solid #ddd",
    borderRadius: "10px",
  };

  const cellStyle = {
    padding: "10px",
    textAlign: "center",
    border: "1px solid #ddd",
  };

  const headerCellStyle = {
    ...cellStyle,
    background: "#f2f2f2",
    fontWeight: "bold",
  };

  const { state, updateRankingState } = useContext(UserContext);
  const { teams, playerRankings } = state.userData.rankings;
  const [isLoading, setLoading] = useState(true);
  const theme = useTheme();
  useEffect(() => {
    const updateRanking = async () => {
      setLoading(true);
      const rankingData = await fetchRankingData();
      updateRankingState(rankingData);
      setLoading(false);
    };
    updateRanking();
  }, []);

  const playerArray = playerRankings.map((player, index) => {
    return (
      <SpikeTableItem
        item={player}
        key={index}
        componentLink={`/player/${player.id}`}
      >
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
      <SpikeTableItem
        item={team}
        key={index}
        componentLink={`/teams/${team.id}`}
      >
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
      <div
        style={{
          padding: "80px",
          "text-align": "center",
          "margin-top": "30px",
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          color="#FAFAFA"
          fontFamily="Fredoka"
          align="left"
          style={{
            paddingBottom: "10px",
            background: "-webkit-linear-gradient(left, #3498db, #e91e63)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Latest Rankings
        </Typography>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: "50px",
            
          }}
        >
          {!isLoading && (
            <>
              <SpikeTable
                specialText="Players"
                headers={playerTableHeaders}
                children={playerArray}
              />
              <SpikeTable
                
                specialText="Teams"
                headers={teamTableHeaders}
                children={teamsArray}
              />
            </>
          )}
          {isLoading && <CircularProgress />}
        </div>
      </div>
    </div>
  );
}
