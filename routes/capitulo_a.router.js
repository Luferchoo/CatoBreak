var express = require('express');
var router = express.Router();
const createError = require('http-errors');
const {jsonResponse}= require('../jsonresponse');

const capitulo_a = require('../model/capitulo_a.model');
console.log(capitulo_a)
router.get('/',async (req, res, next)=>{
    let results={};
    try{
        results = await capitulo_a.find({});
        console.log(results)
    } catch(ex){
        next(createError(500,'Error fetching results'))
    }
    res.json(results)
});

router.post('/',async (req, res, next)=>{
    const {cap_a_preg_1_1, cap_a_preg_1_2, cap_a_preg_2_1, cap_a_preg_2_2, cap_a_preg_3}=req.body;
    //if(!cap_a_preg_1_1 || !cap_a_preg_1_2 || !cap_a_preg_2_1 || !cap_a_preg_2_2 || !cap_a_preg_3 ){
        //next(createError(400, 'falta completar preguntas'));
      //}else if(cap_a_preg_1_1 && cap_a_preg_1_2 && cap_a_preg_2_1 && cap_a_preg_2_2 && cap_a_preg_3){
        try{
            const cap_a = new capitulo_a({cap_a_preg_1_1, cap_a_preg_1_2, cap_a_preg_2_1, cap_a_preg_2_2, cap_a_preg_3});
            await cap_a.save();
        }catch(ex){
            next(createError(500, 'Error trying to register the form. Try again.'))
        }
        res.json(jsonResponse(200,{
            message: 'The form has been added successfully'
        }));
     // }
});
/*
router.patch('/update',async(req,res)=>{
    await Test.findOneAndUpdate(
        { _id : mongoose.Types.ObjectId(req.body.id)},
        { $set:{
            cap_a
        }}
    ,{
        new:true
    }).exec((err,result)=>{
        if(err){
            return res.status(422).json({error:err})
        }else{
            res.status(200).json(result)
        }
    })
})
*/
router.delete('/delete/:id',async(req,res)=>{
    await Test.deleteOne({_id:req.params.id})
    .then(test=>{
        res.json(test)
    })
    .catch(err=>{
        console.log(err)
    })
})

module.exports = router;