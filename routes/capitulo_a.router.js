var express = require('express');
var router = express.Router();
const createError = require('http-errors');
const {jsonResponse}= require('../jsonresponse');

const capitulo_a = require('../model/capitulo_a.model');
console.log(capitulo_a)

router.get('/',async (req, res, next)=>{
    try{
        const cap_a = await capitulo_a.find()
        res.status(200).json(cap_a)
    } catch(err){
        res.status(500).json({message: err.message })
    }
});

router.post('/',async (req, res)=>{
    const cap_a = new capitulo_a({
        cap_a_preg_1_1:req.body.cap_a_preg_1_1,
        cap_a_preg_1_2:req.body.cap_a_preg_1_2,
        cap_a_preg_1_3:req.body.cap_a_preg_1_3,
        cap_a_preg_1_4:req.body.cap_a_preg_1_4,
        cap_a_preg_1_5:req.body.cap_a_preg_1_5,
        cap_a_preg_1_6:req.body.cap_a_preg_1_6,
        cap_a_preg_1_7:req.body.cap_a_preg_1_7,
        cap_a_preg_2_1:req.body.cap_a_preg_2_1,
        cap_a_preg_2_2:req.body.cap_a_preg_2_2,
        cap_a_preg_2_3:req.body.cap_a_preg_2_3,
        cap_a_preg_2_4:req.body.cap_a_preg_2_4,
        cap_a_preg_2_5:req.body.cap_a_preg_2_5,
        cap_a_preg_2_6:req.body.cap_a_preg_2_6,
        cap_a_preg_2_7:req.body.cap_a_preg_2_7,
        cap_a_preg_2_8:req.body.cap_a_preg_2_8,
        cap_a_preg_3_1:req.body.cap_a_preg_3_1,
        cap_a_preg_3_2:req.body.cap_a_preg_3_2,
        cap_a_preg_4_1:req.body.cap_a_preg_4_1,
        cap_a_preg_4_2:req.body.cap_a_preg_4_2,
        cap_a_preg_4_3:req.body.cap_a_preg_4_3
    });
        try{
            const new_A = await cap_a.save()
        res.status(201).json(new_A) 
        }catch(ex){
            next(createError(500, 'Error trying to register the form. Try again.'))
        }
        res.json(jsonResponse(200,{
            message: 'The form has been added successfully'
        }));
});

router.delete('/delete/:id',async(req,res)=>{
    await capitulo_a.deleteOne({_id:req.params.id})
    .then(capitulo_a=>{
        res.json(capitulo_a)
    })
    .catch(err=>{
        console.log(err)
    })
})

module.exports = router;