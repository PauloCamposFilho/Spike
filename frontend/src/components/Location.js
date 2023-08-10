import React, { useState } from "react";
import { Link } from "react-router-dom";
import SportsVolleyballIcon from "@mui/icons-material/SportsVolleyball";
import MenuIcon from "@mui/icons-material/Menu";
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

import {
  Stack,
  Button,
  ImageList,
  ImageListItem,
  Menu,
  MenuItem,
  Data,
} from "@mui/material";

export default function Location() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <AppBar>
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <IconButton
              size="medium"
              edge="start"
              color="inherit"
              aria-label="logo"
              component={Link}
              to="/"
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
            <div style={{ display: "flex", alignItems: "center" }}>
              <Stack direction="row" spcing={2}>
                <Button color="inherit" component={Link} to="/profile">
                  Profile
                </Button>
                <Button color="inherit" component={Link} to="/matches">
                  Matches
                </Button>
                <Button
                  id="location-button"
                  color="inherit"
                  onClick={handleClick}
                  aria-controls={open ? "location-resources" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                >
                  Location
                </Button>
                <Button color="inherit" component={Link} to="ranking">
                  Ranking
                </Button>
                {/* we can add authentication after the data retrievment test is done */}
              </Stack>
              <Menu
                id="location-resources"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "location-button",
                }}
              >
                <MenuItem onClick={handleClose} component={Link} to="/location">
                  Corts
                </MenuItem>
                <MenuItem onClick={handleClose} component={Link} to="/location">
                  Maps
                </MenuItem>
              </Menu>
              <IconButton
                id="nav-menu"
                style={{ marginRight: "8px" }}
                color="inherit"
                onClick={handleClick}
                aria-controls={open ? "menu-resources" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-resources"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "nav-menu",
                }}
              >
                <MenuItem onClick={handleClose} component={Link} to="/login">
                  Login
                </MenuItem>
              </Menu>
            </div>
        </Toolbar>
      </AppBar>
      <div style={{ padding: "80px" }}>
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
