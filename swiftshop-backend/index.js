const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
const morgan = require("morgan");
const dbConnect = require("./config/dbConnect");
const { notFound, errorHandler } = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 3002;
const authRouter = require("./routes/auth");
const productRouter = require("./routes/product");
const blogRouter = require("./routes/blog");
const pCategoryRouter = require("./routes/productCategory");
const bCategoryRouter = require("./routes/blogCategory");
const brandRouter = require("./routes/brand");
const app = express();

dbConnect();
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/api/user", authRouter);
app.use("/api/product", productRouter);
app.use("/api/blog", blogRouter);
app.use("/api/product-category", pCategoryRouter);
app.use("/api/blog-category", bCategoryRouter);
app.use("/api/brand", brandRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`You are now listening to the smooth sounds of PORT ${PORT}`);
});
