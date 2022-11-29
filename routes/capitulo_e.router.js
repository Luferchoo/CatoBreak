var express = require('express');
var router = express.Router();
const createError = require('http-errors');
const {jsonResponse}= require('../jsonresponse');

const capitulo_e = require('../model/capitulo_e.model');
console.log(capitulo_e)

router.get('/',async (req, res, next)=>{
    try{
        const cap_e = await capitulo_e.find()
        res.status(200).json(cap_e)
    } catch(err){
        res.status(500).json({message: err.message })
    }
});

router.post('/',async (req, res)=>{
    const cap_e = new capitulo_e({
        cap_e_preg_1:req.body.cap_e_preg_1,
        cap_e_preg_2:req.body.cap_e_preg_2,
        cap_e_preg_3:req.body.cap_e_preg_3,
        cap_e_preg_4:req.body.cap_e_preg_4,
        cap_e_preg_5:req.body.cap_e_preg_5
    });
        try{
            const new_E = await cap_e.save()
        res.status(201).json(new_E) 
        }catch(ex){
            next(createError(500, 'Error trying to register the form. Try again.'))
        }
        res.json(jsonResponse(200,{
            message: 'The form has been added successfully'
        }));
});

router.delete('/delete/:id',async(req,res)=>{
    await capitulo_e.deleteOne({_id:req.params.id})
    .then(capitulo_e=>{
        res.json(capitulo_e)
    })
    .catch(err=>{
        console.log(err)
    })
})

module.exports = router;