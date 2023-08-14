import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import PlayerListItem from "./PlayerListItem";
import PlayAreaListItem from "./PlayAreaListItem";
import { fetchPlayAreaData } from "../helpers/fetchPlayAreaData";
import SpikeNavBar from "./AppBar";
import { Typography } from "@material-ui/core";
export default function PlayAreaList() {
  const [playAreas, setPlayAreas] = useState([]);

  useEffect(() => {
    fetchPlayAreaData()
      .then((res) => {
        setPlayAreas(res);
      })
      .catch((error) => {
        console.error("Error fetching team data:", error);
      });
  }, []);

  // console.log("players", players)

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <SpikeNavBar />
      <div style={{ padding: "80px" }}>
        <Typography
          variant="h4"
          component="h2"
          color="inherit"
          paddingbottom="10px"
        >
          Play Area List
        </Typography>
        <div
          style={{
            padding: "40px",
            textAlign: "center",
            justifyContent: "center",
            display: "flex",
            height: "90%",
            width: "100%"
          }}
        >
          <TableContainer component={Paper} style={{ "margin-top": "30px" }}>
            <Table style={{ width: "100%" }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell style={{ width: "110px" }} align="left">
                    <h4>Image</h4>
                  </TableCell>
                  <TableCell style={{ width: "110px" }} align="left">
                    <h4>Name</h4>
                  </TableCell>
                  {/* <TableCell style={{ width: "110px" }} align="left">
                    <h4>Description</h4>
                  </TableCell> */}
                  <TableCell align="left" colSpan={2}>
                    <h4>Number of Courts</h4>
                  </TableCell>
                  <TableCell align="left">
                    <h4>Actions</h4>
                  </TableCell>
                  {/* <TableCell align="left"><h4>ELO</h4></TableCell> */}
                </TableRow>
              </TableHead>
              <TableBody>
                {playAreas.map((playArea, index) => {
                  return (
                    <PlayAreaListItem
                      id={playArea.id}
                      image={playArea.image + `?id=${playArea.id}`}
                      name={playArea.name}
                      courtsNumber={playArea.num_courts}
                    />
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
}
