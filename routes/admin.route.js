const express = require("express");
const router = express.Router();
// const user = require("../models/user");
const user = require('../models/admin.model');
const controller = require('../controllers/admin.controller')

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

 
router.post("/registerAdmin",upload.single('image'), controller.registerAdmin );
router.put("/updatePassword",controller.updatePassword);
router.post("/loginAdmin", controller.loginAdmin);
router.put("/updateAdmin/:id",upload.single('image'), controller.updateAdmin);
router.get("/getAdminProfile", controller.getAdminProfile);

module.exports = router;