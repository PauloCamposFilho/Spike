import React, {useState} from "react";
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
import {
  Stack,
  Button,
  ImageList,
  ImageListItem,
  Menu,
  MenuItem,
  Data,
} from "@mui/material";
import SportsVolleyballIcon from "@mui/icons-material/SportsVolleyball";
import MenuIcon from "@mui/icons-material/Menu";

export default function Ranking() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(null);
  const [openLocation, setOpenLocation] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event, setOpen) => {
    console.log(event);
    setOpenMenu(false);
    setOpenLocation(false);
    setAnchorEl(event.target);
    setOpen(true);
  };
  const handleClose = () => {
    setOpenMenu(false);
    setOpenLocation(false);
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
                onClick={(event) => handleClick(event, setOpenLocation)}
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
            {anchorEl && (
              <Menu
                id="location-resources"
                anchorEl={anchorEl}
                open={openLocation}
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
            )}
            <IconButton
              id="nav-menu"
              style={{ marginRight: "8px" }}
              color="inherit"
              onClick={(event) => handleClick(event, setOpenMenu)}
              aria-controls={open ? "menu-resources" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <MenuIcon />
            </IconButton>
            {anchorEl && (
              <Menu
                id="menu-resources"
                anchorEl={anchorEl}
                open={openMenu}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby2": "nav-menu",
                }}
              >
                <MenuItem onClick={handleClose} component={Link} to="/login">
                  Login 123
                </MenuItem>
              </Menu>
            )}
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