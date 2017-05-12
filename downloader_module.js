var http = require('http');
var fs = require('fs');
const https = require('https');

var https_download =function (url, dest,file,cb){
  var request = https.get(url, function(response) {
    response.pipe(file);
    //console.log(response);
    file.on('finish', function() {
      file.close(cb({"ok":1}));  // close() is async, call cb after close completes.
    });
  }).on('error', function(err) { // Handle errors
    fs.unlink(dest); // Delete the file async. (But we don't check the result)
    if (cb) cb(err.message);
  });
}

var http_download = function  (url, dest,file,cb){
  var request = http.get(url, function(response) {
    response.pipe(file);
    //console.log(response);
    file.on('finish', function() {
      file.close(cb({"ok":2}));  // close() is async, call cb after close completes.
    });
  }).on('error', function(err) { // Handle errors
    fs.unlink(dest); // Delete the file async. (But we don't check the result)
    if (cb) cb(err.message);
  });
}

var download = function(url, dest,cb) {
  var check = url.split(':')[0];
  var re_mod =true;
  if(check == 'http'){
    re_mod =false;
  }
  var filename=url.split('/').pop().split('#')[0].split('?')[0];
  if(filename.indexOf(':')!= -1){
   filename = filename.split(':')[1];
  }
  dest=dest+""+filename;
  var file = fs.createWriteStream(dest);
    if(re_mod){
https_download(url,dest,file,cb)
// return "https_ok"
}else{
http_download(url,dest,file,cb)
// return "http_ok"
 }

};

module.exports = download
