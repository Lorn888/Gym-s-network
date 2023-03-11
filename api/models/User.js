const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {type:String},
    email: {type:String, unique: true},
    password: String
}, {timestamp: true})

export const UserModel = mongoose.model;('User', UserSchema)

