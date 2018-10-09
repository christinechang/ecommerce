console.log('Hello from ecommerceApp')
const express = require('express'); //express is function assign return to new variable =  app
const app = express();
const mongoose = require('mongoose');
const productRoute = require('./routes/ProductRoute');
const adminRoute = require('./routes/AdminRoute');
const artworkRoute = require('./routes/ArtworkRoute');
const imageRoute = require('./routes/ImageRoute');
const paymentRoute = require('./routes/PaymentRoute');

//cors stuff:
const cors = require('cors');
app.use(cors());
app.options('*', cors());

//image stuff:
const cloudinary 			= require('cloudinary');
const cloudinaryConfig    	= require('./cloudinaryConfig');

///////initial settings for POST
const bodyParser= require('body-parser')
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//connect to mongo
mongoose.connect('mongodb://127.0.0.1/ecommerce',()=>{ //always use this ip address
    console.log('connected to mongodb');
})  //will create if doesn't exist

//routes
app.use('/products', productRoute)       //'/products'  is base for browser address/path/route
app.use('/admin', adminRoute)       //'/admin'  is base for browser address/path/route
app.use('/artworks', artworkRoute)       //'/artwork'  is base for browser address/path/route
app.use('/images', imageRoute)       //'/images  is base for browser address/path/route
app.use('/payment', paymentRoute)       

                                //only one word only!
//app.js imports routes which imports controller.
//go to localhost:3000/movies

/////set the server to listen on port 3000 ////////////////////////////
var port = 3010;

app.listen(port,()=> {
    console.log(`server is running on port ${port}`);
});

