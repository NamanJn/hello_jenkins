var express = require('express');
var app = express();


app.get('/', function (req, res) {
	  res.send('hello jenkins CI !!')
})


app.get('/yo', function (req, res) {
	  res.send('Hey !!')
})


app.get('/yo2', function (req, res) {
	  res.send('Hey this is yo2!!')
})


app.get('/yo3', function (req, res) {
	  res.send('Hey this is yo3!!')
})

app.get('/item4', function (req, res) {
	  res.send('Hey This is item 4!!')
})

app.get('/item5', function (req, res) {
	  res.send('Hey This is item 5!!'+ req.originalUrl)
})

app.get('/item6', function (req, res) {
	  res.send("This is in neowne")
})

app.listen(process.env.PORT || 5000);

module.exports = app;
