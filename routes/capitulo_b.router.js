var express = require('express');
var router = express.Router();
const createError = require('http-errors');
const {jsonResponse}= require('../jsonresponse');

const capitulo_b = require('../model/capitulo_b.model');
console.log(capitulo_b)
router.get('/',async (req, res, next)=>{
    let results={};
    try{
        results = await capitulo_b.find({});
        console.log(results)
    } catch(ex){
        next(createError(500,'Error fetching results'))
    }
    res.json(results)
});

router.post('/',async (req, res, next)=>{
    const {cap_b_preg_1, cap_b_preg_2, cap_b_preg_3, cap_b_preg_4, cap_b_preg_5, cap_b_preg_6, cap_b_preg_7, cap_b_preg_8, cap_b_preg_9, cap_b_preg_10, cap_b_preg_11, cap_b_preg_12, cap_b_preg_13, cap_b_preg_14, cap_b_preg_15, cap_b_preg_16, cap_b_preg_17, cap_b_preg_18, cap_b_preg_19}=req.body;
    //if(!cap_b_preg_1 || !cap_b_preg_2 || !cap_b_preg_3 || !cap_b_preg_4 || !cap_b_preg_5 || !cap_b_preg_6 || !cap_b_preg_7 || !cap_b_preg_8 || !cap_b_preg_9 || !cap_b_preg_10 || !cap_b_preg_11 || !cap_b_preg_12 || !cap_b_preg_13 || !cap_b_preg_14 || !cap_b_preg_15 || !cap_b_preg_16 || !cap_b_preg_17 || !cap_b_preg_18 || !cap_b_preg_19 ){
      //  next(createError(400, 'falta completar preguntas'));
     // }else if(cap_b_preg_1 && cap_b_preg_2 && cap_b_preg_3 && cap_b_preg_4 && cap_b_preg_5 && cap_b_preg_6 && cap_b_preg_7 && cap_b_preg_8 && cap_b_preg_9 && cap_b_preg_10 && cap_b_preg_11 && cap_b_preg_12 && cap_b_preg_13 && cap_b_preg_14 && cap_b_preg_15 && cap_b_preg_16 && cap_b_preg_17 && cap_b_preg_18 && cap_b_preg_19 ){
        try{
            //const cap_a = new capitulo_b({cap_b_preg_1, cap_b_preg_2, cap_b_preg_3, cap_b_preg_4, cap_b_preg_5, cap_b_preg_6, cap_b_preg_7, cap_b_preg_8, cap_b_preg_9, cap_b_preg_10, cap_b_preg_11, cap_b_preg_12, cap_b_preg_13, cap_b_preg_14, cap_b_preg_15, cap_b_preg_16, cap_b_preg_17, cap_b_preg_18, cap_b_preg_19});
            const cap_a = new capitulo_b({cap_b_preg_1});
            await cap_a.save();
        }catch(ex){
            next(createError(500, 'Error trying to register the form. Try again.'))
        }
        res.json(jsonResponse(200,{
            message: 'The form has been added successfully'
        }));
      //}
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