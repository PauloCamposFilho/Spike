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

export default function Matches() {
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
        <Typography variant="h6" component="h2" color="inherit">
          Matches Table
        </Typography>
      </div>
    </div>
  );
}