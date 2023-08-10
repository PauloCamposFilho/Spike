import React from "react";
import { Link } from "react-router-dom";
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
import NavBar from "./NavBar";

export default function Location() {
  return (
    <div>
      <NavBar />
      <div style={{padding : "80px"}}>
        <Typography variant="h6" component="h2" color="inherit">
          Volleyball Corts
        </Typography>
        <Typography variant="h6" component="h2" color="inherit">
          Corts near me
        </Typography>
      </div>
    </div>
  );
}
