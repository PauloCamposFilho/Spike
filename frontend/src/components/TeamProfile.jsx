import React, { useContext, useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { CircularProgress, Typography } from "@material-ui/core";
import { Stack, Avatar } from "@mui/material";
import { UserContext } from "../contexts/UserContext";
import { fetchTeamData } from "../helpers/fetchTeamData";
import ProfileDetails from "./ProfileDetail";
import PlayerList from "./PlayerList";
import SpikeNavBar from "./AppBar";
import MatchList from "./MatchList";
import '../style/fonts.scss'

export default function TeamProfile () {
  const { state, updateTeamData } = useContext(UserContext);
  const { id } = useParams();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchTeamData(id)
      .then(res => {
        updateTeamData(res);
      })
      .catch(error => {
        console.error('Error fetching team data:', error)
      })
      .finally(() => {
        setLoading(false);
      })
  }, [id]);

  console.log("teams page state:", state);

  const { teamData } = state;

  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <SpikeNavBar/>
      <div style={{ padding: "80px"}}>
        {!isLoading &&
        <>
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
        showDetailsButton={true}
        homeTeamId={Number(id)}
        matches={teamData.teamMatchesData.matches}
        />
        </>
        }
        {isLoading && <CircularProgress size={300}/>}
      </div>
    </div>
  );
};