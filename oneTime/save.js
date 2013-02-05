var mongoose = require('mongoose');
var postSchema = require('./schema').postSchema;
var postModel = mongoose.model('Post', postSchema);

mongoose.connect('mongodb://localhost/verybus');


for (var i=0; i<10; i++) {
  var post = new postModel({
    title: 'hello world!'+i,
    author: 'fiture',
    content: 'hello, world!',
    postname: 'hello-world'
  });

  post.save(function (err, item) {
    console.log(item.title);
  });
  console.log(i);
}
