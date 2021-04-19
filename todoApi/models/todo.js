const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const todoSchema  = new Schema({
    title:String,
    date:String,
    completed:String,
});
module.exports = mongoose.model("todo",todoSchema);