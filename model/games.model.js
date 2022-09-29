const Mongoose = require('mongoose');

const GameSchema = new Mongoose.Schema({
    gamename:{type: String, required: true},
    price:{type: String, required: true}
});

module.exports = Mongoose.model('Game',GameSchema);