const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Books');
const bookSchema = new mongoose.Schema({
    bookName : {type : String}
},{timestamps : true})

const Books = mongoose.model('Books',bookSchema);

module.exports = Books