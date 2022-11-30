const Mongoose = require('mongoose');
const {ObjectId} = Mongoose.Schema.Types

const capitulo_bSchema = new Mongoose.Schema({
    cap_b_preg_1:{type: String, required:true},
    cap_b_preg_2:{type: String, required:true},
    cap_b_preg_3:{type: String, required:true},
    cap_b_preg_4:{type: String, required:true},
    cap_b_preg_5:{type: String, required:true},
    cap_b_preg_6:{type: String, required:true},
    cap_b_preg_7:{type: String, required:true},
    cap_b_preg_8:{type: String, required:true},
    cap_b_preg_9:{type: String, required:true},
    cap_b_preg_10:{type: String, required:true},
    cap_b_preg_11:{type: String, required:true},
    cap_b_preg_12:{type: String, required:true},
    cap_b_preg_13:{type: String, required:true},
    cap_b_preg_14:{type: String, required:true},
    cap_b_preg_15:{type: String, required:true},
    cap_b_preg_16:{type: String, required:true},
    cap_b_preg_17:[{type: String, required:true}],
    cap_b_preg_18:[{type: String, required:true}],
    cap_b_preg_19:{type: String, required:true},
    id:{
        type: ObjectId,
        ref: "capitulo_a"
    },
});
 
module.exports = Mongoose.model('capitulo_b',capitulo_bSchema);