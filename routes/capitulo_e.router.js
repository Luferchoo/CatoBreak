var express = require('express');
var router = express.Router();
const createError = require('http-errors');
const {jsonResponse}= require('../jsonresponse');

const capitulo_e = require('../model/capitulo_e.model');
console.log(capitulo_e)
router.get('/',async (req, res, next)=>{
    let results={};
    try{
        results = await capitulo_e.find({});
        console.log(results)
    } catch(ex){
        next(createError(500,'Error fetching results'))
    }
    res.json(results)
});

router.post('/',async (req, res, next)=>{
    const {cap_e_preg_22}=req.body;
    if(!cap_e_preg_22){
        next(createError(400, 'falta completar preguntas'));
      }else if(cap_e_preg_22){
        try{
            const cap_e = new capitulo_e({cap_e_preg_22});
            await cap_e.save();
        }catch(ex){
            next(createError(500, 'Error trying to register the form. Try again.'))
        }
        res.json(jsonResponse(200,{
            message: 'The form has been added successfully'
        }));
      }
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