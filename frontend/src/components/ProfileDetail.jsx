import React from "react";
import { Paper, Grid, Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useTheme } from "@emotion/react";


export default function ProfileDetails (props) {
  const theme = useTheme();
  const { name, elo, description } = props;
  
  const Div = styled('div')({
    textAlign: "center",
    padding: 8,
  });
  const getEloRatingColor = () => {
    if (elo > 1900) {
      return "orange";
    } else if (elo >= 1500 && elo <= 1900) {
      return "#C2F26E";
    } else if (elo >= 1100 && elo < 1500) {
      return "#5ce647";
    } else {
      return "#1ea4a0";
    }
  };
  
  return (
  <Box sx={{ flexGrow: 1, }} >
    <Grid container justifyContent={"center"} spacing={2} component={Paper} elevation={3}>
      <Grid item xs={12}>
        <Typography variant="h3" textAlign={'center'} >{name}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h5" textAlign={'center'} style={{ color: getEloRatingColor(),}}>Elo Rating: {elo}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h5" textAlign={'center'} style={{paddingBottom: "20px"}}>{description}</Typography>
      </Grid>
    </Grid>
  </Box>
  )
}