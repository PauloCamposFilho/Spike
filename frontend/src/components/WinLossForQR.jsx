
import { useContext } from "react"
import { NewMatchContext } from "../contexts/NewMatchContext"
import { QRCodeGenerator } from "./QRcode";
import { Button, Stack, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";


export default function WinLossForQR ()  {
  const { makeSelection } = useContext(NewMatchContext);
  const theme = useTheme();

  return (
    <Stack direction="column" spacing={2}>
      <Button variant="contained" direction="row" background={theme.palette.primary.main} onClick={() => makeSelection("Result", "1")}>
        <Typography variant="h3">W</Typography>
      </Button>
      <Button variant="contained" direction="row" background={theme.palette.secondary.main} onClick={() => makeSelection("Result", "0")}>
        <Typography variant="h3">L</Typography>
      </Button>
    </Stack>
  )
}