import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Product from "./Product";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSelectedProduct } from "../../redux/productSlice";
import { motion } from "framer-motion";

export default function Main() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  return (
    <>
      {" "}
      <motion.div
        className="container text-center  bg-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 3 }}
      >
        <Grid container spacing={5} sx={{ padding: "50px" }}>
          {products?.map((product, i) => {
            return (
              <Grid key={i} item xs={3}>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{
                    opacity: 0,
                    // translateX: i % 2 === 0 ? -50 : 50,
                    // translateY: -50,
                  }}
                  animate={{ opacity: 1, translateX: 0, translateY: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  onClick={() => {
                    dispatch(setSelectedProduct(product));
                  }}
                >
                  <Link
                    to={product.title}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <Product product={product}></Product>
                  </Link>
                </motion.div>
              </Grid>
            );
          })}
        </Grid>
      </motion.div>
    </>
  );
}
