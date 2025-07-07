/*const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true }
});

module.exports = mongoose.model('Author', authorSchema);
*/
/*const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: String
});

module.exports = mongoose.model('Author', authorSchema);
*/
const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    // maybe other fields
});

module.exports = mongoose.model("Author", authorSchema);
