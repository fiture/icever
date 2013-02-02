
/*
 * 整站路由 
 */

//var config = require('../config/');
var controller = require('../controller/');

var routes = function(app){
  app.get('/', controller.index);
};

module.exports = routes;
