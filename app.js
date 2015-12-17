
var express = require('express');
var app = express();

console.log("lskdjfldskj");


app.get('/', function (req, res) {
	  res.send('hello wworldsldkjf');
})


app.listen(process.env.PORT || 5000);

module.exports = app;
