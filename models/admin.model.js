const mongoose = require('mongoose');
const moment = require('moment-timezone');
const jwt = require('jwt-simple');
const { env, jwtSecret, jwtExpirationInterval } = require('../config/vars');


const userSchema = new mongoose.Schema({

    name: {
        type: String,
           // name email address number image password
    },
    email: {
        type: String,
         
    },
    address: {
      type: String,
    },
     number: {
      type: Number
     },
     password: {
      type: String,
  },
     image: {
      type : String
     }
  
})

userSchema.method({
      token() {
      const playload = {
        exp: moment().add(jwtExpirationInterval, 'minutes').unix(),
        iat: moment().unix(),
        sub: this._id,
      };
      return jwt.encode(playload, jwtSecret);
    }
  });
  

module.exports = mongoose.model('Admin',userSchema)