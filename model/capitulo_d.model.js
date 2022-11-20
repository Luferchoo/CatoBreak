const Mongoose = require('mongoose');

const capitulo_dSchema = new Mongoose.Schema({
    cap_d_preg_21:{type: String},
});

module.exports = Mongoose.model('capitulo_d',capitulo_dSchema);