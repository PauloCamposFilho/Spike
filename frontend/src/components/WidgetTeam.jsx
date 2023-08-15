import { Link } from "react-router-dom"
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { Stack, Avatar } from "@mui/material";
import Typography from '@mui/material/Typography';

export default function WidgetTeam(props) {
  const { team, playerData } = props

  return (
    <TableRow key={team.id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }} component={Link} to={`/teams/${team.id}`}>
      <TableCell align="left">
        <Stack direction="row" spacing={2}>
          <Avatar
            sx={{ width: 56, height: 56 }}
            alt="Remy Sharp"
            src={team.picture}
          />
        </Stack>
      </TableCell>
      <TableCell align="left">
        <Typography variant="body" style={{ textDecoration: 'none' }}>
          {team.name}
        </Typography>
      </TableCell>
      <TableCell align="left">
        <Typography variant="body" style={{ textDecoration: 'none' }}>
          {team.elo_rating}
        </Typography>
      </TableCell>
      <TableCell align="left">
        <Typography variant="body" style={{ textDecoration: 'none' }}>
          {playerData.id === team.captain_id ? '👑' : ''}
        </Typography>
      </TableCell>
      <TableCell align="left">
        <Typography variant="body" style={{ textDecoration: 'none' }}>
          {team.created_at}
        </Typography>
      </TableCell>
    </TableRow>
  )
}