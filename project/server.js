const express = require('express');
const cors =  require('cors')
const app = express()
var  corOptions= {
    origin : 'https//localhost:3000' 
}
//routers
app.use(express.json());
app.use(express.urlencoded({extended:true}));
//middleware
app.use(cors());

// static Images Folder
app.use('/Images', express.static('./Images'))
const router = require('./routes/productRouter.js');
app.use('/api/products',router) //! use all the routes Common end Point
//test Api
app.get('/', (req,res)=>{
    res.json({message:'hello from api'});
})
const PORT = process.env.PORT || 8080;
 //server 
  app.listen(PORT , ()=>{
console.log(`server is running port ${PORT}`)
})