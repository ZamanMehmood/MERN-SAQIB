const express = require("express");
const router = express.Router();
// const user = require("../models/user");
const product = require('../models/product');
const controller = require('../controllers/product.controller')


// 

// 
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
      cb(null, 'uploads/');
  },

  filename: function(req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  } 
});

var upload = multer({ storage: storage })

 
router.post("/",upload.single('Image'), controller.products);
router.get("/getProducts", controller.getAllProducts);
router.delete("/:id", controller.deleteProduct);
router.get("/:id", controller.getProductById);
router.put("/:id",upload.single('Image'), controller.updateProduct);


module.exports = router;