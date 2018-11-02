const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema ({
    name: {type: String, required: true, unique: true},
    width: {type: Number},
    height: {type: Number},
    depth: {type: Number},
    weight: {type: Number},
    price: {type: Number, required: true},
    category: {type: String},       //product category
    artwork_id: {type: String,required: true},
    size: {type: String},
    description: {type: String}
})

module.exports = mongoose.model('product', productSchema) 
