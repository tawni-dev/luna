var express = require('express');
var app = express();
var port = 3000;
var massive = require('massive');
var connectionString = "postgres://massive:password@localhost/luna-lumiere";

app.listen(port, function() {
  console.log('listening on port', port)
})

app.use(express.static(__dirname + './../public'));


app.set('db', massive);

var db = app.get('db');
