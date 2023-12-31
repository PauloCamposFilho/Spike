import { useTheme } from "@emotion/react";
import React from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from "@mui/material";

export default function SpikeTable(props) {
  const theme = useTheme();
  return (
    <Table
      sx={{
        minWidth: 300,
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
          <TableRow
            style={{
              background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.light})`,
            }}
          >
            <TableCell
              colSpan={props.headers.length}
              align="center"
              style={{
                background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.light})`,
              }}
              sx={{
                backgroundColor: "#f2f2f2",
                padding: "12px",
                borderBottom: "1px solid lightgrey",
                color: "#fafafa"
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
