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
var qs = require('querystring');

var postHTML = "<!DOCTYPE HTML><html><head><title>TEST JS in Chrome</title></head>" +
    "<body><div><p>My First NODE File</p><form method='POST' action='/'></div><div>first Name: <input type='text' name='firstName' /></div>" +
    "<div>last Name: <input type='text' name='lastName' /></div>" +
    "<div><input type='submit' /></div></form>" +
    "</body ></html > ";

var myHttp = http.createServer((req, res) => {

    if (req.method == 'POST') {
        var body = '';
        req.on('data', function (data) {
            body = body + data;
        });
        req.on('end', function () {
            var post = qs.parse(body);
            console.log(JSON.stringify(post));

        })
    }
    else {
        res.end(postHTML);
    }


}).listen(8888);
console.log('we listen to http://127.0.0.1:8888');