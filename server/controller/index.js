var index = function(req, res, next){
  res.render('index', {'title': 'Express'});  
}

var uploader = function(req, res, next){
  var method = req.method.toLowerCase();

  console.log(method);

  if ( method === 'get' ) {
    res.render('upload', {'title': 'Uploader'});
  } else if ( method === 'post') {
    console.log(req.body);
    res.send(req.files + 'post');
  }

};

exports.index = index;
exports.uploader = uploader;
