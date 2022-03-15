var mongoose = require('mongoose');

var luxurySchema = mongoose.Schema({
    name:String,
    rating:Number
})

module.exports = mongoose.model("luxurys",luxurySchema)
