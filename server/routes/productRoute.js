const express = require("express");
const productController = require("../controllers/productController");
const router = express.Router();

router.post("/create", productController.create);
router.get("/getAll", productController.all);


module.exports = router;