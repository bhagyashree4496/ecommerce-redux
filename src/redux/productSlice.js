import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    selectedProduct: {},
    cartItems: [],
    wishlistItems: [],
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
      //console.log(state.products);
    },
    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
      //console.log(state.selectedProduct.id);
    },
    addCartItem: (state, action) => {
      state.cartItems = [...state.cartItems, action.payload];
      //console.log(state.cartItems, "cart");
    },
    addWishlistItem: (state, action) => {
      state.wishlistItems = [...state.wishlistItems, action.payload];
      //console.log(state.wishlistItems, "Wishlist");
    },
  },
});

export const { setProducts, setSelectedProduct, addCartItem, addWishlistItem } =
  productSlice.actions;

export default productSlice.reducer;
