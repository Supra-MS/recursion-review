// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function (className, node
) {

  var resultArray = [];
  node = node || document.body;

  if (node.classList) {
    for (var j = 0; j < node.classList.length; j++) {
      if (node.classList[j] === className) {
        resultArray.push(node);
      }
    }
  }

  if (node.hasChildNodes) {
    for (var i = 0; i < node.childNodes.length; i++) {
      resultArray = resultArray.concat(getElementsByClassName(className, node.childNodes[i]));
    }
  }

  return resultArray;

};