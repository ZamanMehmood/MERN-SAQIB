    //Name
    //email 
    //Image 
    //price 
    //discountPrice
    // ratings
    // totalReviews

    // const mongoose = require('mongoose');
    // const productSchema = new mongoose.Schema({
    //     Name: {
    //         type: String,
    //         required: true
    //     },
    //     Image: {
    //         type: String,
    //     },
    //     price: {
    //         type: Number,
    //      },
    //     discountPrice: {
    //         type: Number,
    //      },
    //     ratings: {
    //         type: Number,
    //      },
    //     totalReviews: {
    //         type: Number,
    //      }
    // })
    
    // module.exports = mongoose.model('Product',productSchema)


    const mongoose = require('mongoose');
    const productSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
        },
        brandName: {
            type: String,
         },
        categories: {
            type: String,
         },
        subCategories: {
            type: String,
         },
         subSubCategories: {
            type: String,
         },
         price: {
            type: Number,
         },
         currency: {
            type: String,
         },
         sku:{
            type: Number,
         },
         quantity: {
            type: Number,
         },
         weight: {
            type: Number
         },
         image: {
            type: String
         }
        
    })
    
    module.exports = mongoose.model('Product',productSchema);