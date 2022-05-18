var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/Recipes", {useNewUrlParser: true, useunifiedTopology: true})
.then(() => console.log('Info - Now connected to MongoDB!'))
.catch(err => console.error('Error - Something went wrong', err));
mongoose.connection.once("open", function (err,resp){console.log('Info - Database Success');});
mongoose.connection.on("error",console.error.bind(console,"Error - Connection error:"));
//---------------------------------------------------------------------------------------------------
var DBConnection = function(){
    this.Schema = mongoose.Schema({
        'titolo': {type:String, required:[true,'Title required'],minlength:[3,'Minimum user length 3 characters']},
        'difficolta': Number,
        'ingredienti': [String],
        'cottura': String,
        'porzioni': Number,
        'procedimento' : {type:String, required:[true,'procedimento required'],default:''} });
    this.Model = mongoose.model('recipe', this.Schema,'recipes');
    }
//----------------------------------------------------------------------------------------------------
DBConnection.prototype.recipe = function(_titolo, _diff, _ing, _cott, _porz, _proc){
    return new this.Model({'titolo':_titolo, 'difficolta':_diff, 'ingredienti':_ing, 'cottura': _cott, 'porzioni':_porz, 'procedimento':_proc});
}
//--------------------------------------------------------------------------
module.exports = new DBConnection();    