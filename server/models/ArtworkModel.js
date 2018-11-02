const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const artworkSchema = new Schema ({
    name: {type: String, required: true},
    description: {type: String},
    category: {type: String},   //art category
    media: {type: String},
    width: {type: Number},
    height: {type: Number},
    year: {type: Number},    
    size: {type: String},
    imgurl: {type: String},
    public_id: {type: String},
    alt: {type: String},
    sortId: {type: Number},
    note: {type: String},
    price: {type:Number}

}) 

module.exports = mongoose.model('artwork', artworkSchema) 


