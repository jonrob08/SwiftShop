import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import customerReducer from "../features/customers/customerSlice";
import productReducer from "../features/product/productSlice";
import productCategoryReducer from "../features/product/productCategorySlice";
import brandReducer from "../features/brand/brandSlice";
import blogReducer from "../features/blog/blogSlice"
import blogCategoryReducer from "../features/blog/blogCategorySlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    customer: customerReducer,
    product: productReducer,
    productCategory: productCategoryReducer,
    brand: brandReducer,
    blog: blogReducer,
    blogCategory: blogCategoryReducer,
  },
});
