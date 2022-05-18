var express = require('express');
var router = express.Router();
var database;
//*******************************/
//middleware that is specific to this router
//*******************************/
router.use(function timeLog(req, res, next) {
    console.log('Info - Access ' + req.method + ' method Protected Page Time:',
        new Date(Date.now()).toLocaleString("it-IT"), '\n -body: ', req.body);
    console.log(req);
    next();
});
//*******************************/
//define the home page
//*******************************/
//*******************************/
router.post('/', function (req, res, next) {
    console.log('Sei arrivato nella chiamata ' + req.method);
    database.Model.find({ 'titolo': req.body.title },
        function (err, response) {
            if (response.length == 0) {
                let ingredients = (req.body.ings).split(",");
                database.recipe(req.body.title, req.body.diff, ingredients, req.body.cott, req.body.porz, req.body.proc).save(function (err, item) {
                    if (err) {
                        res.send(JSON.parse('{"result":"Error while adding. Retry"}'));
                    } else {
                        res.send(response);
                    }
                });
            } else {
                res.send(JSON.parse('{"result":"Recipe already stored"}'));
            }
        });
});
//****************************************/
module.exports = function (param) {
    database = param;
    return router;
}