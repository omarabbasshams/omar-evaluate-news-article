// require valid url libary to check the input is url or not
var validUrl = require("valid-url");
// select div to put response if user input wrong url
const error = document.getElementById("noturl");
//function check the url
export var check = (url) => {
  // select table tabs to remove data to recive new data
  error.innerHTML = "";
  agreement.innerHTML = "";
  subjectivity.innerHTML = "";
  confidence.innerHTML = "";
  irony.innerHTML = "";
  score_tag.innerHTML = "";
  if (validUrl.isUri(url)) {
    client.handelrequest(url);
  } else {
    error.innerHTML = "Not a URI";
    return "Not a URI";
  }
};
