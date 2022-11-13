const Mongoose = require('mongoose');

const capitulo_fSchema = new Mongoose.Schema({
    cap_f_preg_23:{type: String, required: true},
});

module.exports = Mongoose.model('capitulo_f',capitulo_fSchema);