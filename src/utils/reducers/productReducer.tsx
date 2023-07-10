import { createSlice } from "@reduxjs/toolkit";

interface ProductReducerProps {
  products: any;
}

const initialState: ProductReducerProps = {
  products: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    loadProducts: (state, actions) => {
      const { payload } = actions;
      console.log("PRODUCTS: ", payload)
      state.products = [...payload];
    },
  },
});

export const { loadProducts } = productSlice.actions;
export default productSlice.reducer;
