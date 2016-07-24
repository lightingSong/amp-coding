/**
 * Created by feng.song on 21/07/2016.
 */
var express = require('express');
var path    = require("path");
var app = new express();
var parser= require("body-parser");

var mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/test');
app.use(express.static(path.join(__dirname, '../public/app')));
app.get("/", function(req, res){
    res.sendFile(path.join(__dirname,"../public/app/index.html"));
}).listen(7777);

app.use(parser.json()); // to support JSON-encoded bodies
app.use(parser.urlencoded({extended: false}));  //handle post request,  to support URL-encoded bodies

require('./routes/people.js')(app);


