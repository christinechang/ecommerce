const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

const adminSchema = new Schema ({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true}
    // firstname: {type: String},
    // lastname: {type: String}
})

adminSchema.pre('save', function(next) {
    const user = this;
    bcrypt.genSalt(10, function(err,salt) {
        if (err) {return next(err);}
        bcrypt.hash(user.password, salt, null, function(err, hash) {
            if (err) {return next(err); }
            user.password = hash;
            next();
        });
    });
});

adminSchema.methods.comparePassword = function(candidatePassword, callback){
    bcrypt.compare(candidatePassword, this.password, function(err,isMatch) {
        if (err) return callback(err);
        callback(null, isMatch);
    });
}



module.exports = mongoose.model('admin', adminSchema) 
