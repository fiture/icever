var user = require('./user')
  , async = require('async')
  , auth = require('./auth')
  , utils = require('../utils')
  , PostModel = require('../models/post');

exports.index = index;
exports.postItem = postItem;
exports.newPost = newPost;
exports.uploader = uploader;
exports.deletePost = deletePost;
exports.auth = auth;

exports.signup = user.signup;
exports.login = user.login;
exports.logout = user.logout;

function index (req, res, next){
  var data = {'title': 'fiture', req: req};

  async.waterfall([
    function getCount (cb) {
      PostModel.count(function (err, count) {
        data.count = count; 
        cb(err, data);
      });
    },

    function getPostList (data, cb) {
      PostModel
      .find()
      .sort({date: -1})
      .limit(10)
      .exec(function(err, posts){
        data.posts = posts;
        cb(err, data);
      });

    }
    
  ], function (err, data) {
    res.render('index', data);  
  });
}

function uploader (req, res, next){
  var method = req.method.toLowerCase();


  if ( method === 'get' ) {
    res.render('upload', {'title': 'Uploader'});
  } else if ( method === 'post') {
    res.send(req.files);
    console.log(req.files);
  }

};

function postItem (req, res, next) {
  var postName = req.params.postName;
  PostModel.findByPostName(postName, function (err, post) {
    if (err) return res.send(err);
    res.render('post', {'title': 'fiture', post: post, req: req});
  });
};

function newPost (req, res, next) {
  var method = req.method;
  switch (method) {
    case 'GET':
      var data = {title: 'fiture'}
        , postname = utils.randomString();
      
      data.postname = postname;

      res.render('new-post', data);
    break;

    case 'POST':
      var post
        , data = req.body
        , user = req.session.user;

      data.author = user;
      data.postname = data.postname || utils.randomString();

      post = new PostModel( data );

      post.save(function (err) {
        if (err) return res.send(err);
        res.redirect('/');
      });
    break;

    default:
    break;
  }
}

function deletePost (req, res, next) {
  var postId = req.params.postId;
  PostModel.findByIdAndRemove(postId, function (data) {
    res.redirect('/');
  });
}
