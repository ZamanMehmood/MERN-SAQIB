const express = require("express");
const router = express.Router();
const Alien = require("../models/alien");
const controller=require('../controllers/allien.controller')
// router.get('/',(req,res)=>{ 
//     res.send("Get Request")
// });

router.get("/abc", controller.getAllAliens);

router.get("/:id", controller.getAlliensById);

router.post("/abc", controller.CreateAlliens);

router.patch("/:id", controller.updateAlliens);

module.exports = router;
