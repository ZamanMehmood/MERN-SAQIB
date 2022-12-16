const express = require("express");
const router = express.Router();
// const user = require("../models/user");
const currency = require('../models/currency.model');
const controller = require('../controllers/currency.controller')


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

 
router.post("/",upload.single('Logos'), controller.currencies);
router.get("/getCurrencies", controller.getCurrencies);

module.exports = router;


