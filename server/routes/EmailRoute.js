const express = require ("express"),
    router = express.Router(),
    controller = require ('../controllers/EmailController'),

// serving 404 page
var path = require('path');


var PORT = process.env.PORT || 8080
app.listen(PORT, function() {
	console.log(`Serving my master on port ${PORT}!`)
})


///////////////////////////??
module.exports = router;
/////////////////////////