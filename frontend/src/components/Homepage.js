import React, { useState } from "react";
import { Link } from "react-router-dom";
// import Typography from '@material-ui/core/Typography'
// when we try to use the icon tools make sure we install @material-ui/core and @mui/icons-material
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
} from "@mui/material";
// when we try to implement the icon in the script we need to import the icon and all the refences can find by this web https://mui.com/material-ui/material-icons/?query=voll
import SportsVolleyballIcon from "@mui/icons-material/SportsVolleyball";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MenuIcon from "@mui/icons-material/Menu";

export default function Homepage() {
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
            {/* #### line 31 to 46 still been testing  */}
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Stack direction="row" spcing={2}>
              <Button color="inherit">Profile</Button>
              <Button color="inherit">Matches</Button>
              <Button
                color="inherit"
                id="location-button"
                onClick={handleClick}
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                Location
              </Button>
              <Button color="inherit">Ranking</Button>
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
      {/* the iframe src hasn't put into the right api to render the google map */}
      <div
        style={{
          // border:"2px solid yellow",
          width: "100%",
          height: "500px",
          marginTop: "64px",
          display: "flex",
          flexDirection: "row",
          padding: "40px",
          gap:"80px"
        }}
      >
        <div style={{border: "1px solid red",width:"100%"}}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41658.240961923635!2d-122.82476776687012!3d49.264267865665076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54867f336a5199bb%3A0x8593ed7b2ecba9d7!2sCoquitlam%20Centre!5e0!3m2!1sen!2sca!4v1691546604082!5m2!1sen!2sca"
            style={{ border: 0, height:"100%", width: "100%"}}
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="googlemap-coquitlam-center"
          ></iframe>
        </div>

        <div style={{border: "1px solid green",width:"100%"}}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41658.240961923635!2d-122.82476776687012!3d49.264267865665076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54867f336a5199bb%3A0x8593ed7b2ecba9d7!2sCoquitlam%20Centre!5e0!3m2!1sen!2sca!4v1691546604082!5m2!1sen!2sca"
            style={{ border: 0, height:"100%" , width: "100%"}}
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="googlemap-coquitlam-center"
          ></iframe>

        </div>
      </div>
    </div>
  );
}

