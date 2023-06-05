var express = require('express');
var router = express.Router();
var user = require("../controller/test")
var us=require("../controller/getupdateUser")

/* GET home page. /
router.get('/', user.getAll);
/  get one user and update name and picture for user */
router.get('/',us.getUser)
router.put('/',us.updateUser)

// get one user and update keys  of user

router.get('/user/:id',us.getUser);
router.put('/user/update/:id',us.updateUser);




module.exports = router;