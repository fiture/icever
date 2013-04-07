var UserModel = require('../models/user');

exports.signup = signup;
exports.login = login;
exports.logout = logout;

function signup (req, res, next) {
  var method = req.method;
  switch (method) {
    case 'GET':
      res.render('signup', {'title':'signup | fiture'});
    break;
    case 'POST':
      var user = new UserModel(req.body);
      user.save(function () {
        res.send(req.body);
      });
    break;
  }
}

function login (req, res, next) {
  switch (req.method) {
    case 'GET':
      res.render('login', {'title':'login | fiture'});
    break;
    case 'POST':
      var data = req.body
        , email = data.email
        , password = data.password;

      UserModel.findOne({'email': email, 'password': password}, function (err, user) {
        if ( user ) {
          req.session.user = user;
          res.redirect('/');
        } else {
          res.redirect('/login');
        }
      });
    break;

  }
}

function logout (req, res) {
  req.session.regenerate(function () {
    res.redirect('/login'); 
  });
}