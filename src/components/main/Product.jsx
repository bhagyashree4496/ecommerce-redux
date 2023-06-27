import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Product({ product }) {
  return (
    <Card sx={{ padding: "3px" }}>
      <div
        style={{
          display: "flex",
          padding: "5px",
          justifyContent: "center",
          borderBottom: "1px solid #a1a4a7",
        }}
      >
        <img style={{ height: "200px" }} src={product.image}></img>
      </div>

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          ${product.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.category}
        </Typography>
      </CardContent>
    </Card>
  );
}
