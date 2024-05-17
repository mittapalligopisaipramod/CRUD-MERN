let express=require('express');
let route=express.Router();
let view=require('../view/view');
route.get('/',view.getAll);
route.post('/add',view.add);
route.delete('/delete/:name',view.deletedata);
route.put('/update/:name',view.dataup);
module.exports=route;