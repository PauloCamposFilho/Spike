import React, { useContext, useEffect } from "react";
import { Typography } from "@material-ui/core";
import { useParams } from "react-router-dom";
import { Stack, Avatar, TableRow } from "@mui/material";
import { UserContext } from "../contexts/UserContext";
import { fetchPlayAreaData } from "../helpers/fetchPlayAreaData";
import ProfileDetails from "./ProfileDetails";
import PlayerList from "./PlayerList";
import SpikeNavBar from "./AppBar";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Paper from "@mui/material/Paper";

export default function PlayArea() {
  const { state, updatePlayAreaData } = useContext(UserContext);
  const { id } = useParams();
  const play_areas_data = state.userData.play_areas_data;
  
 
  // console.log("playarea", state);

  const { fetchPlayAreaData } = state;
  return (
    <div>
      <SpikeNavBar />
      <div style={{ padding: "80px" }}>
        <Typography variant="h6" component="h2" color="inherit">
          Volleyball Corts
          {/* <div style={{ border: "1px solid red", width: "100%" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2602.332284251036!2d-122.94344676087555!3d49.289048300000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548679f393721d0f%3A0x361aacc5ca2c032d!2sVolleyball%20BC!5e0!3m2!1sen!2sca!4v1691617114859!5m2!1sen!2sca"
              style={{ border: 0, height: "100%", width: "100%" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="googlemap-volleyball-court"
            ></iframe>
          </div> */}
        </Typography>
        {/* <TableContainer component={Paper} style={ { "margin-top": "30px" } }>
            <Table style = {{width: "90"}} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
            </Table>
        </TableContainer> */}
      </div>
    </div>
  );
}
