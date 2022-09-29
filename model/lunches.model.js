const Mongoose = require('mongoose');

const LunchesSchema = new Mongoose.Schema({
    title:{type: String, required: true},
    soup:{type: String},
    maindish:{type: String, required: true},
    price:{type: String, required: true}
});

module.exports = Mongoose.model('Lunch',LunchesSchema);