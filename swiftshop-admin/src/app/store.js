import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import customerReducer from "../features/customers/customerSlice";
import productReducer from "../features/product/items/productSlice";
import productCategoryReducer from "../features/product/categories/productCategorySlice";
import brandReducer from "../features/brand/brandSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    customer: customerReducer,
    product: productReducer,
    productCategory: productCategoryReducer,
    brand: brandReducer,
  },
});
