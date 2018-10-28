var jwt = require('jsonwebtoken'),
    config = require('../config')  //secret seed

///MIDDLEWARE
var isLoggedIn = (req, res, next) => { 
    var token = req.headers.authorization
    console.log("testing token:",token)
    if (token) {
        try {
            const decoded = jwt.verify(JSON.parse(token), config.secret);
            req.token = token;
            req.user = decoded;
            if (decoded) {
                console.log('proceeding! user is logged in (hello from middleware)')
                return next();
            }
        }
        catch(error) {
            console.log('isLoggedIn... NOT')
            res.json({error:error})
        }
    } else {
        console.log('===>ERROR!.  user not logged in')
    }
}
module.exports = isLoggedIn;