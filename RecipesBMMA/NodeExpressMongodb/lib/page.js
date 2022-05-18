var express = require('express');
var  router = express.router();
var database;
//************************************/
//middleware that is specific to this router
//************************************/
router.use(function timeLog(req,res,next){
    console.log('Info - Access ' + req.method + ' method Processed Page Time: ', new Date(Date.now()).toLocaleString("it-IT"));
    next();
});
//**************************************/
//define the home page
//**************************************/
router.get('/', function(req,res,next){
    //IF session exists, proceed to page
    if(req.session.user){
        if(req.session.page_views){req.session.page_views++}
        else{req.session.page_views=1}
        res.render('protected_page',{'userid':req.session.user.userid,'views':req.session.page_views});
        next();
    }else{
        var err = new Error("user not logged in!!");
        console.log("Error - Trying to access unauthorized page!");
        next(err);
    }
});
//***************************************/
router.use(function(err,req,res,next){
    //user should be authenticated! Redirect him to log in
    res.clearCookie('userid');
    res.redirect('/login');
    console.log(err);
});
//***************************************/
router.use(function timeLog(req,res,next){
    console.log('INFO - Protected page user: '+req.session.user.userid,' Time: ',new Date(Date.now()).toLocaleString("it-IT"));
});
//****************************************/
module.exports = function(param){
    database=param;
    return router;
}