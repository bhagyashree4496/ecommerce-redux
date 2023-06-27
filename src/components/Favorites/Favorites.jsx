import { Grid } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "../main/Product";
import { Link } from "react-router-dom";
import { setSelectedProduct } from "../../redux/productSlice";

export default function Favorites() {
  const wishlistItems = useSelector((state) => state.products.wishlistItems);
  const dispatch = useDispatch();
  return (
    <Grid container spacing={5} sx={{ padding: "50px" }}>
      {wishlistItems?.map((product, i) => {
        return (
          <Grid key={i} item xs={3}>
            <div
              onClick={() => {
                dispatch(setSelectedProduct(product));
              }}
            >
              <Link
                to={`/${product.title}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <Product product={product}></Product>
              </Link>
            </div>
          </Grid>
        );
      })}
    </Grid>
  );
}
