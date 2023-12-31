import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CircularProgress, Typography } from "@material-ui/core";
import { Stack, Avatar } from "@mui/material";
import ProfileDetails from "./ProfileDetail";
import PlayerList from "./PlayerList";
import SpikeNavBar from "./AppBar";
import MatchList from "./MatchList";
import { fetchMatchData } from "../helpers/fetchMatchData";
import PlayArea from "./PlayArea.jsx";
import { useTheme } from "@emotion/react";
export default function Match() {
  const theme = useTheme();
  const [state, updateMatchData] = useState({
    play_area: {},
    winner_team: {
      roster: [],
    },
    other_team: {
      roster: [],
    },
  });
  const { id } = useParams();
  const [isLoading, setLoading] = useState(true);

  console.log("state", state);

  useEffect(() => {
    setLoading(true);
    fetchMatchData(id)
      .then((res) => {
        updateMatchData(res);
        console.log("the match data:", res);
      })
      .catch((error) => {
        console.error("Error fetching match data:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return (
    <div>
      {!isLoading && (
        <div style={{ width: "100%" }}>
          <PlayArea id={state.play_area.id} dontShowMatchList={true} />
        </div>
      )}
      <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <SpikeNavBar />
        {!isLoading && (
          <>      
          <div style={{ display: "flex", justifyContent: "center", direction:"row",margin:"50px"}}>
            <div style={{ paddingLeft:"100px" ,padding: "40px" }}>
              <Typography
                variant="h4"
                component="h2"
                color="inherit"
                paddingbottom="20px"
                style={{
                  backgroundImage: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.light})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {/* {teamData.teamInfoData.name} */}
                {state.winner_team.name}
              </Typography>
              <Stack direction="row" spacing={2}>
                <Avatar
                  sx={{ width: 200, height: 200 }}
                  alt="Remy Sharp"
                  paddingbottom="20px"
                  // src={teamData.teamInfoData.picture}
                  src={
                    state.winner_team.picture + `?id=${state.winner_team.id}`
                  }
                />
              </Stack>
                  
              <ProfileDetails
                // name={teamData.teamInfoData.name}
                name={state.winner_team.name}
                // elo={teamData.teamInfoData.average_elo_rating}
                elo={state.winner_team.average_elo_rating}
                description={state.winner_team.description}
              />
              <PlayerList
                title={"Match Roster"}
                // players={teamData.teamCurrentRosterData}
                players={state.winner_team.roster}
                // captainId={teamData.teamInfoData.captain_id}
                captainId={state.winner_team.captain_id}
              />
            </div>
            <div
              style={{
                padding: "80px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h2>DEFEATS</h2>
            </div>
            <div style={{ padding: "40px" }}>
              <Typography
                variant="h4"
                component="h2"
                color="inherit"
                paddingbottom="10px"
                style={{
                  backgroundImage: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.light})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {/* {teamData.teamInfoData.name} */}
                {state.other_team.name}
              </Typography>
              <div>

              <Stack direction="row" spacing={2} >
                <Avatar
                  sx={{ width: 200, height: 200 }}
                  alt="Remy Sharp"
                  // src={teamData.teamInfoData.picture}
                  src={state.other_team.picture + `?id=${state.other_team.id}`}
                />
              </Stack>
              </div>
                <div>

              <ProfileDetails
                // name={teamData.teamInfoData.name}
                name={state.other_team.name}
                // elo={teamData.teamInfoData.average_elo_rating}
                elo={state.other_team.average_elo_rating}
                description={state.other_team.description}
              />
              <PlayerList
                title={"Match Roster"}
                // players={teamData.teamCurrentRosterData}
                players={state.other_team.roster}
                // captainId={teamData.teamInfoData.captain_id}
                captainId={state.other_team.captain_id}
              />
                </div>
            </div>
          </div>
          </>
        )}
        {isLoading && <CircularProgress size={300} />}
      </div>
    </div>
  );
}
