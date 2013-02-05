var mongoose = require('mongoose');

exports.postSchema = mongoose.Schema({
  title: String,
  author: String,
  content: String,
  postname: String,
  tag: Array,
  status: { type: Boolean, default: true },
  date: { type: Date, default: Date.now },
  update: { type: Date, default: Date.now }
});
