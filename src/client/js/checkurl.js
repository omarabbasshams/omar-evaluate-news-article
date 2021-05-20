// require valid url libary to check the input is url or not
var validUrl = require("valid-url");
// select div to put response if user input wrong url
const error = document.getElementById("noturl");
//function check the url
export var check = (url) => {
  // select table tabs to remove data to recive new data

  if (validUrl.isUri(url)) {
    return 1;
  } else {
    return 0;
  }
};
// module.exports = check;
