let mongoose2=require('../model/mongoose');
let getAll=async (req,res)=>{
    try{
        let data=await mongoose2.find();
        res.json(data);
    }
    catch(error){
        console.log('retriving data is getting error');
    }
    
};
let add=async(req,res)=>{
    try{
        let data=await mongoose2.create(req.body);
        //console.log(req.body);
        res.send(data);
    }
    catch(error){
        console.log('adding is error');
    }
}
let deletedata=async(req,res)=>{
    try{
        let id=(req.params.name);
        //console.log(id);
        nameId=(await mongoose2.findOne({name:id}));
        a=(nameId.id);
        //res.json(a);
        let data=await mongoose2.findByIdAndDelete(a);
        res.json('deleted');
    }
    catch(error){
        console.log(error);
        console.log("error is getting in delete");
    }
}
let dataup=async (req,res)=>{
    try{
        let s=(req.params.name);
        let s2=await mongoose2.findOne({name:s});
        console.log(s2);
        console.log(req.body);
        let s3=await mongoose2.findByIdAndUpdate(s2.id , req.body);
        res.json(s3);
    }
    catch(error){
        console.log(error);
        console.log('error is getting in updated');
    }
}
module.exports={
    getAll,
    add,
    deletedata,
    dataup
}