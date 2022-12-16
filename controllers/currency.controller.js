const Currency = require("../models/currency.model");
// const Product = require("../models/product");

// get all the currencies
exports.getCurrencies = async (req, res) => {
  try {
    const currencies = await Currency.find();
    res.json(currencies);
  } catch (err) {
    res.send("Currency Error " + err);
  }
};

// Create the currency  / Currency
exports.currencies = async (req, res, next) => {
  try {
    console.log("REq.body", req.body,req.file);
    //create new currency in db
   let currency = new Currency({
      Name: req.body.Name,
      Logo: req.file.filename,
    });

    //save the currency in db
    currency = await currency.save();

    return res.json({
      success: true,
      data: currency,
      msg: "currency created successfully",
    });
  } catch (err) {
    console.log("Error handling =>", err);
    next();
  }
};
