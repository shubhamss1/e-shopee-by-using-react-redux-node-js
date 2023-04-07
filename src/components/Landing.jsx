import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Shopmart } from "./Shopmart";
import { Navbars } from "./Navbars";
import { Datademo } from "./Datademo";
import { Empinfo } from "./Empinfo";

export const Landing = () => {
  const [cartItems, setcartItems] = useState([]);
  const localcart = localStorage.getItem("cartarr");

  useEffect(() => {
    if (localcart) {
      setcartItems(JSON.parse(localcart));
    }
  }, [localcart]);
  return (
    <React.Fragment>
      <BrowserRouter>
        <Navbars cardItems={cartItems} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mart" element={<Shopmart />} />
          <Route path="/demo" element={<Datademo />} />
          <Route path="/empinfo" element={<Empinfo />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};
