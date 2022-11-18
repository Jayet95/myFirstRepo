const express = require("express");
const bodyParser = require("body-parser");
const AppError = require("./utils/AppError");
const userRouter = require("./routes/userRoute");
const productRouter = require("./routes/productRoute");

const globalErrorHandler = require("./controllers/globalErrorHandler");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use("/user", userRouter);
app.use("/product", productRouter);
app.all("*", (req, res, next) => {
    next(new AppError("Page not found", 404));
  });



  app.use(globalErrorHandler);


module.exports = app;
