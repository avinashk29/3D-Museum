const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema({
    email:{
        type: String
    },
    password: {
        type: String
    },
    name: {
        type: String
    },
    cart:[]

}, {timestamps: true});


// Hashing the password
UserSchema.statics.hashPassword = (password) => {
    return bcrypt.hashSync(password , 15);
}
const userModel = mongoose.model('User' , UserSchema);
module.exports = userModel; 