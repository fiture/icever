var mongoose = require('mongoose');
var postModel = require('../server/models/post');

mongoose.connect('mongodb://localhost/verybus');

postModel
  .find()
  .limit(2)
  .exec(function(err,res){
    console.log(res);
  });
