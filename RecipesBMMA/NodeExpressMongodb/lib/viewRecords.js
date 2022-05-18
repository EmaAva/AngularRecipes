var express = require('express');
var router = express.Router();
var database;
//*******************************/
//middleware that is specific to this router
//*******************************/
router.use(function timeLog(req,res,next){
    console.log('Info - Access ' +req.method + ' method Protected Page Time: ',
    new Date(Date.now()).toLocaleString("it-IT"));
    next();
});
//*******************************/
//define the home page
//*******************************/
//*******************************/
router.get('/',function(req,res,next){
    database.Model.find(
    function(err,response){
        res.send(response);
    });
});
//****************************************/
module.exports=function(param){
    database=param;
    return router;
}