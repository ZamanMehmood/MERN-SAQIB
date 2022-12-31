const Admin = require("../models/admin.model");

//  Register admin
exports.registerAdmin = async (req, res) => {
  try {
    console.log("REq.bodyyyy", req.body, req.file);
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
      name: req.body.name,
      email: req.body.email, // name email address number image password
      address: req.body.address,
      number: req.body.number,
      password: req.body.password,
      image: req.file.filename,
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
    // console.log("Error handling =>", err);
    // next();
    // console.log("hanlde error", err);
    return res.json({
      accessToken,
      success: false,
      data: Admin,
      msg: "Admin not Created successfully",
    });
  }
};
//

// Create the user  / login
exports.loginAdmin = async (req, res) => {
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

// //     // update product by their Ids
exports.updateAdmin = async (req, res) => {
  try {
    console.log("Req.body", req.body, req.file);
    const admin = await Admin.findById(req.params.id);
    admin.name = req.body.name;
    admin.email = req.body.email;
    admin.address = req.body.address;
    admin.number = req.body.number;
    // admin.password = req.body.password;

    if (req.file) {
      admin.image = req.file.filename;
    }

    const updateAdmin = await admin.save();
    // res.json(updateAdmin);
    return res.json({
      success: true,
      data: updateAdmin,
      msg: "admin updated successfully",
    });
  } catch (err) {
    console.log("hanlde error", err);
    return res.json({
      success: false,
      data: Admin,
      msg: "admin not updated successfully",
    });
    // next();
    // res.status(400).send("Error handling ===>", err);
  }
};

exports.updatePassword = async (req, res) => {
  try {
    console.log("Req.body", req.body, req.file);
    const admin = await Admin.findOne();
     const {currentPassword, newPassword} = req.body;
    // currentPasswor  == admin.password
    //if yes then return update the new password in db and return success true
    //else return success false
    if(!currentPassword || !newPassword){
      return res.json({
        success: false,
        msg: "Required field is missing",
      });
    }
 


    if (admin.password == req.body.currentPassword) {
      admin.password = req.body.newPassword;
      console.log("admin",admin)
      await admin.save();
      return res.json({
        success: true,
        msg: "admin password updated successfully",
      });
    } else {
      return res.json({
        success: false,
        msg: "admin password not updated successfully",
      });
    }

    // res.json(updateAdmin);
  } catch (err) {
    console.log("hanlde error", err);
    return res.json({
      success: false,
      data: Admin,
      msg: "admin not updated successfully",
    });
     
  }
};
exports.getAdminProfile = async (req, res) => {
  try {
    const admin = await Admin.findOne();
    console.log("admin ==>", admin);

    res.json(admin);
  } catch (err) {
    res.send("admin Error " + err);
  }
};