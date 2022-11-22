var express = require('express');
var router = express.Router();
const createError = require('http-errors');
const {jsonResponse}= require('../jsonresponse');

const capitulo_f = require('../model/capitulo_f.model');
console.log(capitulo_f)

router.get('/',async (req, res, next)=>{
    let results={};
    try{
        results = await capitulo_f.find({});
        console.log(results)
    } catch(ex){
        next(createError(500,'Error fetching results'))
    }
    res.json(results)
});

router.post('/',async (req, res, next)=>{
    const {cap_f_preg_23, cap_f_preg_24, cap_f_preg_25, cap_f_preg_26, cap_f_preg_27, cap_f_preg_28, cap_f_preg_29, cap_f_preg_30, cap_f_preg_31, cap_f_preg_32, cap_f_preg_33, cap_f_preg_34, cap_f_preg_35, cap_f_preg_36, cap_f_preg_37, cap_f_preg_38, cap_f_preg_39, cap_f_preg_40, cap_f_preg_41, cap_f_preg_42, cap_f_preg_43, cap_f_preg_44, cap_f_preg_45, cap_f_preg_46, cap_f_preg_47, cap_f_preg_48, cap_f_preg_49}=req.body;
    //if(!cap_f_preg_23){
        //next(createError(400, 'falta completar preguntas'));
      //}else if(cap_f_preg_23){
        try{
            const cap_f = new capitulo_f({cap_f_preg_23, cap_f_preg_24, cap_f_preg_25, cap_f_preg_26, cap_f_preg_27, cap_f_preg_28, cap_f_preg_29, cap_f_preg_30, cap_f_preg_31, cap_f_preg_32, cap_f_preg_33, cap_f_preg_34, cap_f_preg_35, cap_f_preg_36, cap_f_preg_37, cap_f_preg_38, cap_f_preg_39, cap_f_preg_40, cap_f_preg_41, cap_f_preg_42, cap_f_preg_43, cap_f_preg_44, cap_f_preg_45, cap_f_preg_46, cap_f_preg_47, cap_f_preg_48, cap_f_preg_49});
            await cap_f.save();
        }catch(ex){
            next(createError(500, 'Error trying to register the form. Try again.'))
        }
        res.json(jsonResponse(200,{
            message: 'The form has been added successfully'
        }));
      //}
});

router.delete('/delete/:id',async(req,res)=>{
    await Test.deleteOne({_id:req.params.id})
    .then(test=>{
        res.json(test)
    })
    .catch(err=>{
        console.log(err)
    })
})

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