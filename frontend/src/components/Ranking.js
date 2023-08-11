import React from "react";
import { Typography } from "@material-ui/core";
import SpikeNavBar from "./AppBar";

export default function Ranking() {
  return (
    <div>
      <SpikeNavBar/>
      <div style={{padding : "80px"}}>
        <Typography variant="h4" component="h2" color="inherit">
          Elo Ranking System
        </Typography>
      </div>
      <div style={{padding : "80px"}}>
        <Typography variant="h6" component="h2" color="inherit">
          Diagram
        </Typography>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Elo_rating_graph.svg/1920px-Elo_rating_graph.svg.png"
          alt="Elo Rating Diagram"
          style={{ maxWidth: "40%", height: "auto", marginTop: "20px" }}
        />
      </div>
    </div>
  )
}