const express = require('express'), 
    router = express.Router(),
    controller = require('../controllers/ProductController');
    // isLoggedIn = () =>(next); //for now  return 'next' which allows to jump to next function

router.get('/',controller._find);    //using function we defined in controller
router.get('/:_id', controller._findOne);   // parameters: _id
router.post('/add',   controller._insert);    // parameters:  //middleware allows you to run or not
router.post('/delete',  controller._delete);    // parameters: prod_id
router.post('/update',  controller._update);    // parameters: prod_id

module.exports = router;  //not class
