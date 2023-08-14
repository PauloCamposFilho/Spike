import { Link } from "react-router-dom"
import { TableRow, TableCell, Avatar } from "@mui/material";

export default function SpikeTableItem(props) {
  const { item, componentLink } = props;
  if (componentLink) {
    return (
      <TableRow data-id={item.id} component={Link} to={componentLink}>
        {props.children}
      </TableRow>
    );
  } else {
    return (
      <TableRow data-id={item.id}>
        {props.children}
      </TableRow>
    );
  }
}