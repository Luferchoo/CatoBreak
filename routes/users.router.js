var express = require('express');
var router = express.Router();
const createError = require('http-errors');
const {jsonResponse}= require('../jsonresponse');

const User = require('../model/users.model');


router.get('/', async function(req, res, next) {
  let results = {};

  try {
    results = await User.find({}, 'username password');
  } catch (ex) {
    
  }

  res.json(results)
});

router.post('/', async function(req,res, next){
  //console.log("XD")
  const {username, password}= req.body;

  if(!username || !password){
    next(createError(400, 'Username and/or password missing'));
  }else if(username && password){
    const user= new User({username, password});

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

module.exports = router;
