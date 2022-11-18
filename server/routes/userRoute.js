const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();

router.post("/register", userController.register);
router.post("/login", userController.login);
router.post("/authenticate", userController.authenticate);
router.post("/updateOne", userController.updateOne);
router.post("/favorite", userController.favorite);



module.exports = router;
