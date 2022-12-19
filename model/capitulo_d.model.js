const Mongoose = require('mongoose');
const {ObjectId} = Mongoose.Schema.Types

const capitulo_dSchema = new Mongoose.Schema({
    cap_d_preg_1:{type: String},
    cap_d_preg_2:{type: String},
    cap_d_preg_3:{type: String},
    cap_d_preg_4:{type: String},
    cap_d_preg_5:{type: String},
    cap_d_preg_6:{type: String},
    id:{
        type: ObjectId,
        ref: "capitulo_a"
    },
});

module.exports = Mongoose.model('capitulo_d',capitulo_dSchema);