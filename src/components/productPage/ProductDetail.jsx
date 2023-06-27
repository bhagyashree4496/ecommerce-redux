import { Star } from "@mui/icons-material";
import { Box, Button, Card } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addCartItem, addWishlistItem } from "../../redux/productSlice";

export default function ProductDetail() {
  const selectedProduct = useSelector(
    (state) => state.products.selectedProduct
  );
  const rating = Math.round(selectedProduct.rating.rate);
  //console.log(selectedProduct, "jj");
  let { id } = useParams();
  const dispatch = useDispatch();

  return (
    <div style={{ padding: "100px" }}>
      <Card sx={{ padding: "30px" }}>
        <Box sx={{ display: { xs: "block", sm: "flex" }, gap: "30px" }}>
          <img src={selectedProduct.image} style={{ height: "300px" }}></img>
          <div>
            <h3 id="title">
              {selectedProduct.title ? selectedProduct.title : ""}
            </h3>
            <p id="descri">
              {selectedProduct.description ? selectedProduct.description : ""}
            </p>
            <p id="category">
              {selectedProduct.category ? selectedProduct.category : ""}
            </p>
            <h3 id="price">
              ${selectedProduct.price ? selectedProduct.price : ""}
            </h3>
            <div id="rating">
              {Array.apply(0, Array(rating)).map(() => {
                return <Star style={{ color: "gold" }}></Star>;
              })}
              <span>
                {selectedProduct.rating.rate ? selectedProduct.rating.rate : ""}
              </span>
            </div>
            <div style={{ display: "flex", gap: "30px" }}>
              <Link>
                <Button
                  variant="contained"
                  onClick={() => dispatch(addCartItem(selectedProduct))}
                >
                  Add to Cart
                </Button>
              </Link>
              <Link to="/cart">
                <Button variant="contained">Go to Cart</Button>
              </Link>
              <Link>
                <Button
                  variant="contained"
                  onClick={() => dispatch(addWishlistItem(selectedProduct))}
                >
                  Add to Wishlist
                </Button>
              </Link>
            </div>
          </div>
        </Box>
      </Card>
    </div>
  );
}
