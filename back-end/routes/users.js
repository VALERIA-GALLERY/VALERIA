var express = require('express');
var router = express.Router();
const {addNewUser, getUser , getAllUsers , deleteUser} = require("../controller/users")

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log('pass')
  res.send('respond with a resource');
});

router.post("/signup",addNewUser)
router.get("/login/:id",getUser)
router.get('/users', getAllUsers);
router.delete('/user/:id', deleteUser);

module.exports = router;
