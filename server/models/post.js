/*
 *  Mongoose model: PostModel
 *  author: fiture.cn@gmail.com
**/

var mongoose = require('mongoose')
  , PostSchema
  , PostModel;

PostSchema = new mongoose.Schema({
  title: String,
  author: String,
  content: String,
  postname: String,
  tag: Array,
  status: {
    type: Boolean,
    default: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  update: {
    type: Date,
    default: Date.now
  }
});

PostSchema.statics.findByPostName = function (postname, callback) {
  this.findOne({ 'postname': new RegExp(postname, 'i') }, callback);
}

PostModel = mongoose.model('Post', PostSchema);

module.exports = PostModel;