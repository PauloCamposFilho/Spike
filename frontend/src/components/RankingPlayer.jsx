import { Table, TableHead, TableRow, TableBody, TableCell } from "@mui/material";

export default function RankingPlayer(props) {
  return (
    <Table sx={{ minWidth: 300, maxWidth: 800, display: "inline-table", border: "1px solid lightgrey" }} aria-label="a dense table">
      <TableHead>
        <TableRow>
          <TableCell colSpan={4} align="center"><h2>Players</h2></TableCell>
        </TableRow>
        <TableRow>
          <TableCell></TableCell>
          <TableCell>First name</TableCell>
          <TableCell>Last name</TableCell>
          <TableCell>Elo Rating</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {props.children}
      </TableBody>
    </Table>
  );
}