import React from "react";
import { Grid, Card, CardContent, Rating, Badge } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export const Productitem = ({ item }) => {
  // const [cart, setcart] = useState([]);

  const handleAdd = (curritem) => {
    const localcart = JSON.parse(localStorage.getItem("cartarr"));
    const allarr = localcart ? [curritem, ...localcart] : [curritem];
    localStorage.setItem("cartarr", JSON.stringify(allarr));
  };

  return (
    <Grid item xs={3}>
      <Card sx={{ backgroundColor: "pink" }} align="center">
        <CardContent>
          <Badge badgeContent={`${item.price}`} color="secondary" max={9999}>
            <img src={item.image} alt={item.title} width={150} height={180} />
          </Badge>
          <h4>{item.title.slice(0, 12) + "..."} </h4>
          <h3>{item.category}</h3>
          <AddShoppingCartIcon onClick={() => handleAdd(item)} />
          <Rating value={item.rating.rate} />
        </CardContent>
      </Card>
    </Grid>
  );
};
