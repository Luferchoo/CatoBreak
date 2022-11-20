const Mongoose = require('mongoose');

const capitulo_aSchema = new Mongoose.Schema({
    cap_a_preg_1_1:{type: String},
    cap_a_preg_1_2:{type: String},
    cap_a_preg_2_1:{type: String},
    cap_a_preg_2_2:{type: String},
    cap_a_preg_3:{type: String}
});

module.exports = Mongoose.model('capitulo_a',capitulo_aSchema);