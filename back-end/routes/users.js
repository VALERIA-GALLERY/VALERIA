var express = require('express');
var router = express.Router();
const {addNewUser} = require("../controller/users")

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log('pass')
  res.send('respond with a resource');
});

router.post("/signup",addNewUser)

module.exports = router;
