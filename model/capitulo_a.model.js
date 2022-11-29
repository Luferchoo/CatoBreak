const Mongoose = require('mongoose');

const capitulo_aSchema = new Mongoose.Schema({
    cap_a_preg_1_1:{type: String},
    cap_a_preg_1_2:{type: String},
    cap_a_preg_1_3:{type: String},
    cap_a_preg_1_4:{type: String},
    cap_a_preg_1_5:{type: String},
    cap_a_preg_1_6:{type: String},
    cap_a_preg_1_7:{type: String},
    
    cap_a_preg_2_1:{type: String},
    cap_a_preg_2_2:{type: String},
    cap_a_preg_2_3:{type: String},
    cap_a_preg_2_4:{type: String},
    cap_a_preg_2_5:{type: String},
    cap_a_preg_2_6:{type: String},
    cap_a_preg_2_7:{type: String},
    cap_a_preg_2_8:{type: String},

    cap_a_preg_3_1:{type: String},
    cap_a_preg_3_2:{type: String},

    cap_a_preg_4_1:{type: String},
    cap_a_preg_4_2:{type: String},
    cap_a_preg_4_3:{type: String}
});

module.exports = Mongoose.model('capitulo_a',capitulo_aSchema);