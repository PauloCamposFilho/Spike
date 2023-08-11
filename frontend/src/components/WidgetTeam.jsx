import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import {
  Stack,
  Avatar,
} from "@mui/material";

export default function WidgetTeam (props) {
  const { team, playerData } = props
  return (
    <TableRow key={team.team.id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell align="left">
        <Stack direction="row" spacing={2}>
          <Avatar
            sx={{ width: 56, height: 56 }}
            alt="Remy Sharp"
            src={team.team.picture}
          />
        </Stack>
      </TableCell>
      <TableCell align="left">{team.team.name}</TableCell>
      <TableCell align="left">{team.team.elo_rating}</TableCell>
      <TableCell align="left">{playerData.id === team.team.captain_id ? '👑' : ''}</TableCell>
      <TableCell align="left">{team.team.created_at}</TableCell>
    </TableRow>
  )
}