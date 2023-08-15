import React, { useEffect, useState } from "react";
import { CircularProgress, Typography } from "@material-ui/core";
import SpikeNavBar from "./AppBar";
import { fetchMatchesData } from "../helpers/fetchMatchesData";
import MatchList from "./MatchList";
import { Grid } from "@mui/material";

export default function Matches() {
  const [matches, setMatches] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetchMatchesData()
      .then(res => {
        setMatches(res);
      })
      .catch(error => {
        console.error('Error fetching matches data:', error)
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <SpikeNavBar />
      <div style={{ padding: "80px" }}>
        {!isLoading &&
        <Grid container style={{
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Grid item xs={12}>
            <MatchList
              title={"Matches Near You"}
              matches={matches}
              showDetailsButton={true}
            />
          </Grid>
        </Grid>
        }
        {isLoading && <CircularProgress size={300} />}
      </div>
    </div>
  );
}

