import React, { useContext, useEffect, useState } from "react";
import { Typography } from "@material-ui/core";
import { useParams, Link } from "react-router-dom";
import { Stack, Avatar } from "@mui/material";
import SpikeNavBar from "./AppBar";
import { fetchCurrentPlayAreaData } from "../helpers/fetchPlayAreaData";
import { TableCell, TableRow, Button } from "@material-ui/core";
import MatchList from "./MatchList";
import "../style/Playarea.css";

export default function PlayArea(props) {
  const [playAreaData, setPlayAreaData] = useState({
    current_play_area_data: {
      embedLink: "",
    },
    area_matches_data: [],
  });
  let { id } = useParams();
  console.log("id before error:", id);
  if (props.id) {
    id = props.id;
  }

  useEffect(() => {
    console.log("Did this even run?", id);
    fetchCurrentPlayAreaData(id)
      .then((res) => {
        setPlayAreaData(res);
        console.log("The State Object:", res);
      })
      .catch((error) => {
        console.error("Error fetching team data:", error);
      });
  }, [id]);

  return (
    <div>
      <SpikeNavBar />
      <div style={{ padding: "80px" }}>
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
        </Typography>
        <div style={{ width: "100%", paddingBottom: "20px" }}>
          <iframe
            src={playAreaData.embedLink}
            style={{ border: 0, height: "100%", width: "100%" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="googlemap-volleyball-court"
          ></iframe>
        </div>
        <div style={{ paddingBottom: "20px" }}>
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
            {playAreaData.name}
          </Typography>
          <TableRow
            key={id}
            style={{ width: "100%" }}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell align="left">
              <Stack direction="row" spacing={2}>
                <Avatar
                  sx={{ width: 56, height: 56 }}
                  alt="Remy Sharp"
                  src={playAreaData.image}
                />
              </Stack>
            </TableCell>
            <TableCell align="left">{playAreaData.name}</TableCell>
            <TableCell align="left">{playAreaData.description}</TableCell>
            <TableCell align="left">{playAreaData.courtsNumber}</TableCell>

            {/* <TableCell align="left">{playAreaData.latitude}</TableCell>
          <TableCell align="left">{playAreaData.longitude}</TableCell> */}
          </TableRow>
          <TableRow>
            <TableCell colSpan={4}>
              <span className="tag-text">net-height:
                {playAreaData.net_height === 0 && " male"}
                {playAreaData.net_height === 1 && " female"}
                {playAreaData.net_height === 2 && " adjustable"}
              </span>
              <span className="tag-text">lined:
                {playAreaData.is_lined && " yes"}
                {!playAreaData.is_lined && " no"}
              </span>
              <span className="tag-text">
                {playAreaData.is_public && "public"}
                {!playAreaData.is_public && "private"}
              </span>
              <span className="tag-text">
                {playAreaData.has_rentals && "has rentals"}
                {!playAreaData.has_rentals && "no rentals"}
              </span>
              <span className="tag-text">
                {playAreaData.has_restrooms && "restrooms"}
                {!playAreaData.has_restrooms && "no restrooms"}
              </span>
            </TableCell>
          </TableRow>
        </div>
        {!props.dontShowMatchList && playAreaData.area_matches_data.length > 0 &&
          <MatchList
            title={"Matches"}
            homeTeamId={Number(id)}
            showDetailsButton={true}
            matches={playAreaData.area_matches_data}
            style={{ display: "flex", justifyContent: 'center', alignItems: 'center' }}
          />
        }
      </div>
    </div>
  );
}
