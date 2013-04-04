var PostModel = require('../models/post');

var index = function(req, res, next){

  PostModel.find().limit(5).exec(function(err, posts){
    if (err) console.log(error);
    res.render('index', {'title': 'fiture', posts: posts});  
  });
  PostModel.findByPostName('hello-world', function (err, result) {
    console.log(result);
  });
}

var uploader = function(req, res, next){
  var method = req.method.toLowerCase();


  if ( method === 'get' ) {
    res.render('upload', {'title': 'Uploader'});
  } else if ( method === 'post') {
    res.send(req.files);
    console.log(req.files);
  }

};

var postItem = function (req, res, next) {
  var postId = req.params.postId;
  PostModel.findById(postId).exec(function (errr, post) {
    res.render('post', {'title': 'fiture', post: post});  
  });
};

var newPost = function (req, res, next) {
  res.render('new-post', {'title': 'fiture'});
};

exports.index = index;
exports.postItem = postItem;
exports.newPost = newPost;
exports.uploader = uploader;
