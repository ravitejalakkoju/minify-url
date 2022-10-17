const mongoose = require('mongoose')
require('../shared/date-extensions')

// instantiate a mongoose schema
const URLSchema = new mongoose.Schema({
    urlCode: String,
    longUrl: String,
    shortUrl: String,
    createdOn: {
        type: String,
        default: new Date()
    },
    expiresOn: {
        type: String,
        default: new Date().addDays(5)
    }
})

// create a model from schema and export it
module.exports = mongoose.model('Url', URLSchema)