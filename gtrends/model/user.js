let mongoose = require('mongoose')

const { Schema } = require('mongoose')

const UserSchema = new Schema({
    name: String,
    email: String,
    age: Number,
    aboutYou: String,
    maritalStatus: String,
    date: { type: Date, default: Date.now },
});

module.exports = User = mongoose.model('user', UserSchema)