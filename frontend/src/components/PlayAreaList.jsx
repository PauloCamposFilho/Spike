import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import PlayAreaListItem from "./PlayAreaListItem";
import { fetchPlayAreaData } from "../helpers/fetchPlayAreaData";
import SpikeNavBar from "./AppBar";
import { CircularProgress, Typography } from "@material-ui/core";
import "../style/Playarea.css";
import "../style/fonts.scss";
import { useTheme } from "@emotion/react";


export default function PlayAreaList() {
  const [playAreas, setPlayAreas] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const theme = useTheme();
  useEffect(() => {
    setLoading(true)
    fetchPlayAreaData()
      .then((res) => {
        setPlayAreas(res);
      })
      .catch((error) => {
        console.error("Error fetching team data:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // console.log("players", players)

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <SpikeNavBar />
      <div
        style={{
          padding: "80px"
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          color="-webkit-linear-gradient(left, #3498db, #e91e63)"
          style={{
            paddingBottom: "10px",
            background: "-webkit-linear-gradient(left, #3498db, #e91e63)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Courts near you
        </Typography>
        {isLoading &&
          <div style={{ display: "flex", width: "100%", justifyContent: "center", alignItems: "center", minHeight: "300px" }}>
            <CircularProgress size={300} />
          </div>
        }
        {!isLoading &&
          <div
            style={{
              padding: "20px",
              textAlign: "center",
              justifyContent: "center",
              display: "flex",
              height: "100%",
              width: "100%",
            }}
          >
            <TableContainer
              component={Paper}
              style={{
                "margin-top": "30px",
                borderRadius: "12px",
                boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Table style={{ minWidth: "800px" }} aria-label="simple table">
                <TableHead className="table-header" style={{ background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.light})` }}>
                  <TableRow>
                    <TableCell style={{ minWidth: "110px", fontFamily: "Fredoka", color: "#FAFAFA" }} align="left" >
                      <h4>Image</h4>
                    </TableCell>
                    <TableCell style={{ width: "110px", fontFamily: "Fredoka", color: "#FAFAFA" }} align="left">
                      <h4>Name</h4>
                    </TableCell>
                    <TableCell style={{ fontFamily: "Fredoka", color: "#FAFAFA" }} align="left" colSpan={2}>
                      <h4>Number of Courts</h4>
                    </TableCell>
                    <TableCell style={{ width: "110px", fontFamily: "Fredoka", color: "#FAFAFA" }} align="center">
                      <h4>Net Height</h4>
                    </TableCell>
                    <TableCell style={{ width: "110px", fontFamily: "Fredoka", color: "#FAFAFA" }} align="center">
                      <h4>Lined</h4>
                    </TableCell>
                    <TableCell style={{ width: "110px", fontFamily: "Fredoka", color: "#FAFAFA" }} align="center">
                      <h4>Public</h4>
                    </TableCell>
                    <TableCell style={{ width: "110px", fontFamily: "Fredoka", color: "#FAFAFA" }} align="center">
                      <h4>Rentals</h4>
                    </TableCell>
                    <TableCell style={{ width: "110px", fontFamily: "Fredoka", color: "#FAFAFA" }} align="center">
                      <h4>Restrooms</h4>
                    </TableCell>
                    <TableCell style={{ fontFamily: "Fredoka", color: "#FAFAFA" }} align="center">
                      <h4>Actions</h4>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {playAreas.map((playArea, index) => {
                    return (
                      <PlayAreaListItem
                        id={playArea.id}
                        image={playArea.image + `${playArea.id}`}
                        name={playArea.name}
                        courtsNumber={playArea.num_courts}
                        playArea={playArea}
                      />
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        }
      </div>
    </div>
  );
}
