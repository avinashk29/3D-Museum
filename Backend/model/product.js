const mongoose = require('mongoose');

const Product = new mongoose.Schema({
    name: {
        type: String
    },
    images: {
        type: Array
    },
    description: {
        type: String
    },
    cost: {
        type: String
    },
    category: {
        type: String
    }
}, {timestamps: true});

const productModel = mongoose.model('Product' , Product);
module.exports = productModel;