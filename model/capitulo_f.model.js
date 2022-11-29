const Mongoose = require('mongoose');

const capitulo_fSchema = new Mongoose.Schema({
    cap_f_preg_1:{type: String},
    cap_f_preg_2:{type: String},
    cap_f_preg_3:{type: String},
    cap_f_preg_4:{type: String},
    cap_f_preg_5:{type: String},
    cap_f_preg_6:{type: String},
    cap_f_preg_7:{type: String},
    cap_f_preg_8:{type: String},
    cap_f_preg_9:{type: String},
    cap_f_preg_10:{type: String},
    cap_f_preg_11:{type: String},
    cap_f_preg_12:{type: String},
    cap_f_preg_13:{type: String},
    cap_f_preg_14:{type: String},
    cap_f_preg_15:{type: String},
    cap_f_preg_16:{type: String},
    cap_f_preg_17:{type: String},
    cap_f_preg_18:{type: String}
});

module.exports = Mongoose.model('capitulo_f',capitulo_fSchema);