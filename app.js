let express=require('express');
let app=express();
let route=require('./router/router');
let mongoose=require('mongoose');
app.use(express.json());
app.use(express.static('public'));
mongoose.connect('mongodb://localhost:27017/emp')
.then(()=>{
    console.log('connected');
}).catch((error)=>{
    console.log('connection error');
});
app.listen('3002',function(){
    console.log('server is running');
});
app.use('/emp',route);