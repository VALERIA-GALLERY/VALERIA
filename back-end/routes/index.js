var express = require('express');
var router = express.Router();
var user = require("../controller/test")
var {getUser, updateUser}=require("../controller/getupdateUser")
var {getUserPosts}=require("../controller/getUserPosts")


router.get('/',getUser)
router.put('/',updateUser)


router.put('/',updateUser)

router.get('/user/post/:id',getUserPosts)

router.get('/user/:id',getUser);
router.put('/user/update/:id',updateUser);






module.exports = router;