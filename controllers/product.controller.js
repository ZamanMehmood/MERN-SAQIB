const Product = require("../models/product");

// 
exports.list = async (req, res, next) => {
  try {
    let { page, limit } = req.query;
    page = page !== undefined && page !== "" ? parseInt(page)
 : 1;
    limit = limit !== undefined && limit !== "" ? parseInt(limit) : 10;

    const total = await Avatar.countDocuments();
    let pipeline = [
      { $sort: { createdAt: -1 } },
      { $skip: limit * (page - 1) },
      { $limit: limit },
    ];
    const avatar = await Avatar.aggregate(pipeline);
    if (avatar) {
      res.status(200).send({
        success: true,
        message: "Avatar Fetched Successfully",
        data: avatar,
        pagination: {
          page,
          limit,
          total,
          pages: Math.ceil(total / limit) <= 0 ? 1 : Math.ceil(total / limit),
        },
      });
    } else {
      res
        .status(400)
        .send({ success: false, message: "Data Fetch Unsuccessfull" });
    }
  } catch (error) {
    return next(error);
  }
};
// 

// get all the products (products with pagination)
exports.getAllProducts = async (req, res,next) => { 
  try {
     let { page, pageLimit } = req.query;    // we will destruct  parameters that we are sending from front end throgh api
    //  console.log("page", page)            // page number we are recieving from front ent
    //  console.log("pageLimit", pageLimit)   // page limit we are reciveing from front end

    page = page !== undefined && page !== "" ? parseInt(page)
 : 1;
    pageLimit = pageLimit !== undefined && pageLimit !== "" ? parseInt(pageLimit) : 10;

    const total = await Product.countDocuments();      // countDocument will count our documents from Product (Product.countDocuments),or we can say it will count our document in mongodb
    let pipeline = [
      { $sort: { createdAt: -1 } },
      { $skip: pageLimit * (page - 1) },
      { $limit: pageLimit },
    ];
    const products = await Product.aggregate(pipeline);   // aggregate works like find , we use aggregate to write advanced queries, aggregate recieve the array as the firs argument which is (pipeline array) 
    if (products) {
      res.status(200).send({
        success: true,
        message: "product Fetched Successfully",
        data: products,
        total:total,
        pagination: {
          page,
          pageLimit,
          total,
          pages: Math.ceil(total / pageLimit) <= 0 ? 1 : Math.ceil(total / pageLimit),
        },
      });
    } else {
      res.status(400).send({ success: false, message: "Data Fetch Unsuccessfull" });
    }
  } catch (err) {
    res.send("Product Error " + err);
  }
};



// get all the products (without pagination)
// exports.getAllProducts = async (req, res,next) => {
//   try {
//     const products = await Product.find();
//     res.json(products);
//   } catch (err) {
//     res.send("Product Error " + err);
//   }
// };

//  get product by ID
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch (err) {
    res.send("Error " + err);
  }
};
// Create the product  / Register
exports.products = async (req, res, next) => {
  try {
    console.log("REq.body", req.body, req.file);
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
      image: req.file.filename,
    });

    //save the product in db
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

// delete product by their Id
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    // const deleteproduct = await product.save();
    res.json({ success: true, data: product });
  } catch (err) {
    res.status(400).json({ success: false, data: err });
  }
};

//     // update product by their Ids
exports.updateProduct = async (req, res) => {
  try {
    console.log("Req.body", req.body, req.file);

    const product = await Product.findById(req.params.id);
    product.name = req.body.name;
    product.description = req.body.description;
    product.brandName = req.body.brandName;
    product.categories = req.body.categories;
    product.subCategories = req.body.subCategories;
    product.subSubCategories = req.body.subSubCategories;
    product.price = req.body.price;
    product.currency = req.body.currency;
    product.sku = req.body.sku;
    product.quantity = req.body.quantity;
    product.weight = req.body.weight;
    if (req.file) {
      product.image = req.file.filename;
    }

    const updateProduct = await product.save();
    res.json(updateProduct);
    // return res.json({
    //   success: true,
    //   data: Product,
    //   msg: "product updated successfully",
    // });
  } catch (err) {
    console.log("hanlde error", err);
    return res.json({
      success: false,
      data: Product,
      msg: "product not updated successfully",
    });
    next();
    // res.status(400).send("Error handling ===>", err);
  }
};
