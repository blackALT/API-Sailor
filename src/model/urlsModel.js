const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    id: { 
        type: Number 
    },
    url: { 
        type: String, 
        required: true 
    },
    target: { 
        type: String, 
        default: "",
    },
    submissionDate: { 
        type: Date, 
        default: Date.now, 
        required: true 
    },
    isAnalyzed: {
        type: Boolean, 
        default: false, 
        required: true
    },
    isMalicious: {
        type: Boolean, 
        default: false, 
        required: true
    }
}, {
    versionKey: false
})

const urlData = mongoose.model('collectionUrl', urlSchema)

module.exports = urlData