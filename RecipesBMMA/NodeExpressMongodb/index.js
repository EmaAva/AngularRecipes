var database = require('./lib/database');
var insert = require('./lib/insert')(database);
var viewRecords = require('./lib/viewRecords')(database);
//********************************************* *
const express = require('express')
const bodyParser = require('body-parser');
const app = express()
app.use(express.static('static'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/InsertRecipe', insert);
app.use('/ViewRecipes', viewRecords);
app.get('/ViewRecipe', function (req, res) {
  database.Model.find(
    function (err, response) {
      res.send(response);
    });
})
app.post('/delete', function (req, res) {
  console.log(req.body.titolo);
  database.Model.deleteOne({ titolo: req.body.titolo }, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
})
app.post('/UpdateRecipe', function (req, res) {
  console.log(req.body.titolo);
  database.Model.updateOne({ titolo: req.body.titleBefore }, {
    titolo: req.body.title,
    difficolta: req.body.diff,
    cottura: req.body.cott,
    porzioni: req.body.porz,
    procedimento: req.body.proc
  }, function(err, docs){
    if (err){
      res.send(err)
  }
  else{
      res.send("Updated Docs : ", docs);
  }
  })
})
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})