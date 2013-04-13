
/*
 * 整站路由 
 */

//var config = require('../config/');
var controller = require('../controller/');

var routes = function(app){
  app.get('/', controller.index);
  app.get('/post/new', controller.auth, controller.newPost);
  app.post('/post/new', controller.newPost);
  app.get('/post/:postId/delete', controller.deletePost);
  app.get('/post/:postId', controller.postItem);
  app.get('/post/:postName', controller.postItem);
  app.get('/signup', controller.signup);
  app.post('/signup', controller.signup);
  app.get('/login', controller.login);
  app.post('/login', controller.login);

  app.get('/logout', controller.logout);

};

module.exports = routes;