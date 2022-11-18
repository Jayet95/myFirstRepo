const Product = require("../models/Product");
const jwt = require("jsonwebtoken");
const AppError = require("../utils/AppError");



  exports.create = async (req, res, next) => {
    try {
      const newProduct = await Product.create(req.body);
     
     
      res.status(201).json({ "status":"success" });
    } catch (error) {
      next(new AppError("create failed", 400));
    }
  };


    exports.all = async (req, res, next) => {
    try {
      const Products = await Product.find({});
     
     
      res.status(201).json({Products });
    } catch (error) {
      next(new AppError("create failed", 400));
    }
  };
  