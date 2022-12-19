var express = require('express');
var router = express.Router();
const createError = require('http-errors');
const {jsonResponse}= require('../jsonresponse');

const User = require('../model/users.model');


router.get('/', async function(req, res, next) {
  let results = {};

  try {
    results = await User.find({}, 'username password type');
  } catch (ex) {
    
  }

  res.json(results)
});

router.post('/', async function(req,res, next){
  //console.log("XD")
  const {username, password, type}= req.body;

  if(!username || !password || !type){
    next(createError(400, 'Username, password and/or type missing'));
  }else if(username && password && type ){
    const user= new User({username, password, type});

    const exists = await user.usernameExists(username);

    if(exists){
      next(createError(400, 'User name is taken. Try again'));
    }else{
      await user.save();
      res.json(jsonResponse(200, {
        message: 'User created successfully'
      }));
    }
  }
});

router.patch('/update',async(req,res)=>{
  await User.findOneAndUpdate(
      { _id : mongoose.Types.ObjectId(req.body.id)},
      { $set:{
          username:req.body.username,
          type:req.body.type
      }}
  ,{
      new:true
  }).exec((err,result)=>{
      if(err){
          return res.status(422).json({error:err})
      }else{
          res.status(200).json(result)
      }
  })
})

router.delete('/delete/:id',async(req,res)=>{
  await User.deleteOne({_id:req.params.id})
  .then(user=>{
      res.json(user)
  })
  .catch(err=>{
      console.log(err)
  })
})

// update Password
router.patch('/updatepassword',async(req,res)=>{
  await User.findOneAndUpdate(
      { _id : mongoose.Types.ObjectId(req.body.id)},
      { $set:{
          password:req.body.password
      }}
  ,{
      new:true
  }).exec((err,result)=>{
      if(err){
          return res.status(422).json({error:err})
      }else{
          res.status(200).json(result)
      }
  })
})

module.exports = router;
