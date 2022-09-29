var express = require('express');
var router = express.Router();
const createError = require('http-errors');
const {jsonResponse}= require('../jsonresponse');

const Game = require('../model/games.model');

router.get('/',async (req, res, next)=>{
    let results={};
    try{
        results = await Game.find({}, 'gamename price');
    } catch(ex){
        next(createError(500,'Error fetching results'))
    }
    res.json(200,{
        results
    })
});

router.post('/',async (req, res, next)=>{
    const {gamename, price}=req.body;
    if(!gamename || !price){
        next(createError(400, 'Gamename and/or price missing'));
      }else if(gamename && price){
        try{
            const game= new Game({gamename, price});
            await game.save();
        }catch(ex){
            next(createError(500, 'Error trying to register the game. Try again.'))
        }
        res.json(jsonResponse(200,{
            message: 'The product has been added successfully'
        }));
      }
});

router.get('/:idgame', async (req, res, next)=>{
    let results={};

    const {idgame} =req.params;

    if(!idgame) next(createError(400, 'No ID provided'));
    try{
        results=await Game.findById(idgame, 'gamename, price');
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
        await Game.findByIdAndUpdate(idgame, update);
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
        await Game.findByIdAndDelete(idgame);
    }catch(ex){
        next(createError(500, 'Error trying to delete de game or Id is incorrect'));
    }
    res.json(jsonResponse(200,{
        message: 'The game ${idgame} has been deleted'
    }));
});

module.exports = router;