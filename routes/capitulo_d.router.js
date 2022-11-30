var express = require('express');
var router = express.Router();
const createError = require('http-errors');
const {jsonResponse}= require('../jsonresponse');

const capitulo_d = require('../model/capitulo_d.model');
console.log(capitulo_d)

router.get('/',async (req, res, next)=>{
    try{
        const cap_d = await capitulo_d.find()
        res.status(200).json(cap_d)
    } catch(err){
        res.status(500).json({message: err.message })
    }
});
//get one
router.get('/one/:id',async(req,res)=>{
    try{
        await capitulo_d.findById(req.params.id)
        .then(tests=>{
            res.status(200).json(tests)
        })
    } catch(err){
        res.status(500).json({message: err.message })
    }
});
/*
router.post('/',async (req, res)=>{
    const cap_d = new capitulo_d({
        cap_d_preg_1:req.body.cap_d_preg_1,
        cap_d_preg_2:req.body.cap_d_preg_2,
        cap_d_preg_3:req.body.cap_d_preg_3,
        cap_d_preg_4:req.body.cap_d_preg_4,
        cap_d_preg_5:req.body.cap_d_preg_5,
        cap_d_preg_6:req.body.cap_d_preg_6
    });
        try{
            const new_D = await cap_d.save()
        res.status(201).json(new_D) 
        }catch(ex){
            next(createError(500, 'Error trying to register the form. Try again.'))
        }
        res.json(jsonResponse(200,{
            message: 'The form has been added successfully'
        }));
});
*/
router.post('/add',(req,res)=>{
    
    const new_D = new capitulo_d({
        cap_d_preg_1:req.body.cap_d_preg_1,
        cap_d_preg_2:req.body.cap_d_preg_2,
        cap_d_preg_3:req.body.cap_d_preg_3,
        cap_d_preg_4:req.body.cap_d_preg_4,
        cap_d_preg_5:req.body.cap_d_preg_5,
        cap_d_preg_6:req.body.cap_d_preg_6,
        id:req.body.id
    });
    new_D.save()
    .then(result => {
        res.json({result})
    })
    .catch(err=>{
        console.log(err)
    })
})

router.delete('/delete/:id',async(req,res)=>{
    await capitulo_d.deleteOne({_id:req.params.id})
    .then(capitulo_d=>{
        res.json(capitulo_d)
    })
    .catch(err=>{
        console.log(err)
    })
})

module.exports = router;