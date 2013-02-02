var index = function(req, res, next){
  res.render('index', {'title': 'Express'});  
}

exports.index = index;
