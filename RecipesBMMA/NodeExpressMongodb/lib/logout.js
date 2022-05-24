var express = require('express');
var router = express.Router();
//********************************/
//middleware that is specific to this router
//********************************/
router.use(function timeLog(req,res,next){
    console.log('Info - Access '+req.method +' method Protected Page Time: ', new Date(Date.now()).toLocaleString("it-IT"));
    next();
});
//********************************/
//define the home page router
//********************************/
router.get('/',function(req,res){
    req.session.destroy(function(){
        console.log("Info - User logged out");
        res.redirect('/login');
    });
});
//*********************************/
module.exports=router;