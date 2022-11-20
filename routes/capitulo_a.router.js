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
router.get('/:idgame', async (req, res, next)=>{
    let results={};

    const {idgame} =req.params;

    if(!idgame) next(createError(400, 'No ID provided'));
    try{
        results=await capitulo_a.findById(idgame, 'gamename, price');
    }catch(ex){
        next(createError(500, 'Error trying to fetch the product or ID is incorrect'))
    }

    res.json(jsonResponse(200, {
        idgame
    }));
});

router.patch('/:idgame', async(req, res, next)=>{
    let update={};

    const{idgame}=req.params;
    const{gamename, price}=req.body;

    if(!idgame) next(createError(400, 'No ID provided'));
    if(!gamename && !price) next(createError(400, 'No information available...'));
    if(gamename) update['gamename']=gamename;
    if(price) update['price']=price;

    try{
        await capitulo_a.findByIdAndUpdate(idgame, update);
    }catch(error){
        next(createError(500, 'Error trying to fecth de game or Id is incorrect'));
    }
    res.json(jsonResponse(200,{
        message: 'The game ${idgame} has been updated'
    }));
});

router.delete('/:idgame', async(req, res, next)=>{
    const {idgame}=req.params;

    try{
        await capitulo_a.findByIdAndDelete(idgame);
    }catch(ex){
        next(createError(500, 'Error trying to delete de game or Id is incorrect'));
    }
    res.json(jsonResponse(200,{
        message: 'The game ${idgame} has been deleted'
    }));
});*/

module.exports = router;