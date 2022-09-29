var express = require('express');
var router = express.Router();
const createError = require('http-errors');
const {jsonResponse}= require('../jsonresponse');

const Lunch = require('../model/lunches.model');

router.get('/',async (req, res, next)=>{
    let results={};
    try{
        results = await Lunch.find({}, 'title soup maindish price');
    } catch(ex){
        next(createError(500,'Error fetching results'))
    }
    res.json(200,{
        results
    })
});

router.post('/',async (req, res, next)=>{
    const {title, soup, maindish, price}=req.body;
    if(!title || !price || !maindish){
        next(createError(400, 'Information is missing'));
      }else if(title && price && maindish){
        try{
            const lunch= new Lunch({title, soup, maindish, price});
            await lunch.save();
        }catch(ex){
            next(createError(500, 'Error trying to register the lunch. Try again.'))
        }
        res.json(jsonResponse(200,{
            message: 'The product has been added successfully'
        }));
      }
});

router.get('/:idlunch', async (req, res, next)=>{
    let results={};

    const {idlunch} =req.params;

    if(!idlunch) next(createError(400, 'No ID provided'));
    try{
        results=await Lunch.findById(idlunch, 'title, soup, maindish, price');
    }catch(ex){
        next(createError(500, 'Error trying to fetch the product or ID is incorrect'))
    }

    res.json(jsonResponse(200, {
        idlunch
    }));
});

router.patch('/:idlunch', async(req, res, next)=>{
    let update={};

    const{idlunch}=req.params;
    const{title, soup, maindish, price}=req.body;

    if(!idlunch) next(createError(400, 'No ID provided'));
    if(!title && !maindish && !price) next(createError(400, 'No information available...'));
    if(title) update['title']=title;
    if(soup) update['soup']=soup;
    if(maindish) update['maindish']=maindish;
    if(price) update['price']=price;

    try{
        await Lunch.findByIdAndUpdate(idlunch, update);
    }catch(error){
        next(createError(500, 'Error trying to fecth de lunch or Id is incorrect'));
    }
    res.json(jsonResponse(200,{
        message: 'The lunch ${idlunch} has been updated'
    }));
});

router.delete('/:idlunch', async(req, res, next)=>{
    const {idlunch}=req.params;

    try{
        await Lunch.findByIdAndDelete(idlunch);
    }catch(ex){
        next(createError(500, 'Error trying to delete de lunch or Id is incorrect'));
    }
    res.json(jsonResponse(200,{
        message: 'The lunch ${idlunch} has been deleted'
    }));
});

module.exports = router;