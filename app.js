//blocking
// let fs = require('fs');
// let data = fs.readFileSync('info.txt');
// console.log(data.toString());

//callback
// fs.readFile('info.txt', function (err, data) {
//     if (err) return console.error(err);
//     console.log(data.toString());
// });

//Async-await
// async function readerFile() {
//     await fs.readFile('info.txt', function (err, data) {
//         if (err) return console.error(err);
//         console.log(data.toString());
//     });
// };
// readerFile();
var http = require('http');
var url = require('url');
var postHTML = "<!DOCTYPE HTML><html><head><title>TEST JS in Chrome</title></head>" +
    "<body><div><p>My First NODE File</p><form method='post' action='/'></div><div>first Name: <input type='text' name='firstName' /></div>" +
    "<div>last Name: <input type='text' name='lastName' /></div>" +
    "<div><input type='submit' /></div></form>" +
    "</body ></html > ";

var myHttp = http.createServer((req, res) => {
    var queryString = url.parse(req.url, true).query;
    res.writeHead(200);
    res.write(postHTML);
    res.end();


}).listen(8888);
console.log('we listen to http://127.0.0.1:8888');