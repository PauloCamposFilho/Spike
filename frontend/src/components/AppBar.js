import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
// when we try to implement the icon in the script we need to import the icon and all the refences can find by this web https://mui.com/material-ui/material-icons/?query=voll
import SportsVolleyballIcon from "@mui/icons-material/SportsVolleyball";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography
} from "@material-ui/core";
import {
  Stack,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import { useTheme } from "@emotion/react";
import '../style/fonts.scss'

export default function SpikeNavBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(null);
  const [openLocation, setOpenLocation] = useState(null);
  const theme = useTheme();

  
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
    <AppBar
    style={{background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.light})`}}>
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
            sx={{ marginLeft: "8px"}}
            style={{ fontFamily: 'Faster One', fontSize: "2.4rem"}}
          >
            SPIKE!
          </Typography>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Stack direction="row" spcing={2}>
            <Button color="inherit" component={Link} to="/player/1">
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
              Play Areas
            </Button>
            <Button color="inherit" component={Link} to="/ranking">
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
  );

}