import React, { useContext, useState } from "react";
// import Typography from '@material-ui/core/Typography'
// when we try to use the icon tools make sure we install @material-ui/core and @mui/icons-material
import { CircularProgress, IconButton } from "@material-ui/core";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { UserContext } from "../contexts/UserContext";
import SpikeNavBar from "./AppBar";
import WidgetListOfTeams from "./WidgetListOfTeams";
import QRScanner, { Test } from "./QRSCanner";
import Scanner from "./QRSCanner";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import PlusButton from "./HomepagePlusButton";
import PlusButtonModal from "./PlusButtonModal";

export default function Homepage() {
  const { state } = useContext(UserContext);
  const { isLoading } = state.userData.teamsData;
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <SpikeNavBar />
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
          gap: "80px",
        }}
      >
        <div style={{ border: "1px solid red", width: "100%" }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2602.332284251036!2d-122.94344676087555!3d49.289048300000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548679f393721d0f%3A0x361aacc5ca2c032d!2sVolleyball%20BC!5e0!3m2!1sen!2sca!4v1691617114859!5m2!1sen!2sca"
            style={{ border: 0, height: "100%", width: "100%" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="googlemap-volleyball-court"
          ></iframe>
        </div>

        <div style={{ border: "1px solid green", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
          < WidgetListOfTeams />
        </div>
      </div>
      <div style={{ border: "1px solid green", width: "100%", minHeight: 200, display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
        {!isLoading &&
        <>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell align="right"></TableCell>
                <TableCell></TableCell>
                <TableCell align="right">Date</TableCell>
                {/* <TableCell align="right">Result</TableCell>
                <TableCell align="right">Date</TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {state.userData.teamsMatchesData.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">{row.winner_team_name}</TableCell>
                  <TableCell align="right"><strong>defeats</strong></TableCell>
                  <TableCell align="right">{row.other_team_name}</TableCell>
                  <TableCell align="right">{row.created_at}</TableCell>
                  {/* <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell> */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "right",
            padding: "16px",
          }}
        >
        <PlusButton handleOpen={handleOpen} />

        </div>
        </>
        }
        {isLoading && <CircularProgress/>}
      </div>

      <PlusButtonModal 
        open={open}
        onClose={handleClose}
      />

    </div>
  );
}
