const Mongoose = require('mongoose');

const capitulo_bSchema = new Mongoose.Schema({
    cap_b_preg_1:{type: String},
    cap_b_preg_2:{type: String},
    cap_b_preg_3:{type: String},
    cap_b_preg_4:{type: String},
    cap_b_preg_5:{type: String},
    cap_b_preg_6:{type: String},
    cap_b_preg_7:{type: String},
    cap_b_preg_8:{type: String},
    cap_b_preg_9:{type: String},
    cap_b_preg_10:{type: String},
    cap_b_preg_11:{type: String},
    cap_b_preg_12:{type: String},
    cap_b_preg_13:{type: String},
    cap_b_preg_14:{type: String},
    cap_b_preg_15:{type: String},
    cap_b_preg_16:{type: String},
    cap_b_preg_17:{type: String},
    cap_b_preg_18:[{type: String}],
    cap_b_preg_19:{type: String}
});

module.exports = Mongoose.model('capitulo_b',capitulo_bSchema);