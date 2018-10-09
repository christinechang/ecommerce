const express = require('express'), 
    router = express.Router(),
    controller = require('../controllers/AdminController');
    isLoggedIn = require('../middleware/isLoggedIn');


router.get('/', isLoggedIn, controller._find);    //using function we defined in controller
router.get('/:_id', isLoggedIn, controller._findOne);   // parameters: _id
router.post('/add', isLoggedIn, controller._insert);    // parameters:  //middleware allows you to run or not
router.post('/delete', isLoggedIn, controller._delete);    // parameters: prod_id
router.post('/login', controller._login);   // parameters:
router.post('/register', controller._register);   // parameters: 

// router.post('/update',  controller._update);    // parameters: 

module.exports = router;  //not class
