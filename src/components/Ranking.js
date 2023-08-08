import React from "react";

import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import SportsVolleyballIcon from "@mui/icons-material/SportsVolleyball";
import MenuIcon from "@mui/icons-material/Menu";

export default function Ranking() {
  return (
    <div>
      <AppBar>
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="logo"
            >
              <SportsVolleyballIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="h2"
              color="inherit"
              sx={{ marginLeft: "8px" }}
            >
              SPIKE!
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
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