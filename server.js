var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var cors = require('cors')
var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/mongoosefunfunfun')

app.use(cors())
app.use(bodyParser.json())
app.set('port', (process.env.PORT || 4000))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

var route = require('./route.js')
app.use('/', route())

app.listen(app.get('port'), function () {
  console.log('run at port', app.get('port'))
})
