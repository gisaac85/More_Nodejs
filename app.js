//blocking
let fs = require('fs');

let data = fs.readFileSync('info.txt');

console.log(data.toString());

//callback
fs.readFile('info.txt', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());

});


//Async-await
async function readerFile() {
    await fs.readFile('info.txt', function (err, data) {
        if (err) return console.error(err);
        console.log(data.toString());

    });
};

readerFile();


