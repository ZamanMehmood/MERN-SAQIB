const express = require("express");
const router = express.Router();
// const user = require("../models/user");
const product = require('../models/product');
const controller = require('../controllers/product.controller')
  

// router.get("/", controller.getAllusers);

// router.get("/:id", controller.getUsersById);

router.post("/", controller.products);
router.get("/getProducts", controller.getAllProducts);


// router.post("/login", controller.login);


// router.patch("/:id", controller.updateUsers);

module.exports = router;
