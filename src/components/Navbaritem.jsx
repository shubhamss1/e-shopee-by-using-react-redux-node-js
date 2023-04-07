import React from "react";
import { Grid, Button } from "@mui/material";
import { Link } from "react-router-dom";

export const Navbaritem = ({ xsval, path, val }) => {
  return (
    <Grid item xs={xsval}>
      <Link to={path}>
        <Button variant="contained" fullWidth color="success">
          {val}
        </Button>
      </Link>
    </Grid>
  );
};
