import {
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from "@mui/material";

export default function SpikeTable(props) {
  return (
    <Table
      sx={{
        minWidth: 300,
        maxWidth: 800,
        display: "inline-table",
        border: "1px solid lightgrey",
        borderRadius: "10px",
        overflow: "hidden",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      }}
      aria-label="a dense table"
    >
      <TableHead>
        {props.specialText && (
          <TableRow>
            <TableCell
              colSpan={props.headers.length}
              align="center"
              sx={{
                backgroundColor: "#f2f2f2",
                padding: "12px",
                borderBottom: "1px solid lightgrey",
              }}
            >
              <h2>{props.specialText}</h2>
            </TableCell>
          </TableRow>
        )}
        <TableRow>
          {props.headers.map((header, index) => {
            return (
              <TableCell
                sx={{
                  fontWeight: "bold",
                  padding: "12px",
                  borderBottom: "1px solid lightgrey",
                }}
                key={index}
              >
                {header}
              </TableCell>
            );
          })}
        </TableRow>
      </TableHead>
      <TableBody>{props.children}</TableBody>
    </Table>
  );
}
