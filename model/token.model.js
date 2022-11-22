const { default: mongoose } = require('mongoose');
const Mongoose = require('mongoose');

const TokenSchema = new Mongoose.Schema({
    token: {type: String}
});

module.exports = Mongoose.model('Token', TokenSchema);