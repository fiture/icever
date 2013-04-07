/*
 *  Mongoose model: UserModel
 *  author: fiture.cn@gmail.com
**/

var mongoose = require('mongoose')
  , UserSchema
  , UserModel;

UserSchema = new mongoose.Schema({
  email: String,
  nickname: String,
  password: String,
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

UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;