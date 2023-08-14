import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { Stack, Avatar, Button } from "@mui/material";
import { Link } from "@material-ui/core";

export default function PlayAreaListItem(props) {
  const { id, image, name, description, courtsNumber, latitude, longitude } =
    props;

  return (
    <TableRow
      key={id}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      component={Link}
      to={`/location/${id}`}
    >
      <TableCell align="left">
        <Stack direction="row" spacing={2}>
          <Avatar sx={{ width: 56, height: 56 }} alt="Remy Sharp" src={image} />
        </Stack>
      </TableCell>
      <TableCell align="left">{name}</TableCell>
      <TableCell align="left">{description}</TableCell>
      <TableCell align="left">{courtsNumber}</TableCell>
      <TableCell align="left">
        <Button variant="contained">Details</Button>
      </TableCell>
      <TableCell align="left">{latitude}</TableCell>
      <TableCell align="left">{longitude}</TableCell>
    </TableRow>
  );
}
