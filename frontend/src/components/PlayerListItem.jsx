import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import {
  Stack,
  Avatar,
} from "@mui/material";
import {Link} from "react-router-dom";


export default function PlayerListItem (props) {
  const { id, picture, firstName, lastName, elo, isCaptain } = props

  return (
    <TableRow key={id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }} component={Link} to={`/player/${id}`}>
      <TableCell align="left">
        <Stack direction="row" spacing={2}>
          <Avatar
            sx={{ width: 56, height: 56 }}
            alt="Remy Sharp"
            src={picture}
          />
        </Stack>
      </TableCell>
      <TableCell align="left">{firstName}</TableCell>
      <TableCell align="left">{lastName}</TableCell>
      <TableCell align="left">{elo}</TableCell>
      <TableCell align="left">{isCaptain ? '👑' : ''}</TableCell>
    </TableRow>
  )
}