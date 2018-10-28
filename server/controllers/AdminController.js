const Admin = require('../models/AdminModel'); //import Account model
const config = require('../config')
const jwt = require('jsonwebtoken')
class AdminController {
   
    //GET FIND ALL
    async _find(req,res) { //(finds many and returns array)
        console.log ('displaying all index' );
        try {
            const adminInfo = await Admin.find({})//model fetch data from mongo
                                        //find uses filter in {} is filter
                                        //so empty object gets everything
            res.send(adminInfo); //sends to browser
        }
        catch(e) {
            res.send({e})
        }
    }
    async _findOne(req,res) { //(finds one and returns one)
        let {_id} =  req.params;
        console.log ('displaying one admin:', _id, req.params );
        try {
            const adminInfo = await Admin.findOne({_id:_id})//model fetch data from mongo
                                        //find uses filter in {} is filter
                                        //so empty object gets everything
            res.send(adminInfo); //sends to browser
        }
        catch(e) {
            res.send({e})
        }
    }
    //more functions here
    async _insert(req,res) { //(finds many and returns array)
        // if login is admin
        let {username, password} =  req.body;
        console.log ('creating new admin: ', username, password );
        try {
            let adminNew = {
                username:username,
                password:password
            }
            const adminInfo = await Admin.create(adminNew)//model fetch data from mongo
      
            res.send(adminInfo); //sends to browser
        }
        catch(e) {
            res.send({e})
        }
    }
    async _delete(req,res) { //(finds many and returns array)
        // if username as admin
        let {_id} =  req.body;
        console.log ('deleting product: ', _id );
        try {
            const returnCode = await Admin.remove({_id:_id})
            res.send(returnCode); //sends to browser
        }
        catch(e) {
            res.send({e})
        }
    }
    //christine_chang,  fakepassword
    async _login(req,res) { //(finds one and returns one thing - not array)
        let {username,password} =  req.body;
        // console.log ('===>AdminController logging in:', username, 'password' );
        try {
            const user = await Admin.findOne({username:username})
            //check the password
            if (user) {
                user.comparePassword(password, (err,success)=> {
                    // console.log (`===>AdminControllererr: ${err}; success: ${success}`) 
                    if (!err && success) {
                        // generate token
                        // console.log("===>AdminController: SUCCESS")
                        var token = jwt.sign(user.toJSON(), config.secret,{ expiresIn:100080 })
                        return res.json({success:true, token: token, username:username })
                    } else{
                        //this works
                        // console.log("===>AdminController: ERROR - password not correct. PUT ERROR MESSAGE ON CLIENT")
                        return res.json({success:false, err})
                    }
                })
            } else {
                // console.log("===>AdminController: Error: no user. PUT ERROR MESSAGE ON CLIENT")
            }

        }
        catch(e) {
            // console.log("===>AdminController: ERROR caught: ", e)
            res.send({e})
        }
    }
    async _register(req,res) { //(finds one and returns one thing - not array)
        
        let {username, password, confirmPassword} =  req.body;
        console.log("req.body: ", req.body)

        if (!username || !password || !confirmPassword) return res.send({message:"all fields are required"})
        if (password !== confirmPassword)   return res.send({message:"passwords don't match"})
        
        try {
            console.log("about to findone")
            const userInfo = await Admin.findOne({username:username})
            console.log("should be null userInfo: ", userInfo)

            if (userInfo) return res.send({message:"already registered"})
            const admin = new Admin ({
                username: username,
                password: password
            })
            console.log("new admin:",admin);
            admin.save(function(err) {
                if (err) return res.send({message:err})
                res.send({
                    message:"succesfully registered"
                })
            })



        }
        catch(e) {
            res.send({e})
        }
    }

    

}

const adminController = new AdminController();     
module.exports = adminController;
//or   module.exports = new AdminController();   



