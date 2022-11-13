const Mongoose = require('mongoose');

const capitulo_cSchema = new Mongoose.Schema({
    cap_c_preg_20:{type: String, required: true},
});

module.exports = Mongoose.model('capitulo_c',capitulo_cSchema);