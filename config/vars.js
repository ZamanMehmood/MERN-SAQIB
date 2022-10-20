const path = require('path');
// import .env variables
require('dotenv').config();
module.exports = { 
  jwtSecret: process.env.JWT_SECRET,
  jwtExpirationInterval: process.env.JWT_EXPIRATION_MINUTES,
 };  