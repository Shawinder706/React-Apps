const mongoose = require('mongoose')
const Schema = mongoose.Schema

//creating schema
const todoSchema = new Schema({
    description: {
        type: String
    },
    resposible: {
        type: String
    },
    priority: {
        type: String
    },
    submission: {
        type: Boolean
    }
}, {
    timestamps: true
})
// assign the schema to model and export it
module.exports = mongoose.model('todoSchema', todoSchema)
