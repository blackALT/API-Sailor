const mongoose = require('mongoose');
const { isEmail } = require('validator');

const userSchema = new mongoose.Schema({
    id: { 
        type: Number 
    },
    name: { 
        type: String, 
        required: true
    },
    email: { 
        type: String,
        lowercase: true,
        required: true,    
        validate: [isEmail, 'Email inválido'],
        unique: true
    },
    passwd: { 
        type: String, 
        required: true
    }
}, {
    versionKey: false
})

const userData = mongoose.model('collectionUsers', userSchema)

module.exports = userData