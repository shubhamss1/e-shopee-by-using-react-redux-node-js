import React, { useState, useEffect } from "react";
import { Grid, TextField, Button, Card, CardContent } from "@mui/material";

export const Empinfo = () => {
  const [fname, setfname] = useState("");
  const [mname, setmname] = useState("");
  const [lname, setlname] = useState("");
  const [city, setcity] = useState("");
  const [phone, setphone] = useState("");

  const handleclear = () => {
    setfname("");
    setmname("");
    setlname("");
    setphone("");
    setcity("");
  };

  const handlesubmit = () => {
    localStorage.setItem("fname", fname);
    localStorage.setItem("setmname", mname);
    localStorage.setItem("setlname", lname);
    localStorage.setItem("setcity", city);
    localStorage.setItem("setphone", phone);
  };
  const handledelete = () => {
    localStorage.removeItem("fname");
    localStorage.removeItem("mname");
    localStorage.removeItem("lname");
    localStorage.removeItem("city");
    localStorage.removeItem("phone");
    handleclear();
  };

  useEffect(() => {
    setfname(localStorage.getItem("fname"));
    setmname(localStorage.getItem("mname"));
    setlname(localStorage.getItem("lname"));
    setcity(localStorage.getItem("city"));
    setphone(localStorage.getItem("phone"));
  }, []);
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <TextField
            value={fname}
            onChange={(e) => setfname(e.target.value)}
            label="first name"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            value={mname}
            onChange={(e) => setmname(e.target.value)}
            label="middle name"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            value={lname}
            onChange={(e) => setlname(e.target.value)}
            label="last name"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            value={phone}
            onChange={(e) => setphone(e.target.value)}
            label="phone"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            value={city}
            onChange={(e) => setcity(e.target.value)}
            label="city"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <Button variant="contained" fullWidth onClick={handleclear}>
            clear
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button onClick={handlesubmit} variant="contained" fullWidth>
            submit
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button onClick={handledelete} variant="contained" fullWidth>
            delete
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <h3>
                {fname} {mname} {lname}
              </h3>
              <h4>{city}</h4>
              <h5>{phone}</h5>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
