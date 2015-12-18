var express = require('express');
var app = express();


app.get('/', function (req, res) {
	  res.send('hello jenkins CI !!')
})


app.get('/yo', function (req, res) {
	  res.send('Hey !!')
})


app.listen(process.env.PORT || 5000);

module.exports = app;
