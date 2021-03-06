const Artwork = require('../models/ArtworkModel'); //import Product model
            //stores info on the artwork - name, size, etc
class ArtworkController {
   
    //GET FIND ALL
    async _find(req,res) { //(finds many and returns array)
        // console.log ('displaying all artwork' );
        try {
            const artInfo = await Artwork.find({})//model fetch data from mongo
                                        //find uses filter in {} is filter
                                        //so empty object gets everything
            res.send(artInfo); //sends to browser
        }
        catch(e) {
            res.send({e})
        }
    }
    async _findOne(req,res) { //(finds one and returns one)
        let {_id} =  req.params;
        // console.log ('(artwork controller)findOne artwork:', _id, req.params );
        try {
            const artInfo = await Artwork.findOne({_id:_id})//model fetch data from mongo
                                        //find uses filter in {} is filter
                                        //so empty object gets everything
            res.send(artInfo); //sends to browser
        }
        catch(e) {
            res.send({e})
        }
    }
    //more functions here
    async _insert(req,res) { //(finds many and returns array) //next used to determine if this runs or not
        let {name,description,category,media,width,height,year,size,imgurl,public_id, alt, note, sortId,price} =  req.body;
        console.log ('creating new artwork: ',name, width,height,year,category,media,description);
        try {
            let artworkNew = {
                name: name,    
                description: description,
                category: category,       
                media: media,
                width: width,    
                height: height,    
                year: year,
                size: size,
                imgurl:imgurl,
                public_id:public_id,
                alt:alt,
                note:note,
                sortId:sortId,
                price:price
            }
            const artInfo = await Artwork.create(artworkNew)//model fetch data from mongo
            res.send(artInfo); //sends to browser
        }
        catch(e) {
            res.send({e})
        }
    }
    async _delete(req,res) { 
        let {_id} =  req.body;
        console.log ('deleting artwork: ', _id );
        try {
            const returnCode = await Artwork.remove({_id:_id})
            if (returnCode.n === 1) {
                res.send({msg:`Item ${_id} deleted`})
                cloudinary.v2.uploader.destroy(public_id, function(error, result){
                    console.log('IMAGE DELETE: error', error, 'result',result)
                });
            } else {
                console.log("ERROR: deleting artwork")
            }
        }
        catch(e) {
            res.send({e})
        }
    }
    async _update(req,res) { //(finds many and returns array) //next used to determine if this runs or not
        let {_id, name,description,category,media, width,height,year,size,imgurl,public_id,alt,note,sortId,price} =  req.body;

        let artInfo, artInfoUpdated;

        console.log ('creating updated artwork: ', _id, name,width,height,year,category,media,description,imgurl,alt,note,sortId);
        
        try {
            artInfo = await Artwork.findOne({_id:_id})//get info on image to update
            console.log ('read in db info: ',artInfo);
        }
        catch(e) {
            console.log('ERROR: ', e);
            // res.send({e})
        }
        try {
            artInfoUpdated = await Artwork.updateOne({_id},{$set:{
                name: (name || artInfo.name),    
                description: (description || artInfo.description), 
                category: (category || artInfo.category), 
                media: (media || artInfo.media), 
                width: (width || artInfo.width),    
                height: (height || artInfo.height),
                year:  (year || artInfo.year),
                size: (size || artInfo.size),
                imgurl: (imgurl || artInfo.imgurl), 
                public_id: (public_id || artInfo.public_id),
                alt: (alt || artInfo.alt),
                note: (note || artInfo.note),                
                sortId: (sortId || artInfo.sortId),
                price: (price || artInfo.price)
            }})
            res.send(artInfoUpdated); //sends to browser
        }
        catch(e) {
            res.send({e})
        }
    }
}

const artworkController = new ArtworkController();     
module.exports = artworkController;
//or   module.exports = new ArtworkController();   



