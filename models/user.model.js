const mongoose = require('mongoose');
const db = require('../config/db');
const bcryp = require('bcrypt');

const { Schema } = mongoose;

const userSchema = new Schema({
    email:{
        type: String,
        lowercasse: true,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    }

});

userSchema.pre('save', async function() {

    try {
        var user = this;
        const salt = await(bcryp.genSalt(10));
        const hashpass = await bcryp.hash(user.password,salt);
        user.password = hashpass;
        
    } catch (err) {
        throw err;
    }
    
});

const UserModel = db.model('user', userSchema);

module.exports = UserModel;
