const Mongoose = require('mongoose');

const capitulo_fSchema = new Mongoose.Schema({
    cap_f_preg_23:{type: String},
    cap_f_preg_24:{type: String},
    cap_f_preg_25:{type: String},
    cap_f_preg_26:{type: String},
    cap_f_preg_27:{type: String},
    cap_f_preg_28:{type: String},
    cap_f_preg_29:{type: String},
    cap_f_preg_30:{type: String},
    cap_f_preg_31:{type: String},
    cap_f_preg_32:{type: String},
    cap_f_preg_33:{type: String},
    cap_f_preg_34:{type: String},
    cap_f_preg_35:{type: String},
    cap_f_preg_36:{type: String},
    cap_f_preg_37:{type: String},
    cap_f_preg_38:{type: String},
    cap_f_preg_39:{type: String},
    cap_f_preg_40:{type: String},
    cap_f_preg_41:{type: String},
    cap_f_preg_42:{type: String},
    cap_f_preg_43:{type: String},
    cap_f_preg_44:{type: String},
    cap_f_preg_45:{type: String},
    cap_f_preg_46:{type: String},
    cap_f_preg_47:{type: String},
    cap_f_preg_48:{type: String},
    cap_f_preg_49:{type: String},
});

module.exports = Mongoose.model('capitulo_f',capitulo_fSchema);