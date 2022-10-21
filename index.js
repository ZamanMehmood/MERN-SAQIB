const express = require("express");
const mongoose = require("mongoose");
const url = "mongodb://localhost/Ecommerece";
const cors=require("cors")
const bodyParser = require('body-parser'); 

const app = express();

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

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

const user = require("./routes/auth.route");
app.use("/users", user);
const product = require("./routes/product.route");
app.use("/products", product);

const PORT = 8081;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
