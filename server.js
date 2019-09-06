var express = require('express');
var app = express();

// trying to fix problems with css links 
app.use(express.static('css'));
app.use(express.static('assets'));

// Pug declarations
app.set('view engine', 'pug');
app.set('views','./views');

app.get('/', function(req, res){
    res.render('login', {
        title: "Dummy login app",
        url: "/auth/google",
    });
});

app.get('/auth/google', function (req, res) {
    res.render('logged', {
        user: {
            first_name: req.query.first_name,
            last_name: req.query.last_name
        }
    });
});



app.listen(3000)