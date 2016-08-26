var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

app.get('/', function (req, res) {
   res.send('Hello World');
});

app.get('/my/get', function (req, res) {
   res.send('get:' + req.query.txt1);
});

app.post('/my/post', function (req, res) {
   res.send('post:' + req.body.txt1);
});

var server = app.listen(8888, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log("应用实例，访问地址为 http://%s:%s", host, port);
});