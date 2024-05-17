let mongoose=require('mongoose');
let obj=new mongoose.Schema({
    name:{
        type:String 
    },
    roll:{
        type:Number
    }
});
let mongoose2=mongoose.model('Emp',obj);
module.exports=mongoose2;