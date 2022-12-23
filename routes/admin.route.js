const express = require("express");
const router = express.Router();
// const user = require("../models/user");
const user = require('../models/admin.model');
const controller = require('../controllers/admin.controller')
  

 
router.post("/register", controller.register);
router.post("/adminLogin", controller.login);


// router.patch("/:id", controller.updateUsers);

module.exports = router;
