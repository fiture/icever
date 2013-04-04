
/*
 * 整站路由 
 */

//var config = require('../config/');
var controller = require('../controller/');

var routes = function(app){
  app.get('/', controller.index);
  app.get('/post/new', controller.newPost);
  app.get('/post/:postId', controller.postItem);
  //app.all('/upload', controller.uploader);
  //app.get('/login', controller.login)

};

module.exports = routes;
