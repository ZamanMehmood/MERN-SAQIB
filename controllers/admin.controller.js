 const Admin  = require('../models/admin.model');



 // Create the user  / Register
exports.register = async (req, res, next) => {
  try {
    console.log("REq.body", req.body);
    const { email } = req.body;
    //find if user exist
    let admin = await Admin.findOne({
      email,
    });

    //already exist
    if (admin != null)
      return res.send(
        "this email already exists , you can not create with same id"
      );

    //create new admin in db
    admin = new Admin({
      fullName: req.body.fullName,
      email: req.body.email,
      password: req.body.password,
      
    });

    //save the admin in db
    admin = await admin.save();

    var accessToken = await admin.token();

    // admin = admin.transform();
    console.log("access token ==>", accessToken);

    return res.json({
      accessToken,
      success: true,
      data: admin,
      msg: "User created successfully",
    });
  } catch (err) {
    console.log("Error handling =>", err);
    next();
  }
};


// Create the user  / login
exports.login = async (req, res) => {
    try {
      const { email } = req.body;
      //find if user exist
  
      let admin = await Admin.findOne({
        email,
      }); 
  
      if (!admin) return res.json({ success: false, msg: "Email no exist" });
  
      //already exist
      if (admin) {
        if (admin.password !== req.body.password)
          return res.json({ success: false, msg: "incorrect password" });
      }
  
      var accessToken = await admin.token();
  
      // admin = admin.transform();
      console.log("access token ==>", accessToken);
  
      return res.json({
        // admin
        accessToken,
        success: true,
        data: admin,
        msg: "admin logged In successfully",
      });
    } catch (err) {
      res.json({
        // admin
        success: false,
        data: null,
        msg: "admin Not logged In",
      });
      // res.status(400).json({ message: "Something went wrong" });
      // console.log("Error handling =>", err);
      // next();
    }
  };

