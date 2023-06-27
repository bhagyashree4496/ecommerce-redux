import React, { useEffect } from "react";
import Main from "./components/main/Main";
import HomeTemplate from "./routerTemplates/HomeTemplate";
import ProductDetail from "./components/productPage/ProductDetail";
import Favorites from "./components/Favorites/Favorites";
import Cart from "./components/Cart/Cart";
import { useDispatch } from "react-redux";
import { setProducts } from "./redux/productSlice";
import { Route, BrowserRouter, Routes } from "react-router-dom";

export default function () {
  const dispatch = useDispatch();
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        dispatch(setProducts(json));
      });
  });
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeTemplate></HomeTemplate>}>
            <Route index element={<Main />}></Route>
            <Route path=":id" element={<ProductDetail />}></Route>
            <Route path="Favorites" element={<Favorites />}></Route>
            <Route path="Cart" element={<Cart />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
