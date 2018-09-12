var postHTML = "<!DOCTYPE HTML><html><head><title>TEST JS in Chrome</title></head>" +
    "<body><div><p>My First NODE File</p></div></body></html>";

var fs = require('fs');
fs.readFile('info.txt', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
});