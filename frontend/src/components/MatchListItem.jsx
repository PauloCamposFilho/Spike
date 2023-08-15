import { Link } from "react-router-dom"
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import {
  Stack,
  Avatar,
  Button
} from "@mui/material";

export default function MatchListItem(props) {
  const { id, homeTeam, awayTeam, result, playArea, showDetailsButton } = props

  return (
    <TableRow key={id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell align="left" component={Link} to={`/teams/${homeTeam.id}`}>
        <Stack direction="row" spacing={2}>
          <Avatar
            sx={{ width: 56, height: 56 }}
            alt="Remy Sharp"
            src={homeTeam.picture + `?id=${homeTeam.id}`}
          />
        </Stack>
      </TableCell>
      <TableCell align="left" component={Link} to={`/teams/${homeTeam.id}`}>{homeTeam.name}</TableCell>
      <TableCell align="left" component={Link} to={`/teams/${awayTeam.id}`}>
        <Stack direction="row" spacing={2}>
          <Avatar
            sx={{ width: 56, height: 56 }}
            alt="Remy Sharp"
            src={awayTeam.picture + `?id=${awayTeam.id}`}
          />
        </Stack>
      </TableCell>
      <TableCell align="left" component={Link} to={`/teams/${awayTeam.id}`}>{awayTeam.name}</TableCell>
      <TableCell align="left">{result}</TableCell>
      <TableCell align="left">{playArea.name}</TableCell>
      {showDetailsButton &&
        <TableCell align="left">
          <Button style={{background:""}} variant="contained" component={Link} to={`/match/${id}`} >Details</Button>
        </TableCell>
      }
    </TableRow>
  )
}