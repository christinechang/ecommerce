const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const imageSchema = new Schema ({
    photo_url: {type: String, required: true, unique: true},
    public_id: {type: String, required: true, unique: true},
    ref_id: {type: String, required: true},
    alt: {type: String, required: true}
})

module.exports = mongoose.model('image', imageSchema) 
