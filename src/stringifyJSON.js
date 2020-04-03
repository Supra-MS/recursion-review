// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

  var result = '';
  // Test for number, boolean, null
  if (typeof obj === 'number' || typeof obj === 'boolean' || obj === null) {
    return '' + obj;
  }
  // Test for String
  if (typeof obj === 'string') {
    return `"${obj}"`;
  }

  // Test for Array
  //iterate through array
  //add result of each element to the string
  // take into account opening and closing bracket
  if (Array.isArray(obj)) {
    var strArray = [];
    for (var i = 0; i < obj.length; i++) {
      strArray.push(stringifyJSON(obj[i]));
    }
    result = strArray.join();

    //add '[' at beginning of string and ']'
    result = '[' + result + ']';
  }

  if (!Array.isArray(obj)) {
    var objArray = [];
    for (var key in obj) {
      if (typeof obj[key] === "function" || obj[key] === undefined) {
        continue;
      }
      objArray.push(stringifyJSON(key) + ":" + stringifyJSON(obj[key]));
    }
    result = objArray.join();

    //add '[' at beginning of string and ']'
    result = '{' + result + '}';

  }
  return result;
};
