var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var app = express();
var stringifyFile;

app.use(bodyParser.json());

app.get('/getNote', function (req, res) {
    fs.readFile('./package.json', 'utf8', function (err, data) {
        if (err) throw err;
        stringifyFile = data
        res.send(data);

        console.log('File served');
    });
});

app.post('/updateNote/:note', function (req, res) {
    fs.readFile('./package.json', 'utf8', function (err, data) {
        stringifyFile = data + req.params.note;
        fs.writeFile('./package_update.json', stringifyFile, function (err) {
            if (err) throw err;
            stringifyFile = req.params.note;
            res.send(stringifyFile);
            console.log('File updated by string: ' + req.params.note);
        });
    });
});

app.listen(3000);



/*app.get('/', function(req, res){
    res.send('main page - to get .json file put localhost:3000/getNote. To update .json put localhost:3000/updateNote:yourtext');
});

app.get('/getNote', function(req, res){
    fs.readFile('./package.json', 'utf8', function(err, data) {
        if (err) throw err;
        stringifyFile = data
        res.send(data);
    });
});

app.post('/updateNote/:note', function (req, res) {
    fs.readFile('./package.json', 'utf8', function (err, data) {
        stringifyFile += req.params.note;
        fs.writeFile('./test.json', stringifyFile, function (err) {
            if (err) throw err;
            stringifyFile = req.params.note;
            res.send(stringifyFile);
            console.log('File updated');
        });
    });
});
*/


