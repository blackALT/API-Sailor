const mongoose = require('mongoose');

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
        required: true
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