var express = require('express');
var router = express.Router();
const createError = require('http-errors');
const {jsonResponse}= require('../jsonresponse');

const capitulo_b = require('../model/capitulo_b.model');
console.log(capitulo_b)

router.get('/',async (req, res, next)=>{
    try{
        const capitulo_b = await capitulo_b.find()
        res.status(200).json(tests)
    } catch(err){
        res.status(500).json({message: err.message })
    }
});
/*
//get one
router.get('/one/:id',async(req,res)=>{
    try{
        await capitulo_b.findById(req.params.id)
        .then(tests=>{
            res.status(200).json(tests)
        })
    } catch(err){
        res.status(500).json({message: err.message })
    }
})*/

router.post('/',async (req, res)=>{
    const cap_b = new capitulo_b({
        cap_b_preg_1:req.body.cap_b_preg_1,
        cap_b_preg_2:req.body.cap_b_preg_2,
        cap_b_preg_3:req.body.cap_b_preg_3,
        cap_b_preg_4:req.body.cap_b_preg_4,
        cap_b_preg_5:req.body.cap_b_preg_5,
        cap_b_preg_6:req.body.cap_b_preg_6,
        cap_b_preg_7:req.body.cap_b_preg_7,
        cap_b_preg_8:req.body.cap_b_preg_8,
        cap_b_preg_9:req.body.cap_b_preg_9,
        cap_b_preg_10:req.body.cap_b_preg_10,
        cap_b_preg_11:req.body.cap_b_preg_11,
        cap_b_preg_12:req.body.cap_b_preg_12,
        cap_b_preg_13:req.body.cap_b_preg_13,
        cap_b_preg_14:req.body.cap_b_preg_14,
        cap_b_preg_15:req.body.cap_b_preg_15,
        cap_b_preg_16:req.body.cap_b_preg_16,
        cap_b_preg_17:req.body.cap_b_preg_17,
        cap_b_preg_18:req.body.cap_b_preg_18,
        cap_b_preg_19:req.body.cap_b_preg_19
    });
        try{
            const new_B = await cap_b.save()
        res.status(201).json(new_B) 
        }catch(ex){
            next(createError(500, 'Error trying to register the form. Try again.'))
        }
        res.json(jsonResponse(200,{
            message: 'The form has been added successfully'
        }));
});

router.delete('/delete/:id',async(req,res)=>{
    await capitulo_b.deleteOne({_id:req.params.id})
    .then(capitulo_b=>{
        res.json(capitulo_b)
    })
    .catch(err=>{
        console.log(err)
    })
})

module.exports = router;