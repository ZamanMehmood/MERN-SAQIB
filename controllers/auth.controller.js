const User = require("../models/user");

// get all the users
exports.getAllusers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.send("Error " + err);
  }
};

// get user by Id
exports.getUsersById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (err) {
    res.send("Error " + err);
  }
};

//bcrypt

// Create the user  / Register
exports.register = async (req, res, next) => {
  try {
    console.log("REq.body", req.body);
    const { email } = req.body;
    //find if user exist
    let user = await User.findOne({
      email,
    });

    //already exist
    if (user != null)
      return res.send(
        "this email already exists , you can not create with same id"
      );

    //create new user in db
    user = new User({
      fullName: req.body.fullName,
      email: req.body.email,
      password: req.body.password,
      gender: req.body.gender,
      dateOfBirth: req.body.dateOfBirth,
    });

    //save the user in db
    user = await user.save();

    var accessToken = await user.token();

    // user = user.transform();
    console.log("access token ==>", accessToken);

    return res.json({
      accessToken,
      success: true,
      data: user,
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

    let user = await User.findOne({
      email,
    }); 

    if (!user) return res.json({ success: false, msg: "Email no exist" });

    //already exist
    if (user) {
      if (user.password !== req.body.password)
        return res.json({ success: false, msg: "incorrect password" });
    }

    var accessToken = await user.token();

    // user = user.transform();
    console.log("access token ==>", accessToken);

    return res.json({
      // User
      accessToken,
      success: true,
      data: user,
      msg: "User logged In successfully",
    });
  } catch (err) {
    res.status(400).json({ message: "Something went wrong" });
    // console.log("Error handling =>", err);
    // next();
  }
};

//  update the  user  by their Id
exports.updateUsers = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    user.sub = req.body.sub;
    const a1 = await user.save();
    res.json(a1);
  } catch (err) {
    res.send("Error handling ===>", err);
  }
};
