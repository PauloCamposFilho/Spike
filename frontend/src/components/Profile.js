import React, { useContext, useState } from "react";
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
  TableFooter,
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
import { UserContext } from "../contexts/userContext";
import "../style/Profile.css"

export default function Profile() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(null);
  const [openLocation, setOpenLocation] = useState(null);
  const { state } = useContext(UserContext);
  const { playerData, matchesData } = state.userData;

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
  const getEloRatingColor = () => {
    if (playerData.elo_rating > 1900) {
      return "orange";
    } else if (playerData.elo_rating >= 1500 && playerData.elo_rating <= 1900) {
      return "#C2F26E";
    } else if (playerData.elo_rating >= 1100 && playerData.elo_rating < 1500) {
      return "#5ce647";
    } else {
      return "#1ea4a0";
    }
  };

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
          Player Profiles
        </Typography>
        <div
          style={{
            direction: "row",
            display: "flex",
            height: "800px",
            paddingTop: "40px"
          }}
        >
          {/* use border: "1px solid red" for the frame of <div> or different element */}
          <div
            style={{
              margin:"30px"
            }}
          >
            <Stack direction="row" spacing={2}>
              <Avatar
                sx={{ width: 200, height: 200 }}
                alt="Remy Sharp"
                // src="https://i.pinimg.com/736x/33/06/b8/3306b8156653fea183b5406151c74ded.jpg"
                src={playerData.avatar_picture}
              />
            </Stack>
          </div>
          <div className="table-section">
            <TableContainer component={Paper}>
              <Table style={{ width: "700px" }} aria-label="simple table">
                <TableHead className="table-header">
                  <TableRow >
                    <TableCell>First Name</TableCell>
                    <TableCell>Last Name</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow className="table-row" key="name" sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                    <TableCell component="th" scope="row">
                      {playerData.first_name}
                    </TableCell>
                    <TableCell align="left">{playerData.last_name}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <TableContainer component={Paper} style={ {"margin-top": "30px"} }>
              <Table style={{ width: "700px" }} aria-label="simple table">
                  <TableHead>
                  <TableRow key="elo" sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                    <TableCell component="th" scope="row" ><h3 style={{color: getEloRatingColor(), alignItems: "center", justifyContent: "center", display: "flex"}}>Current Elo Rating: { playerData.elo_rating}</h3></TableCell>
                  </TableRow>
                  </TableHead>
                </Table>
            </TableContainer>

            <TableContainer component={Paper} style={ {"margin-top": "30px"} }>
              <Table style={{ width: "700px" }} aria-label="simple table">
                  <TableHead className="table-header">
                    <TableRow>
                      <TableCell colSpan={5} align="center">Description</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow key="bio" sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                        <TableCell className="table-row" colSpan={5} component="th" scope="row">
                          {playerData.description}
                        </TableCell>
                      </TableRow>
                  </TableBody>
                </Table>
            </TableContainer>

            <TableContainer component={Paper} style={ { "margin-top": "30px" } }>
              <Table style={{ width: "700px" }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell colSpan={5} align="center"><h2>Recent Matches</h2></TableCell>
                  </TableRow>
                  <TableRow className="table-header">
                    <TableCell  style={{"width": "110px"}}  align="left"><h4>Team</h4></TableCell>
                    <TableCell><h4></h4></TableCell>
                    <TableCell style={{ "width": "110px"}} align="left"><h4>Team</h4></TableCell>
                    <TableCell align="left"><h4>Location</h4></TableCell>
                    <TableCell align="left"><h4>Date</h4></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody >
                    {matchesData.map((item, index) => {
                      return (
                        <TableRow className="table-row" key={item.id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                          <TableCell align="left">{item.winner_team_name}</TableCell>
                          <TableCell><strong>defeats</strong></TableCell>
                          <TableCell align="left">{item.other_team_name}</TableCell>
                          <TableCell align="left">{item.play_area_name}</TableCell>
                          <TableCell align="left">{item.created_at}</TableCell>
                        </TableRow>
                      )
                    })}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>
    </div>
  );
}