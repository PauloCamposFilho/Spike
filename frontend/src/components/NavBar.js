import { useState } from "react";
import { Link } from "react-router-dom";


import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";

import {
  Stack,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import SportsVolleyballIcon from "@mui/icons-material/SportsVolleyball";

export default function NavBar () {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar>
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <IconButton
            size="large"
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
              color="inherit"
              id="location-button"
              onClick={handleClick}
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              component={Link}
              to="/location"
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
            <MenuItem onClick={handleClose}>Corts</MenuItem>
            <MenuItem onClick={handleClose}>Maps</MenuItem>
          </Menu>
          <IconButton style={{ marginRight: "8px" }} color="inherit">
            <MenuIcon />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  )

}
