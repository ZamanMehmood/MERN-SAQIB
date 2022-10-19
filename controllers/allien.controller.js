
const Alien = require("../models/alien");

exports.getAllAliens = async (req, res) => {
    try {
      const aliens = await Alien.find();
      res.json(aliens);
    } catch (err) {
      res.send("Error " + err);
    }
  }


  exports.getAlliensById = async (req, res) => {
    try {
      const alien = await Alien.findById(req.params.id);
      res.json(alien);
    } catch (err) {
      
      res.send("Error " + err);
    }
  }

  exports.CreateAlliens = async (req, res) => {
    try {
      const alien = new Alien({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub,
      });
  
      const a1 = await alien.save();
      res.json(a1);
  
      return res.json({
        success: true,
        data: a1,
        msg: "Alien created successfully",
      });
    } catch (err) {
      console.log("Error handling =>", err);
      // next();
      return res.json({
        success: false,
        data: null,
        msg: err,
      });
    }
  }

  exports.updateAlliens =  async (req, res) => {
    try {
      const alien = await Alien.findById(req.params.id);
      alien.sub = req.body.sub;
      const a1 = await alien.save();
      res.json(a1);
    } catch (err) {
      res.send("Error");
    }
  }