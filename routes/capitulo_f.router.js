var express = require('express');
var router = express.Router();
const createError = require('http-errors');
const {jsonResponse}= require('../jsonresponse');

const capitulo_f = require('../model/capitulo_f.model');
console.log(capitulo_f)

router.get('/',async (req, res, next)=>{
    try{
        const cap_f = await capitulo_f.find()
        res.status(200).json(cap_f)
    } catch(err){
        res.status(500).json({message: err.message })
    }
});

router.post('/',async (req, res)=>{
    const cap_f = new capitulo_f({
        cap_f_preg_1:req.body.cap_f_preg_1,
        cap_f_preg_2:req.body.cap_f_preg_2,
        cap_f_preg_3:req.body.cap_f_preg_3,
        cap_f_preg_4:req.body.cap_f_preg_4,
        cap_f_preg_5:req.body.cap_f_preg_5,
        cap_f_preg_6:req.body.cap_f_preg_6,
        cap_f_preg_7:req.body.cap_f_preg_7,
        cap_f_preg_8:req.body.cap_f_preg_8,
        cap_f_preg_9:req.body.cap_f_preg_9,
        cap_f_preg_10:req.body.cap_f_preg_10,
        cap_f_preg_11:req.body.cap_f_preg_11,
        cap_f_preg_12:req.body.cap_f_preg_12,
        cap_f_preg_13:req.body.cap_f_preg_13,
        cap_f_preg_14:req.body.cap_f_preg_14,
        cap_f_preg_15:req.body.cap_f_preg_15,
        cap_f_preg_16:req.body.cap_f_preg_16,
        cap_f_preg_17:req.body.cap_f_preg_17,
        cap_f_preg_18:req.body.cap_f_preg_18
    });
        try{
            const new_F = await cap_f.save()
        res.status(201).json(new_F) 
        }catch(ex){
            next(createError(500, 'Error trying to register the form. Try again.'))
        }
        res.json(jsonResponse(200,{
            message: 'The form has been added successfully'
        }));
});

router.delete('/delete/:id',async(req,res)=>{
    await capitulo_f.deleteOne({_id:req.params.id})
    .then(capitulo_f=>{
        res.json(capitulo_f)
    })
    .catch(err=>{
        console.log(err)
    })
})

module.exports = router;