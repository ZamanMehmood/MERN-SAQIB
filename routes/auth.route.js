const express = require("express");
const router = express.Router();
// const user = require("../models/user");
const user = require('../models/user');
const controller = require('../controllers/auth.controller')
 

router.get("/xyz", controller.getAllusers);

router.get("/:id", controller.getUsersById);

router.post("/register", controller.register);
router.post("/login", controller.login);


router.patch("/:id", controller.updateUsers);

module.exports = router;
