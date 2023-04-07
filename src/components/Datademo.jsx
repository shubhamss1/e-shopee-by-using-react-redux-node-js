import React from "react";
import { Button } from "@mui/material";

export const Datademo = () => {
  const handlepushfname = () => {
    sessionStorage.setItem("fname", "prashant");
  };
  const handlepushlname = () => {
    sessionStorage.setItem("lame", "naikwadi");
  };
  const handlecity = () => {
    localStorage.setItem("city", "mumbai");
  };
  return (
    <React.Fragment>
      <h1>session storage-set</h1>
      <Button variant="contained" onClick={handlepushfname}>
        push fname
      </Button>
      <h1>session storage-set</h1>
      <Button variant="contained" onClick={handlepushlname}>
        push lname
      </Button>
      <h1>session storage-set</h1>
      <h3>
        {sessionStorage.getItem("fname")} {sessionStorage.getItem("lname")}
      </h3>
      <h1>lcal storage-set</h1>
      <Button variant="contained" onClick={handlecity}>
        push city
      </Button>
      <h1>local storage-get</h1>
      <h3>{localStorage.getItem("city")}</h3>
    </React.Fragment>
  );
};
