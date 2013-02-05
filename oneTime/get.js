var mongoose = require('mongoose');
var postSchema = require('./schema').postSchema;
var postModel = mongoose.model('Post', postSchema);

mongoose.connect('mongodb://localhost/verybus');

postModel
  .find()
  .limit(2)
  .exec(function(err,res){
    console.log(res);
  });
