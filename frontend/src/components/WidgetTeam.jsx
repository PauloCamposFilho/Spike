import { Link } from "react-router-dom"
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { Stack, Avatar } from "@mui/material";
import Typography from '@mui/material/Typography';
import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { Button, CircularProgress } from "@material-ui/core";
import "../style/WidgetTeam.scss";

export default function WidgetTeam(props) {
  const { team, playerData } = props
  const { state, updateCurrentTeam } = useContext(UserContext);
  const [isLoading, setLoading] = useState(false);
  const currentTeam = state.userData.teamsData.checked_in_team;

  console.log("THE STATE:", state);
  console.log("currentTeam:", currentTeam);


  const checkInHandler = () => {
    setLoading(true);
    setTimeout(() => {
      updateCurrentTeam(team.id);
      setLoading(false);
    }, 800);
  };


  return (
    <TableRow key={team.id}>
      <TableCell align="left" component={Link} to={`/teams/${team.id}`}>
        <Stack direction="row" spacing={2}>
          <Avatar
            sx={{ width: 56, height: 56 }}
            alt="Remy Sharp"
            src={team.picture}
          />
        </Stack>
      </TableCell>
      <TableCell align="left" component={Link} to={`/teams/${team.id}`}>
        <Typography variant="body" style={{ textDecoration: 'none' }}>
          {team.name}
        </Typography>
      </TableCell>
      <TableCell align="left" component={Link} to={`/teams/${team.id}`}>
        <Typography variant="body" style={{ textDecoration: 'none' }}>
          {team.elo_rating}
        </Typography>
      </TableCell>
      <TableCell align="left" component={Link} to={`/teams/${team.id}`}>
        <Typography variant="body" style={{ textDecoration: 'none' }}>
          {playerData.id === team.captain_id ? '👑' : ''}
        </Typography>
      </TableCell>
      <TableCell align="left" component={Link} to={`/teams/${team.id}`}>
        <Typography variant="body" style={{ textDecoration: 'none' }}>
          {team.created_at}
        </Typography>
      </TableCell>
      <TableCell align="left">
        {team.id !== currentTeam.teamInfoData.id &&
          <Button variant="contained" style={{ marginLeft: "10px" }} onClick={checkInHandler}>Check-In</Button>
        }
        {team.id === currentTeam.teamInfoData.id &&
          <span style={{ color: "green", fontWeight: "bold" }}>✔</span>
        }
        {isLoading && <CircularProgress />}
      </TableCell>
    </TableRow>
  )
}