const Mongoose = require('mongoose');

const capitulo_eSchema = new Mongoose.Schema({
    cap_e_preg_22:{type: String, required: true},
});

module.exports = Mongoose.model('capitulo_e',capitulo_eSchema);