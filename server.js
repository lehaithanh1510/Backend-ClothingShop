const express = require("express");
const userRouter = require("./modules/user/user.router");
const productRouter = require("./modules/product/product.router");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
app = express();

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/shopping-clothes",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
  (err) => {
    if (err) throw err;

    console.log("MongoDB connected");
  }
);

app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/user", userRouter);
app.use("/product", productRouter);

const port = process.env.APP_PORT || 8080;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
