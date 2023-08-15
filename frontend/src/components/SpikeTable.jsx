import { Table, TableHead, TableRow, TableBody, TableCell } from "@mui/material";

export default function SpikeTable(props) {
  return (
    <Table sx={{ minWidth: 300, maxWidth: "100%", display: "inline-table", border: "1px solid lightgrey" }} aria-label="a dense table">
      <TableHead>
        {props.specialText &&
          <TableRow>
            <TableCell colSpan={props.headers.length} align="center"><h2>{props.specialText}</h2></TableCell>
          </TableRow>
        }
        <TableRow>
          {props.headers.map((header, index) => {
            return (
              <TableCell key={index}>{header}</TableCell>
            );
          })}
        </TableRow>
      </TableHead>
      <TableBody>
        {props.children}
      </TableBody>
    </Table>
  );
}