import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
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
  Avatar,
} from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { UserContext } from "../contexts/UserContext";
import { fetchTeamData } from "../helpers/fetchTeamData";

export default function TeamProfile () {
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

  const { state, updateTeamData } = useContext(UserContext);
  const { id } = useParams();

  useEffect(() => {
    fetchTeamData(id)
      .then(res => {
        updateTeamData(res)
      })
      .catch(error => {
        console.error('Error fetching team data:', error)
      })
  }, [id]);

  console.log("teams page state:", state);
  
  const { teamData } = state;

  console.log("team name exists:", teamData)
  return (
    <div style={{display:"flex",justifyContent:"center"}}>
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
      <div style={{ padding: "80px"}}>
        <Typography variant="h4" component="h2" color="inherit" paddingbottom="10px">
          {teamData.teamInfoData.name}
        </Typography>
        <div
          style={{
            direction: "row",
            display: "flex",
            height: "800px",
            paddingTop: "40px"
          }}
        >
          <div
            style={{
              margin:"30px"
            }}
          >
            <Stack direction="row" spacing={2}>
              <Avatar
                sx={{ width: 200, height: 200 }}
                alt="Remy Sharp"
                src={teamData.teamInfoData.picture}
              />
            </Stack>
          </div>
        </div>
      </div>
    </div>
  );
};