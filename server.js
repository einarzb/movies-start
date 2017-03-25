//package and module requirements
var express = require('express');
var app = express();

//middleware
app.use(express.static('node_modules'));
app.use(express.static('public'));


app.listen(3030, function() {
  console.log("movie project. Listening on 3030.")
});