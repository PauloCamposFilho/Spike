import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import {
  Stack,
  Avatar,
} from "@mui/material";
import { Link } from "@material-ui/core";

export default function PlayAreaListItem (props) {
  const { id, name, description, courtsNumber,latitude ,longitude } = props

  return (
    <TableRow key={id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }} component={Link} to={`/location/${id}`}>
      <TableCell align="left">{name}</TableCell>
      <TableCell align="left">{description}</TableCell>
      <TableCell align="left">{courtsNumber}</TableCell>
      <TableCell align="left">{latitude}</TableCell>
      <TableCell align="left">{longitude}</TableCell>
    </TableRow>
  )
}