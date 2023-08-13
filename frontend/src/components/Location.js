import React from "react";
import { Typography } from "@material-ui/core";

import SpikeNavBar from "./AppBar";

export default function Location() {
  return (
    <div>
      <SpikeNavBar/>
      <div style={{ padding: "80px" }}>
        <Typography variant="h6" component="h2" color="inherit">
          Volleyball Corts
        </Typography>
        <Typography variant="h6" component="h2" color="inherit">
          Corts near me
        </Typography>
      </div>
    </div>
  );
}
