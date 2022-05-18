var database = require('./lib/database');
var insert = require('./lib/insert')(database);
var viewRecords = require('./lib/viewRecords')(database);
//********************************************* *
const express = require('express')
const bodyParser = require('body-parser');
const app = express()
app.use(express.static('static'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}) );
app.use('/InsertRecipe', insert);
app.use('/ViewRecipes', viewRecords);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})