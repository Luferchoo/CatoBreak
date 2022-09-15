var express = require('express');
var router = express.Router();
const User = require('../model/users.model');


router.get('/', async function(req, res, next) {
  let results = {};

  try {
    results = await User.find({}, 'username password');
  } catch (ex) {
    
  }

  res.json(results)
});

module.exports = router;
