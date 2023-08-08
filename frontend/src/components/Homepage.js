import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import Typography from '@material-ui/core/Typography'
// when we try to use the icon tools make sure we install @material-ui/core and @mui/icons-material
import { AppBar, IconButton, Toolbar, Typography, Drawer, List, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import { Stack, Button, ImageList, ImageListItem,  Menu, MenuItem } from "@mui/material";
// when we try to implement the icon in the script we need to import the icon and all the refences can find by this web https://mui.com/material-ui/material-icons/?query=voll
import SportsVolleyballIcon from "@mui/icons-material/SportsVolleyball";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MenuIcon from "@mui/icons-material/Menu";

export default function Homepage() {
    const[anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
      setAnchorEl(null)
    }
  return (
    <div>
      <AppBar>
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
            <IconButton size="large" edge="start" color="inherit" aria-label="logo">
              <SportsVolleyballIcon />
            </IconButton>
            <Typography variant="h6"  component="h2"  color="inherit"  sx={{ marginLeft: "8px" }}>
              SPIKE!
            </Typography>
            <Stack direction='row' spcing ={2} >
              <Button color= 'inherit'>Profile</Button>
              <Button color= 'inherit'>Matches</Button>
              <Button 
              color= 'inherit' 
              id='location-button' 
              onClick={handleClick} 
              aria-controls={open ? 'location-resourses' :undefined}
              aria-haspopup='true'
              aria-expanded={open ? 'open' :undefined}
              >Location</Button>
              <Button color= 'inherit'>Ranking</Button>
              {/* we can add authentication after the data retrievment test is done */}
              {/* <Button color= 'inherit'> Log in </Button> */}
            </Stack>
            <Menu id='location-resources' anchorEl={anchorEl} open={open} MenuListProps={{'aria-labelledby' : 'location-button',}} onClose = {handleClose}>
              <MenuItem onClick={handleClose}>Corts</MenuItem>
              <MenuItem onClick={handleClose}>Maps</MenuItem>
            </Menu>
        </Toolbar>
      </AppBar>
      {/* the iframe src hasn't put into the right api to render the google map */}
      <div
        style={{
          width: "100%",
          height: "500px",
          marginTop: "20px",
          display: "flex",
          flexDirection: "row",
        }}
      >
          <iframe
            width="90%"
            height="100%"
            style={{ border: 0 }}
            src={`https://www.google.com/maps`}
            allowFullScreen 
          >
            {/* Corts Near Me */}
          </iframe>
          <iframe
            width="90%"
            height="100%"
            style={{ border: 0 }}
            src={`https://www.google.com/maps`}
            allowFullScreen
            margin = "30px"
          >
            {/* Matches */}
          </iframe>
      </div>
    </div>
  );
}
