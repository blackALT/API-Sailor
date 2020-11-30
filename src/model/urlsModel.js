const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    id: { type: Number },
    url: { type: String },
    target: { type: String },
    submissionDate: { type: String },
    isAnalyzed: {type: Boolean},
    isMalicious: {type: Boolean}
}, {
    versionKey: false
})

const urlData = mongoose.model('collectionUrl', urlSchema)

module.exports = urlData