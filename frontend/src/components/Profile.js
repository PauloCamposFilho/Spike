import React, {useState} from "react";
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
// ###################can use the table method for the Matches #################
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function Matches() {
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
      <div style={{padding : "80px"}}>
        <Typography variant="h6" component="h2" color="inherit">
          Matches Table
        </Typography>
      </div>
    </div>
  );
}