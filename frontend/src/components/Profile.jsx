import React, { useContext, useEffect } from "react";
import {
  IconButton,
  Typography,
} from "@material-ui/core";
import {
  Stack,
  Avatar,
  CircularProgress,
} from "@mui/material";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import SpikeTable from "./SpikeTable";
import SpikeTableItem from "./SpikeTableItem";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { fetchCurrentUserData } from "../helpers/fetchCurrentUserData";
import SpikeNavBar from "./AppBar";
import { UserContext } from "../contexts/UserContext";
import { useTheme } from "@emotion/react";
import "../style/Profile.css";
import MatchList from "./MatchList";



export default function Profile() {
  const { state, updatePlayerData, updateProfileLoadingState } = useContext(UserContext);
  const { id } = useParams();
  const { playerData, matchesData, teamsData, isLoading } = state.userData;
  // const classes = useStyles();
  const theme = useTheme();
  useEffect(() => {
    const getPlayerData = async () => {
      updateProfileLoadingState(true);
      const userData = await fetchCurrentUserData(id);
      console.log("Loading profile:", id)
      updatePlayerData(userData);
      updateProfileLoadingState(false);
      console.log("the state of profile", state);
    };
    getPlayerData()
  }, [id]);

  const generateTeamsArray = (teamData) => {
    return teamData.map((team, index) => {
      return (
        <SpikeTableItem item={team} key={index} componentLink={`/teams/${team.id}`}>
          <TableCell>
            <Avatar
              sx={{ width: 60, height: 60 }}
              alt={`${team.name}`}
              // src="https://i.pinimg.com/736x/33/06/b8/3306b8156653fea183b5406151c74ded.jpg"
              src={team.picture + `?id=${team.id}`}
            />
          </TableCell>
          <TableCell>{team.name}</TableCell>
          <TableCell>{team.elo_rating}</TableCell>
        </SpikeTableItem>
      );
    });
  };
  const teamsArray = generateTeamsArray(teamsData.teams_current);
  const formerTeamsArray = generateTeamsArray(teamsData.teams_history);
  const teamTableHeaders = ["", "Name", "Elo Rating"];

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
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div>
        <SpikeNavBar />
        {/* use border: "1px solid red" for the frame of <div> or different element */}
        <div style={{ padding: "80px" }}>
          {!isLoading &&
            <>
              <Typography
                variant="h4"
                component="h2"
                paddingbottom="10px"
                style={{
                  backgroundImage: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.light})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontFamily: "Fredoka"
                }}
              >
                {`${playerData.first_name} ${playerData.last_name}`}
              </Typography>
              <div
                style={{
                  direction: "row",
                  display: "flex",
                  height: "800px",
                  paddingTop: "40px",
                }}
              >
                <div
                  style={{
                    margin: "30px",
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
                <div className="table-section" >
                  <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                      <TableHead className="table-header">
                        <TableRow style={{ background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.light})`}}>
                          <TableCell color="white">First Name</TableCell>
                          <TableCell color="white">Last Name</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <TableRow
                          className="table-row"
                          key="name"
                          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                        >
                          <TableCell component="th" scope="row">
                            {playerData.first_name}
                          </TableCell>
                          <TableCell align="left">{playerData.last_name}</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <TableContainer
                    component={Paper}
                    style={{ "margin-top": "30px" }}
                  >
                    <Table style={{ width: "100%" }} aria-label="simple table">
                      <TableHead>
                        <TableRow
                          key="elo"
                          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                        >
                          <TableCell component="th" scope="row">
                            <h3
                              style={{
                                color: getEloRatingColor(),
                                alignItems: "center",
                                justifyContent: "center",
                                display: "flex",
                              }}
                            >
                              Current Elo Rating: {playerData.elo_rating}
                            </h3>
                          </TableCell>
                        </TableRow>
                      </TableHead>
                    </Table>
                  </TableContainer>

                  <TableContainer
                    component={Paper}
                    style={{ "margin-top": "30px" }}
                  >
                    <Table style={{ width: "100%" }} aria-label="simple table">
                      <TableHead className="table-header">
                        <TableRow style={{ background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.light})`}}>
                          <TableCell colSpan={5} color="white">
                            Description
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <TableRow
                          key="bio"
                          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                        >
                          <TableCell
                            className="table-row"
                            colSpan={5}
                            component="th"
                            scope="row"
                          >
                            {playerData.description}
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <SpikeTable specialText="Current Teams" headers={teamTableHeaders} children={teamsArray} />
                  <MatchList
                    title={"Recent Matches"}
                    homeTeamId={Number(id)}
                    matches={matchesData}
                    showDetailsButton={true}
                  />
                  {formerTeamsArray.length > 0 &&
                    <SpikeTable specialText="Former Teams" headers={teamTableHeaders} children={formerTeamsArray} />
                  }
                  {/* <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      padding: "16px",
                      border: "2px solid yellow",
                    }}
                  >
                    <IconButton
                      size="medium"
                      edge="start"
                      color="inherit"
                      aria-label="logo"
                    >
                    </IconButton>
                  </div> */}
                </div>
              </div>
            </>
          }
          {isLoading && <CircularProgress size={300} />}
        </div>
      </div>
    </div>
  );
}
