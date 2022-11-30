const Mongoose = require('mongoose');

const capitulo_eSchema = new Mongoose.Schema({
    cap_e_preg_1:{type: String},
    cap_e_preg_2:{type: String},
    cap_e_preg_3:{type: String},
    cap_e_preg_4:{type: String},
    cap_e_preg_5:[{type: String}],
    id:{
        type: ObjectId,
        ref: "capitulo_a"
    },
});

module.exports = Mongoose.model('capitulo_e',capitulo_eSchema);