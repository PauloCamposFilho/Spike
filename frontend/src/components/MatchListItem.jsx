import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import {
  Stack,
  Avatar,
} from "@mui/material";

export default function MatchListItem (props) {
  const { id, homeTeam, awayTeam, result, playArea } = props

  return (
    <TableRow key={id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell align="left">
        <Stack direction="row" spacing={2}>
          <Avatar
            sx={{ width: 56, height: 56 }}
            alt="Remy Sharp"
            src={homeTeam.picture + `?id=${homeTeam.id}`}
          />
        </Stack>
      </TableCell>
      <TableCell align="left">{homeTeam.name}</TableCell>
      <TableCell align="left">
        <Stack direction="row" spacing={2}>
          <Avatar
            sx={{ width: 56, height: 56 }}
            alt="Remy Sharp"
            src={awayTeam.picture + `?id=${awayTeam.id}`}
          />
        </Stack>
      </TableCell>
      <TableCell align="left">{awayTeam.name}</TableCell>
      <TableCell align="left">{result}</TableCell>
      <TableCell align="left">{playArea.name}</TableCell>
    </TableRow>
  )
}