exports.randomString = randomString;

function randomString (length) { 
  var str = ''
    , maxLength = parseInt(length) || 6
    , chars = '0123456789abcdefghijklmnopqrstuvwxyz';

  while ( str.length !== maxLength ) {
    var random = Math.floor( Math.random() * chars.length ); 
    str += chars[random];
  }

  return str;
}