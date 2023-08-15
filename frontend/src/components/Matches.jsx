import React, { useEffect, useState } from "react";
import { CircularProgress, Typography } from "@material-ui/core";
import SpikeNavBar from "./AppBar";
import { fetchMatchesData } from "../helpers/fetchMatchesData";
import MatchList from "./MatchList";

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
        <Typography variant="h6" component="h2" color="inherit">
          Recent Matches
        </Typography>
        {!isLoading &&
          <MatchList
            title={"Matches Near You"}
            matches={matches}
            showDetailsButton={true}
          />
        }
        {isLoading && <CircularProgress size={300} />}
      </div>
    </div>
  );
}

