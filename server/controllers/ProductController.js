const Products = require('../models/ProductModel'); //import Product model
const Image = require('../models/ImageModel'); //import Image model
class ProductController {
   
    //GET FIND ALL
    async _find(req,res) { //(finds many and returns array)
        console.log ('displaying all products' );
        let prodInfo;
        try {
            prodInfo = await Products.find({});
            res.send(prodInfo)
        }
        catch(e) {
            console.log("error reading prod info: ", e);
            res.send({e})
        }
        
    }
    async _findOne(req,res) { //(finds one and returns one)
        let {_id} =  req.params;
        console.log ('displaying one product:', _id, req.params );
        let browserStuff = '<div>';

        try {
            const prodInfo = await Products.findOne({_id:_id});
            browserStuff += `<h3>product: ${prodInfo.name},$${prodInfo.price},${prodInfo.category} </h3>`;

            const imageInfo = await Image.find({product_id:_id});
            // ///////////////// 
            imageInfo.forEach((elem)=> {
                browserStuff += `<div style="width: 25%; border:grey 1px solid"> <img src='${elem.address}' width='100%' > </div></div>`;
                console.log(elem.address);
            })
            
            browserStuff += '</div>';
            console.log(browserStuff);

            res.send(browserStuff)

        }
        catch(e) {
            res.send({e})
        }
    }
    //more functions here
    async _insert(req,res) { //(finds many and returns array) //next used to determine if this runs or not
    // async _insert(req,res, next) { //(finds many and returns array) //next used to determine if this runs or not

        let {_id,name,width,height, depth,weight,price,category,artwork_id} =  req.body;
        if (!name || !price || !artwork_id) {
            console.log("ERROR: name, price and artwork_id are required fields");
        }
        console.log ('creating new product: ', name,width,height, depth,weight,price,category,artwork_id);
        try {
            let productNew = {
                name: name,
                width: width,
                height: height,
                depth: depth,
                weight: weight,
                price: price,
                category: category,       //product category
                artwork_id: artwork_id
            }
            const prodInfo = await Products.create(productNew)//model fetch data from mongo
      
            res.send(prodInfo); //sends to browser
        }
        catch(e) {
            res.send({e})
        }
    }
    async _delete(req,res) { //(finds many and returns array)
        let {_id} =  req.body;
        console.log ('deleting product: ', _id );
        try {
            const returnCode = await Products.remove({_id:_id})
            res.send(returnCode); //sends to browser
        }
        catch(e) {
            res.send({e})
        }
    }
    async _update(req,res) { //(finds many and returns array) //next used to determine if this runs or not
        let {_id, name,width,height, depth,weight,price,category,artwork_id} =  req.body;
        let prodInfo, prodInfoUpdated;

        console.log ('creating updated product: ', _id, name,width,height, depth,weight,price,category,artwork_id);
        try {
            prodInfo = await Products.findOne({_id:_id})//get info on image to update
            // console.log ('read in db info: ',prodInfo);
        }
        catch(e) {
            console.log('ERROR: ', e);
            // res.send({e})
        }
        try {
            prodInfoUpdated = await Products.updateOne({_id},{$set:{
                name: (name || prodInfo.name),    
                width: (width || prodInfo.width),    
                height: (height || prodInfo.height),
                depth:  (depth || prodInfo.depth),
                price:  (price || prodInfo.price),
                category: (category || prodInfo.category), 
                artwork_id: (artwork_id || prodInfo.artwork_id)
            }})
            res.send(prodInfoUpdated); //sends to browser
        }
        catch(e) {
            res.send({e})
        }
    }
}

const productController = new ProductController();     
module.exports = productController;
//or   module.exports = new ProductController();   



