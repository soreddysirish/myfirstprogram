var express = require('express')
var app = express()
var ejs = require('ejs')
var fs = require('fs')
app.set('view engine','ejs')
app.use(express.static('public'))
const routes = require('./routes/route')
routes(app)

var server = app.listen(8083,function(){
	console.log("server started")
})
