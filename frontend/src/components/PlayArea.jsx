import React, { useContext, useEffect, useState } from "react";
import { Typography } from "@material-ui/core";
import { useParams, Link } from 'react-router-dom';
import { Stack, Avatar } from "@mui/material";
import { UserContext } from "../contexts/UserContext";
import SpikeNavBar from "./AppBar";
import { fetchCurrentPlayAreaData } from "../helpers/fetchPlayAreaData";
import { TableCell, TableRow, Button } from "@material-ui/core";
import MatchList from "./MatchList";

export default function PlayArea() {
  const { state } = useContext(UserContext);
  const [playAreaData, setPlayAreaData] = useState({
    current_play_area_data: {},
    area_matches_data: []
  })
  const { id } = useParams();

  useEffect(() => {
    fetchCurrentPlayAreaData(id)
      .then(res => {
        setPlayAreaData(res)
        console.log("The State Object:", res);
      })
      .catch(error => {
        console.error('Error fetching team data:', error)
      })
  }, [id]);

  const { teamData } = state;
  return (
    <div>
      <SpikeNavBar />
      <div style={{ padding: "80px" }}>
        <Typography variant="h6" component="h2" color="inherit">
          Volleyball Corts
          <div style={{ border: "1px solid red", width: "100%" }}>
            <iframe
              src={playAreaData.current_play_area_data.embedLink}
              style={{ border: 0, height: "100%", width: "100%" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="googlemap-volleyball-court"
            ></iframe>
          </div>
        </Typography>
        <Typography variant="h6" component="h2" color="inherit">
          {playAreaData.current_play_area_data.name}
        </Typography>
        {/* try to render the play area details by using the table  */}
        <TableRow
          key={id}
          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
        >
          <TableCell align="left">
            <Stack direction="row" spacing={2}>
              <Avatar sx={{ width: 56, height: 56 }} alt="Remy Sharp" src={playAreaData.image} />
            </Stack>
          </TableCell>
          <TableCell align="left">{playAreaData.current_play_area_data.name}</TableCell>
          <TableCell align="left">{playAreaData.current_play_area_data.description}</TableCell>
          <TableCell align="left">{playAreaData.current_play_area_data.courtsNumber}</TableCell>
          <TableCell align="left">
            <Button variant="contained" component={Link} to={`/playarea/${id}`} >Details</Button>
          </TableCell>
          {/* <TableCell align="left">{playAreaData.current_play_area_data.latitude}</TableCell>
          <TableCell align="left">{playAreaData.current_play_area_data.longitude}</TableCell> */}
        </TableRow>
        <MatchList
          title={"Matches"}
          homeTeamId={Number(id)}
          matches={playAreaData.area_matches_data}
        />
      </div>
    </div>
  );
}
