import { Link } from "react-router-dom"
import { TableRow, TableCell, Avatar } from "@mui/material";

export default function RankingPlayerItem(props) {
  const { player } = props;
  return (
    <TableRow data-id={player.id} component={Link} to={`/player/${player.id}`}>
      <TableCell>
        <Avatar
          sx={{ width: 60, height: 60 }}
          alt={`${player.first_name} ${player.last_name}`}
          // src="https://i.pinimg.com/736x/33/06/b8/3306b8156653fea183b5406151c74ded.jpg"
          src={player.avatar_picture + `?id=${player.id}`}
        />
      </TableCell>
      <TableCell>{player.first_name}</TableCell>
      <TableCell>{player.last_name}</TableCell>
      <TableCell>{player.elo_rating}</TableCell>
    </TableRow>
  );
}