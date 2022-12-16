const mongoose = require('mongoose');

  
   const currencySchema = new mongoose.Schema({
        Name: {
            type: String,
            required: true
        },
         Logo: {
            type: String
         }
    })
    
    
    module.exports = mongoose.model('currency.model',currencySchema)