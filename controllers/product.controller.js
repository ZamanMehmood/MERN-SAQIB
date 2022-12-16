// const Product = require("../models/product");
// // const Product = require("../models/product");

// // get all the products
// exports.getAllProducts = async (req, res) => {
//   try {
//     const products = await Product.find();
//     res.json(products);
//   } catch (err) {
//     res.send("Product Error " + err);
//   }
// };  

// // Create the product  / Register
// exports.products = async (req, res, next) => {
//   try {
//     console.log("REq.body", req.body,req.file);
//     //create new product in db
//    let product = new Product({
//       Name: req.body.Name,
//       Image: req.file.filename,
//       price: req.body.price,
//       discountPrice: req.body.discountPrice,
//       ratings: req.body.ratings,
//       totalReviews: req.body.totalReviews,
//     });

//     //save the user in db
//     product = await product.save();

//     return res.json({
    
//       success: true,
//       data: product,
//       msg: "product created successfully",
//     });
//   } catch (err) {
//     console.log("Error handling =>", err);
//     next();
//   }
// };

 const Product = require("../models/product");
// const Product = require("../models/product");

// get all the products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.send("Product Error " + err);
  }
};  

// Create the product  / Register
exports.products = async (req, res, next) => {
  try {
    console.log("REq.body", req.body,req.file);
    //create new product in db
   let product = new Product({
      name: req.body.name,
      description: req.body.description,
      brandName: req.body.brandName,
      categories: req.body.categories,
      subCategories: req.body.subCategories,
      subSubCategories: req.body.subSubCategories,
      price: req.body.price,
      currency: req.body.currency,
      sku: req.body.sku,
      quantity: req.body.quantity,
      weight: req.body.weight,
      Image:req.file.filename,

    });

    //save the user in db
    product = await product.save();

    return res.json({
      success: true,
      data: product,
      msg: "product created successfully",
    });
  } catch (err) {
    console.log("Error handling =>", err);
    next();
  }
};
