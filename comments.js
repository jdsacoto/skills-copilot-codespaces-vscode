// Create web server...
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');

// Create body parser...
var jsonParser = bodyParser.json();

// Create server...
var server = app.listen(3000, function () {
    console.log('Server running at http://
