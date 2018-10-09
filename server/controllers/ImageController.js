const Image = require('../models/ImageModel'); //import Product model
class ImageController {
   
    //GET FIND ALL
    _find (req,res) {
        Image.find({},(err, images)=>{
            if(!err) return res.send(images);
        })
    }
    async _findMany(req,res) { //(finds one and returns one)
        let {ref_id} =  req.params;
        console.log ('displaying one image:', ref_id, req.params );
        try {
            const imageInfo = await Image.find({ref_id:ref_id})
            console.log("imageInfo: " , imageInfo)
            res.send(imageInfo); //sends to browser/

        }
        catch(e) {
            res.send({e})
        }
    }
    //more functions here
    async _insert(req,res) { //(finds many and returns array) //next used to determine if this runs or not
        let {photo_url,public_id,ref_id,alt} =  req.body;
        try {
            let imageNew = { 
                photo_url: photo_url, 
                public_id: public_id,
                ref_id: ref_id,
                alt: alt
            }
            const imageInfo = await Image.create(imageNew)//model fetch data from mongo
            res.send(imageInfo); //sends to browser
        }
        catch(e) {
            res.send({e})
        }
    }
    async _delete(req,res) { //(finds many and returns array)
        let {_id} =  req.body;
        console.log ('deleting image: ', _id );
        try {
            const returnCode = await Image.remove({_id:_id})
            res.send(returnCode); //sends to browser
        }
        catch(e) {
            res.send({e})
        }
    }
}

const imageController = new ImageController();     
module.exports = imageController;
//or   module.exports = new ImageController();   



