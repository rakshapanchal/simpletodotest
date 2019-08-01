/**Importing mongoose */
var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var TaskSchema = new Schema({
    title: { type: String, trim: true, required: true },
    description: { type: String },
    date: { type: Date },
    isActive: { type: Boolean, default: true }
})

//Export restaurant module
module.exports = mongoose.model('task', TaskSchema)