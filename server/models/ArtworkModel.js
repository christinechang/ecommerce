const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const artworkSchema = new Schema ({
    name: {type: String, required: true},
    width: {type: Number},
    height: {type: Number},
    year: {type: Number},
    category: {type: String},   //art category
    media: {type: String},
    description: {type: String},
    price: {type:Number},
    size: {type: String},
    imgurl: {type: String},
    public_id: {type: String},
    alt: {type: String}

}) 

module.exports = mongoose.model('artwork', artworkSchema) 


