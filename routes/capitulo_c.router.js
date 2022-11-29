var express = require('express');
var router = express.Router();
const createError = require('http-errors');
const {jsonResponse}= require('../jsonresponse');

const capitulo_c = require('../model/capitulo_c.model');
console.log(capitulo_c)

router.get('/',async (req, res, next)=>{
    try{
        const cap_c = await capitulo_c.find()
        res.status(200).json(cap_c)
    } catch(err){
        res.status(500).json({message: err.message })
    }
});

router.post('/',async (req, res)=>{
    const cap_c = new capitulo_c({
        cap_c_preg_1:req.body.cap_c_preg_1,
        cap_c_preg_2:req.body.cap_c_preg_2,
        cap_c_preg_3:req.body.cap_c_preg_3,
        cap_c_preg_4:req.body.cap_c_preg_4,
        cap_c_preg_5:req.body.cap_c_preg_5,
        cap_c_preg_6:req.body.cap_c_preg_6
    });
        try{
            const new_C = await cap_c.save()
        res.status(201).json(new_C) 
        }catch(ex){
            next(createError(500, 'Error trying to register the form. Try again.'))
        }
        res.json(jsonResponse(200,{
            message: 'The form has been added successfully'
        }));
});

router.delete('/delete/:id',async(req,res)=>{
    await capitulo_c.deleteOne({_id:req.params.id})
    .then(capitulo_c=>{
        res.json(capitulo_c)
    })
    .catch(err=>{
        console.log(err)
    })
})

module.exports = router;