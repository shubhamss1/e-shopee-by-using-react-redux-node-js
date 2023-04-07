import React from "react";
import { Grid, Badge } from "@mui/material";
import { Navbaritem } from "./Navbaritem";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

export const Navbars = ({ cardItems }) => {
  return (
    <React.Fragment>
      <Grid container spacing={1}>
        <Navbaritem xsval="1" path="/" val="Home" />
        <Navbaritem xsval="1" path="/mart" val="Mart" />
        {/* <Navbaritem xsval="1" path="/demo" val="demo" /> */}
        {/* <Navbaritem xsval="1" path="/empinfo" val="empinfo" /> */}
        <Grid item xs={1} alignSelf="right">
          <Badge badgeContent={cardItems.length} color="warning">
            <ShoppingBagIcon fontSize="large" />
          </Badge>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
