import { Grid, TextField, Button } from "@mui/material";
import { Productitem } from "./Productitem";

import React, { useState, useEffect } from "react";
import axios from "axios";

export const Productlist = () => {
  const [data, setData] = useState([]);
  const [oridata, setoridata] = useState([]);
  const [catdata, setcatdata] = useState([]);
  const [txt, settxt] = useState("");

  const getData = async () => {
    const result = await axios.get("https://fakestoreapi.com/products");
    setData(result.data);
    setoridata(result.data);
    const resultcat = await axios.get(
      "https://fakestoreapi.com/products/categories"
    );
    setcatdata(resultcat.data);
  };
  const handlecat = (currcat) => {
    const filtered = oridata.filter((item) => item.category == currcat);
    setData(filtered);
  };

  useEffect(() => {
    const filtered = oridata.filter((item) =>
      item.title.toUpperCase().includes(txt.toUpperCase())
    );
    setData(filtered);
  }, [txt]);

  useEffect(() => {
    getData();
  }, []);
  return (
    <Grid container spacing={2} align="center" sx={{ marginTop: 2 }}>
      <Grid item xs={12}>
        <TextField
          variant="outlined"
          label="search..."
          fullWidth
          onChange={(e) => settxt(e.target.value)}
        ></TextField>
      </Grid>
      {catdata.map((item) => (
        <Grid item xs={3}>
          <Button
            variant="contained"
            fullWidth
            color="warning"
            onClick={() => handlecat(item)}
          >
            {item}
          </Button>
        </Grid>
      ))}
      {data.map((item) => (
        <Productitem item={item} />
      ))}
    </Grid>
  );
};
