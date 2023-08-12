import React, { useContext } from "react";
import { Paper, Grid, Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";


export default function ProfileDetails (props) {

  const { name, elo, description } = props
  
  const Div = styled('div')({
    textAlign: "center",
    padding: 8,
  })
  
  return (
  <Box sx={{ flexGrow: 1 }}>
    <Grid container justifyContent={"center"} spacing={2} component={Paper} elevation={3}>
      <Grid item xs={12}>
        <Div >{name}</Div>
      </Grid>
      <Grid item xs={12}>
        <Div>{elo}</Div>
      </Grid>
      <Grid item xs={12}>
        <Div>{description}</Div>
      </Grid>
    </Grid>
  </Box>
  )
}