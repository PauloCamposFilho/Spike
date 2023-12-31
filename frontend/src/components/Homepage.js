import React, { useContext, useState } from "react";
// import Typography from '@material-ui/core/Typography'
// when we try to use the icon tools make sure we install @material-ui/core and @mui/icons-material
import { CircularProgress, Grid, IconButton } from "@material-ui/core";

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
import Scanner from "./QRSCanner";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import PlusButton from "./HomepagePlusButton";
import PlusButtonModal from "./PlusButtonModal";
import { Stack, LinearProgress } from "@mui/material";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import HandshakeRoundedIcon from "@mui/icons-material/HandshakeRounded";
import EmojiEventsRoundedIcon from "@mui/icons-material/EmojiEventsRounded";
import { useTheme } from "@emotion/react";
import "../style/fonts.scss";
import MatchList from "./MatchList";
import { theme } from "./Theme";
import TestScanner from "./QRSCanner";

export default function Homepage() {
  const { state, updateCurrentPlayArea } = useContext(UserContext);
  // const { isLoading } = state.userData.isLoading;
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [isLoading, setLoading] = useState(false);

  const theme = useTheme();
  console.log("theme.palette", theme.palette);
  console.log("theme.palette.secondary.light", theme.palette.secondary.light);

  const checkInHandler = (id) => {
    console.log("Loader ON");
    setLoading(true);
    setTimeout(() => {
      updateCurrentPlayArea(id);
      setLoading(false);
      console.log("Loader OFF");
    }, 800)
  };

  return (
    <div className="home-page">
      <SpikeNavBar />
      <Grid
        container
        spacing={10}
        style={{
          marginTop: "64px",
          flexDirection: "column",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <Grid container item xs={12} style={{ justifyContent: "space-evenly" }}>
          <Grid
            container
            item
            xs={5}
            style={{
              flexDirection: "column",
              padding: "1%",
              alignItems: "center",
              flexWrap: "wrap",
            }}
            component={Paper}
            elevation={2}
          >
            <Grid container item style={{ width: "90%" }} spacing={0}>
              <Grid item container xs={12}>
                <Grid item xs={12}>
                  <Typography
                    variant={"h4"}
                    style={{
                      backgroundImage: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.light})`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    <HomeRoundedIcon color="inherit" fontSize="medium" /> Home
                    Court
                  </Typography>
                </Grid>
              </Grid>
              <Grid item container xs={12} spacing={2}>
                <Grid item xs={12}>
                  <Typography variant={"h3"}>
                    {state.userData.playAreaData.play_area.name}
                  </Typography>
                </Grid>
                <Grid item xs={12} style={{ height: "120%" }}>
                  <iframe
                    src={state.userData.playAreaData.play_area.embedLink}
                    style={{
                      border: 0,
                      height: "100%",
                      width: "100%",
                      borderRadius: "5px",
                    }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="googlemap-volleyball-court"
                  ></iframe>
                </Grid>
                <Grid container item xs={12} spacing={0} style={{ padding: 0 }}>
                  <Grid item xs={10} alignItems="flex-end">
                    <Typography variant="caption">Activity Level</Typography>
                  </Grid>
                  <Grid
                    container
                    item
                    xs={12}
                    alignItems="center"
                    spacing={2}
                    style={{ padding: 0 }}
                  >
                    <Grid item xs={9}>
                      <LinearProgress
                        style={{
                          height: 10,
                          borderRadius: 5,
                          border: "solid",
                          background: theme.palette.primary.light,
                        }}
                        color="primary"
                        variant="determinate"
                        value={80}
                      />
                    </Grid>
                    <Grid item xs={1} style={{ padding: 0 }}>
                      <Typography
                        style={{ fontFamily: "Bangers", fontSize: "1.4rem", }}
                      >
                        Jammin!!
                      </Typography>
                    </Grid>
                    <Grid item xs={2} style={{ padding: 0, paddingLeft: "30px" }}>
                      {!state.userData.currentPlayArea.id ?
                        <Button variant="contained" style={{ backgroundColor: "#dedede", }} onClick={() => checkInHandler(state.userData.playAreaData.play_area.id)}>Check-in</Button>  
                      : <span style={{ color: "green", fontWeight: "bold", paddingLeft: "30px"}}>✔</span>
                      }
                      {isLoading && <CircularProgress />}
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            container
            item
            xs={5}
            component={Paper}
            elevation={2}
            style={{
              flexDirection: "column",
              padding: "1%",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <Grid container item style={{ width: "90%" }} spacing={0}>
              <Grid container item xs={12}>
                <Grid item xs={12}>
                  <Typography
                    variant={"h4"}
                    style={{
                      backgroundImage: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.light})`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    <HandshakeRoundedIcon fontSize="medium" /> Teams
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <WidgetListOfTeams />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          item
          xs={8}
          component={Paper}
          elevation={2}
          style={{
            flexDirection: "column",
            padding: "1%",
            alignItems: "center",
            flexWrap: "wrap",
            marginBottom: "3%",
          }}
        >
          <Grid container item style={{ width: "90%" }} spacing={0}>
            <Grid container item xs={12}>
              <Grid item xs={12}>
                <Typography
                  variant={"h4"}
                  style={{
                    backgroundImage: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.light})`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  <EmojiEventsRoundedIcon fontSize="medium" /> Matches
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <TableContainer>
                <Table aria-label="a dense table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="center">
                        <h2>Team</h2>
                      </TableCell>
                      <TableCell></TableCell>
                      <TableCell align="center">
                        <h2>Team</h2>
                      </TableCell>
                      <TableCell align="center">
                        <h2>Date</h2>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {state.userData.teamsMatchesData.map((row) => (
                      <TableRow
                        key={row.id}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row" align="center">
                          {row.winner_team_name}
                        </TableCell>
                        <TableCell align="center">
                          <strong>defeats</strong>
                        </TableCell>
                        <TableCell align="center">
                          {row.other_team_name}
                        </TableCell>
                        <TableCell align="center">{row.created_at}</TableCell>
                        {/* <TableCell align="right">{row.carbs}</TableCell>
                          <TableCell align="right">{row.protein}</TableCell> */}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
        </Grid>
        <div
          style={{
            position: "fixed",
            bottom: theme.spacing(6),
            right: theme.spacing(6),
          }}
        >
          <PlusButton handleOpen={handleOpen} />
        </div>
      </Grid>
      <PlusButtonModal open={open} onClose={handleClose} />
    </div>
  );
}
