import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { ShoppingCart } from "@mui/icons-material";
// import { Outlet } from "react-router-dom";
import Animate from "./Animate";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function HomeTemplate() {
  const cartItems = useSelector((state) => state.products.cartItems);
  return (
    <div>
      <AppBar position="sticky">
        <Toolbar>
          <Typography
            variant="h1"
            component="div"
            sx={{ flexGrow: 1, fontSize: "30px", fontWeight: "700" }}
          >
            <Link style={{ textDecoration: "none", color: "black" }} to="/">
              Ecommerce.
            </Link>
          </Typography>

          <Link
            to="Favorites"
            style={{ textDecoration: "none", color: "black" }}
          >
            <Button color="inherit" sx={{ fontWeight: "600" }}>
              Wishlists
            </Button>
          </Link>
          <Link
            to="cart"
            style={{
              textDecoration: "none",
              color: "black",
              marginRight: "0",
              paddingRight: "0",
              // position: "relative",
            }}
          >
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ marginRight: "0", paddingRight: "0", marginLeft: "2px" }}
            >
              <ShoppingCart />
            </IconButton>
            <span
              style={{
                marginRight: "8px",
                borderBottom: "3px dotted black",
                color: "orange",
              }}
            >
              {cartItems.length}
            </span>
          </Link>
        </Toolbar>
      </AppBar>
      {/* <Outlet></Outlet> */}
      <Animate></Animate>
    </div>
  );
}
