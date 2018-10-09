const express = require ("express"),
    router = express.Router(),
    controller = require ('../controllers/PaymentController')

router.post('/', controller);

module.exports = router;
