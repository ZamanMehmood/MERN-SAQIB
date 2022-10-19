  //fullname
    //email 
    //password 
    //gender 
    //dateOfBirth Date



const mongoose = require('mongoose');
const moment = require('moment-timezone');
const jwt = require('jwt-simple');
const { env, jwtSecret, jwtExpirationInterval } = require('../config/vars');


const userSchema = new mongoose.Schema({

    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    dateOfBirth: {
        type: Date,
        required: true,
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
  

module.exports = mongoose.model('User',userSchema)