const express = require("express");
const mongoose = require("mongoose");
const url = "mongodb://localhost/Ecommerece";
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");

mongoose.connect(url, { useNewUrlParser: true });
const cons = mongoose.connection;

cons.on("open", () => {
  console.log("connected...");
});

// app.use(express.json());
var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

// "path module ==>" middleware function ha
// ya line hamain hamari static cheezoo ko read karna ki ijazat de ga ya sirf uploads wala folder ko he read kara ga
app.use(express.static(path.join(__dirname, "uploads")));

// route for user
const user = require("./routes/auth.route");
app.use("/users", user);

// route for product
const product = require("./routes/product.route");
app.use("/products", product);

/// route for categories
const category = require("./routes/category.route");
app.use("/categories", category);

  // route for currency 
const currency = require("./routes/currency.route");
app.use("/currencies", currency);

// route for admin
const admin = require("./routes/admin.route");
app.use("/admin", admin);

const PORT = 8081;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});