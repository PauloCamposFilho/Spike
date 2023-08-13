import React, { useContext, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { Typography } from "@material-ui/core";
import { Stack, Avatar } from "@mui/material";
import { UserContext } from "../contexts/UserContext";
import { fetchTeamData } from "../helpers/fetchTeamData";
import ProfileDetails from "./ProfileDetails";
import PlayerList from "./PlayerList";
import SpikeNavBar from "./AppBar";
import MatchList from "./MatchList";

export default function TeamProfile () {
  const { state, updateTeamData } = useContext(UserContext);
  const { id } = useParams();

  useEffect(() => {
    fetchTeamData(id)
      .then(res => {
        updateTeamData(res)
      })
      .catch(error => {
        console.error('Error fetching team data:', error)
      })
  }, [id]);

  console.log("teams page state:", state);
  
  const { teamData } = state;
  const homeTeamIds = { id }

  return (
    <div style={{display:"flex",justifyContent:"center"}}>
      <SpikeNavBar/>
      <div style={{ padding: "80px"}}>
        <Typography variant="h4" component="h2" color="inherit" paddingbottom="10px">
          {teamData.teamInfoData.name}
        </Typography>
        <Stack direction="row" spacing={2}>
          <Avatar
            sx={{ width: 200, height: 200 }}
            alt="Remy Sharp"
            src={teamData.teamInfoData.picture}
          />
        </Stack>

        <ProfileDetails
        name={teamData.teamInfoData.name}
        elo={teamData.teamInfoData.average_elo_rating}
        description={teamData.teamInfoData.description}
        />
        <PlayerList
        title={"Active Roster"}
        players={teamData.teamCurrentRosterData}
        captainId={teamData.teamInfoData.captain_id}
        />
        <PlayerList
        title={"Retired Players"}
        players={teamData.teamPastPlayersData}
        captainId={teamData.teamInfoData.captain_id}
        />
        <MatchList
        title={"Matches"}
        homeTeamIds={homeTeamIds}
        matches={teamData.teamMatchesData}
        />
      </div>
    </div>
  );
};